---
title: Novosti u 0.7 (ranije)
summary: PDF podloge i uvoz PDF-a, skenirani crteži s automatskim praćenjem, pravi splajnovi uz SPLINE, SPLINEDIT i PEDIT, menadžer stilova kota, tekst koji zadržava formatiranje, WBLOCK i tvoje vlastite razmjere, 3D tijela iz drugih programa, registrovanje skenova, panel Laser, USD izvoz, Historija i štampanje u CadCraft Studiju, vođen prvi crtež, traka alata na bilo kojoj strani ili u manje redova, i još za AI asistente.
keywords: novosti 0.7, raniji izdanje, bilješke o izdanju, dnevnik promjena, promjene, 0.7, verzija, nove funkcije, pdf, pdfattach, pdfimport, podloga, skeniranje, scan, scanattach, scantrace, praćenje, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatiranje, wblock, scalelistedit, lista razmjera, acis, 3d tijela, registerscans, registrovanje skenova, icp, e57, las, laser, grbl, g-code, usd, usdout, historija, verzije, poredi, štampa, štampač, png, svg, stil iscrtavanja, tip linije, obilazak, podsjetnik, mapa komandi, položaj trake, redovi trake, toolbardock, regen, regenall, touchpad, prevlačenje, kodna stranica, ćirilica, korejski, kineski, japanski, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, folder podrške, asistenti, mcp, jedinice, portugalski
from: d9a8ea79
---

Ovo je šta se promijenilo u CadCraftu 0.7, u odnosu na 0.6. Mnogo toga su tražili korisnici na Discordu. Spisak je grupisan po oblastima, s najvažnijim prvim.

## Novo

### PDF-ovi i skenirani crteži

- **Stavi PDF stranicu ispod crteža.** {{cmd:PDFATTACH}} (`PDFATT`) postavlja stranicu u njenoj stvarnoj veličini ili u razmjeri koju ukucaš. Hvataj za njene linije, stišaj je, učini je monohromatskom ({{cmd:PDFADJUST}}), obreži ({{cmd:PDFCLIP}}) i uključi ili isključi PDF-ove vlastite slojeve ({{cmd:PDFLAYERS}}). Iscrtava se kao linije, ispune i tekst, a DWG ili DXF 2000 je čuva kao vezu na datoteku. Otvaranje PDF-a s {{ui:Otvori}} pita da li da ga priložiš ili uvezeš. Pogledaj [PDF podloge i uvoz PDF-a](topic:pdf-underlay).
- **Pretvori PDF stranicu u objekte crteža.** {{cmd:PDFIMPORT}} (`PDFIM`) pravi linije, polilinije, krugove, lukove, pune šrafure i tekst na slojevima nazvanim po PDF-u, u stvarnoj veličini, u razmjeri koju ukucaš, ili razmjerno iz dvije tačke i stvarne dužine, u jednom koraku poništavanja. Pogledaj [Uvezi stranicu](topic:pdf-underlay#import-a-page).
- **Skenirani crteži.** {{cmd:SCANATTACH}} unosi PNG, JPEG ili TIFF (jednu stranicu ili sve) ili PDF stranicu koja je slika. Zatim je razmjeri iz dvije tačke ({{cmd:SCANSCALE}}), poravnaj ({{cmd:SCANALIGN}}), ispravi prema njenim dugim linijama ({{cmd:SCANDESKEW}}), učini je crno-bijelom i ukloni mrlje ({{cmd:SCANCLEAN}}), obreži je i izbriši dijelove. Svaki korak je jedan korak poništavanja, a originalna datoteka se čuva. Pogledaj [Skenirani crteži i praćenje](topic:scanned-drawings).
- **Prati skenirani crtež u linije i lukove.** {{cmd:SCANTRACE}} crta linije skena kao linije i lukove na novom sloju, SCAN-TRACE, uz toleranciju koju postaviš, a tekst i šrafure ostavlja kakvi jesu. Izvještaj kaže šta je napravljeno, a šta ostavljeno, i to nije tvrdnja da je rezultat tačan: provjeri ga prema listu. {{cmd:RASTERSNAP}} omogućava hvatanje objekata za krajeve, uglove i presjeke skena. Ništa se nigdje ne šalje i ne koristi se obučeni model. Pogledaj [Praćenje](topic:scanned-drawings#the-trace).

### Crtanje i uređivanje

- **Pravi splajnovi.** {{cmd:SPLINE}} (`SPL`) crta krivu kroz tačke ili od kontrolnih tačaka (stepen 1 do 5), s krajnjim tangentama. {{cmd:SPLINEDIT}} (`SPE`) pomjera, dodaje i briše tačke oslanjanja ili kontrolne tačke, postavlja težine, otvara, zatvara, obrće ili pretvara splajn u polilniju. Splajnovi iz DWG i DXF datoteka otvaraju se kao splajnovi, a DWG i DXF 2000 ih čuvaju kao splajnove. Pogledaj [Splajnovi i polilinije](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zatvara i otvara polilinije, spaja linije i lukove s njima, postavlja jednu širinu, provlači krivu kroz temena ili splajn duž njih i vraća to s Decurve, obrće i uređuje više njih odjednom. Pogledaj [Uredi polilniju](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapisuje blok, neke objekte ili cijeli crtež u novu DWG ili DXF datoteku koja sadrži samo slojeve, stilove i blokove koje koriste. Pogledaj [Zapiši blok ili objekte u sopstvenu datoteku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) ponovo iscrtava karticu na kojoj si iz crteža, {{cmd:REGENALL}} (`REA`) svaku karticu, okno i otvoreni crtež. Pogledaj [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i kote

- **Tekst zadržava formatiranje.** Tekst pasusa iz drugih programa zadržava boje po riječima, podebljanje i kurziv, podvlačenje, razlomke u slogu i visine: iscrtava se na ekranu i u PDF-ovima, zadržava se kad mijenjaš riječi i vraća se pri spašavanju. Pogledaj [Formatiranje unutar teksta pasusa iz drugih programa](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Menadžer stilova kota.** {{cmd:DIMSTYLE}} (`D`) pravi, mijenja, poredi i primjenjuje imenovane stilove kota; promjena stila mijenja svaku kotu koja ga koristi. {{cmd:DIMEDIT}} (`DED`) vraća tekst na mjesto, unosi novi tekst, okreće ga ili kosi pomoćne linije; {{cmd:DIMTEDIT}} pomjera tekst lijevo, desno ili u centar. Pogledaj [Imenovani stilovi kota](topic:dimension-settings#named-dimension-styles).
- **Tvoje vlastite razmjere.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje razmjere kao 1:75 u spiskove razmjera prozora i štampe; čuvaju se u crtežu (DWG i DXF 2000), a crtež iz drugog programa donosi svoj spisak. Pogledaj [Razmjere](topic:units-papers-scales#scales).
- **Tekst u drugim azbukama.** DXF datoteke sačuvane u ćiriličnim, korejskim, kineskim, japanskim ili vijetnamskim kodnim stranicama sada se otvaraju s tekstom, a kineski, japanski i korejski tekst se štampa u PDF-ovima (štampa prvi put preuzme veći font kad mu zatreba). Pogledaj [Font](topic:text#font).

### Iscrtavanje i štampa

- **Više u tabelama stilova iscrtavanja.** Za svaku boju tabela sada može postaviti i tip linije, kraj linije i spoj linija, te stil ispune koji štampa pune ispune kao linije šrafure; tabela ima svoj spisak debljina i razmjeru tipa linije. Pogledaj [Tabele stilova iscrtavanja](topic:plot-pdf#plot-style-tables).
- **Štampa, te PNG i SVG datoteke.** Dijalog Iscrtavanje ima {{ui:Štampaj…}}, {{ui:Preuzmi PNG}} (300 dpi) i {{ui:Preuzmi SVG}}. U CadCraft Studiju prikazuje štampače na računaru, njihov papir i broj kopija. Pogledaj [Štampa](topic:plot-pdf#print) i [Slike i SVG datoteke](topic:plot-pdf#picture-and-svg-files).

### 3D i oblaci tačaka

- **3D tijela iz drugih programa.** Tijela, regije i sklopovi u prostoru modela crteža prikazuju se na 3D kartici, samo za čitanje, a spašavanje u DWG ih vraća neizmijenjene. Plohe na površinama koje CadCraft još ne crta se navode, ne nagađaju. Pogledaj [Tijela iz drugih programa](topic:3d-solids#solids-from-other-programs).
- **Registrovanje više skenova.** {{cmd:REGISTERSCANS}} (`REGSCAN`) postavlja skenove snimljene s različitih pozicija u jedan okvir, po parovima tačaka ili upisanim koordinatama cilja, dotjeruje ih s ICP, čuva registraciju kao mali projektni fajl i zapisuje registrovani oblak u jednu LAS ili E57 datoteku. Pogledaj [Registruj više skenova u jedan](topic:register-scans).
- **USD izvoz.** {{cmd:USDOUT}}, ili {{cmd:EXPORT3D}} › {{ui:USD}}, zapisuje tijela s 3D kartice kao `.usda`, `.usdc` ili `.usdz`. Pogledaj [Izvezi 3D model kao USD](topic:usd).
- **Proračuni na 3D kartici.** Gdje alati 3D kartice traže daljinu, možeš ukucati proračun, kao u komandnoj liniji. Pogledaj [Aritmetika u ukucanoj vrijednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Izrada

- **Pošalji crtež laseru.** {{cmd:LASER}}, ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}, otvara panel preko crteža: svaki sloj reže, ocrtava, graviра linije, popunjava oblike, graviра sliku ili se ne šalje, sa svojom snagom, brzinom i prolazima. Pregled prati tvoje izmjene, {{ui:Spasi G-kod…}} zapisuje G-kod GRBL laserskog režima, a u Chromeu ili Edgeu panel može uokviriti posao i poslati ga preko USB-a. Postavke se čuvaju u crtežu (DWG i DXF). Pogledaj [Pošalji crtež laseru](topic:laser-cutting).
- **Simboli instalacija zgrade u dodatku Elektro.** Utičnice za podatke, telefon i TV, ključni i vremenski prekidači, termostat, znak za izlaz, detektori, tačka za poziv i sirena, ventilator, bojler, šporet, tačka za punjenje električnih vozila, mjerač energije i podrazvodna tabla, te RCD i RCBO simboli. Strujni krug može imati RCD, tabela razvodne table ima kolonu za RCD, a provjere imenuju strujne krugove utičnica bez RCD-a od 30 mA ili manje. Ovo je podsjetnik za projektovanje, a ne provjera propisa.
- **Dodatak P&ID.** P&ID crta dijagrame procesa: simbole s tačkama spajanja, linije procesa i signala, oznake, brojeve linija, spiskove linija, opreme, instrumenata i ventila (CSV ili radna sveska) i provjere. Dolazi uz CadCraft i isključen je dok ga ne uključiš u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Dodaci}}. To je pomoć pri crtanju, a ne inženjersko odobrenje, i za sada su njegove riječi samo na engleskom.

### Početak i ekran

- **Vođen prvi crtež.** {{cmd:TOUR}} (ili {{ui:Pogledaj obilazak}} na početnoj kartici) vodi te kroz šest koraka u pravom crtežu: liniju, krug, pomjeranje, skraćivanje, brisanje i kotu. Počinje sam prvi put kad se CadCraft otvori s praznim crtežom. Pogledaj [Radije vođen?](topic:getting-started#prefer-to-be-guided).
- **Podsjetnik i mapa komandi.** [Podsjetnik](topic:cheat-sheet) ima 40 svakodnevnih komandi na jednoj stranici, također kao PDF za štampu, a [mapa komandi](topic:command-map) navodi komande s kratkim imenima, od A do Z.
- **Traka alata na bilo kojoj strani.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Položaj trake s alatima}}: vrh (kao ranije), dno, lijevo ili desno, ili ukucaj {{cmd:TOOLBARDOCK}}. Pogledaj [Položaj trake s alatima](topic:settings#toolbar-position).
- **Redovi alatne trake.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Redovi alatne trake}}: prelamaj da stane, 2 reda ili 1 red, za CadCraft alatnu traku i stilove Drafting classic i Ribbon. {{key:Shift+Ctrl+F1}} prolazi kroz njih, {{key:Ctrl+F1}} kroz ono što dugmad prikazuju, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} ih postavljaju. Početna poruka ima dugme za zatvaranje. Zahvaljujemo GJoe2, koji je ovo poslao kao pull request. Pogledaj [Redovi alatne trake](topic:settings#toolbar-rows).

### U CadCraft Studiju

- **Historija.** {{cmd:HISTORY}} (`HIST`), ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Historija…}}: kopije koje Studio čuva kad otvoriš i spasiš crtež, te verzije crteža u oblaku kad si ga otvorio iz oblaka. Otvori ili vrati jednu, ili uporedi dvije, uz prikaz onoga što je dodano, uklonjeno i promijenjeno, bojom. Pogledaj [Historija](topic:history).
- **acad.lsp i acaddoc.lsp.** Izaberi folder podrške u {{cmd:APPLOAD}}: te dvije datoteke se učitavaju kad se CadCraft pokrene (acaddoc.lsp ponovo za svaku novu karticu crteža), a `S::STARTUP` se izvršava poslije njih. Pogledaj [Učitaj aplikacije](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dijalog Iscrtavanje u vlastitom prozoru.** Dugme u naslovnoj traci ga premješta u prozor koji možeš staviti na drugi monitor. Pogledaj [Premjesti dijalog](common:arrange-panels#move-a-dialog).

### Za AI asistente

- **Datoteke po imenu, u folderima koje biraš.** U CadCraft Studiju asistent može otvarati, spašavati i iscrtavati datoteke po imenu, te komandi predati datoteku koju traži (INSERT iz datoteke, izvoz iz COUNT, SAVEAS, PLOT), ali samo unutar folder-a koje dodaš pod {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Folderi koje smije koristiti}}. Pogledaj [Pusti ga da koristi datoteke u folderima koje izabereš](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Manje poziva.** Asistent može ukucati cijelu komandnu liniju odjednom, držati komandu otvorenu između poziva, brojati objekte po tipu i sloju bez njihovog navođenja, te postaviti blok s vrijednostima atributa u jednom koraku.
- **Bez prozora.** Komanda `cadcraft` zapisuje SVG štampe i pretvara, iscrtava, provjerava ili opisuje mnogo datoteka odjednom. Paket MCP još nije objavljen. Pogledaj [Rad s datotekama bez otvaranja CadCrafta](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Promijenjeno

- **Touchpad pomjera.** Pomjeri dva prsta na touchpadu, pa 2D pogled ide za njima; štipanje i točkić miša zumiraju. Pogledaj [Miš, touchpad i dodir](topic:mouse-trackpad-touch).
- **Objekti OLE se čuvaju.** Ugrađeni objekti DXF-a prikazuju se kao slika ili kao označen okvir i vraćaju se pri spašavanju DXF 2000. OLE objekti DWG-a se čuvaju i vraćaju kad spasiš kao DWG, ali se još ne prikazuju. Prije su se gubili pri spašavanju. Pogledaj [Objekti iz drugih programa (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jedinice novog crteža** slijede jedinicu koju označiš u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}}.

## Popravljeno

- Rasporedi koji su se otvarali prazni, ili su izgubili prozor i prikazivali cijeli model na njegovom mjestu, sad se otvaraju sa svojim stvarnim prozorima. Raspored bez veze sa svojim sadržajem se čuva, a izvještaj o otvaranju to kaže.
- DXF datoteke u starijim kodnim stranicama prikazivale su nečitak ćirilični i korejski tekst. Sad se čitaju ispravno.
- Tekst pasusa iz drugih programa gubio je formatiranje pri otvaranju i spašavao se kao običan tekst.

## U svakoj aplikaciji

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jedan spisak za dužinu, površinu, zapreminu, ugao i nagib, s tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključi jedinice koje nikad ne koristiš i one napuštaju spiskove jedinica; označi jednu i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U CadCraftu oznaka postavlja jedinice novog crteža kad je to jedinica koju crtež može nositi, a CadCraftov vlastiti okvir {{ui:Jedinice}} ne prati prekidače još. Kad crtež ima jedinice, dužina koju ukucaš može nositi oznaku bilo koje jedinice. Pogledaj [Jedinice, ukucane vrijednosti i spiskovi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklapaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Kompaktno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: povuci je da prikačiš ili otkačiš panel, spusti je na naslovnu traku drugog panela da dijele okvir kao kartice, zakači je da kliza do ivice, ili ga sakrij pa vrati s ivice. Pogledaj [Rasporedi panele](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Povuci dijalog za naslovnu traku izvan puta crtežu; vraća se tamo gdje si ga ostavio. Dvoklik na naslovnu traku ga ponovo centrira. Pogledaj [Premjesti dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primjera zahtjeva za tvog asistenta (urediti crtež, iscrtati skup, provjeriti crteže, postaviti pitanja modelu, zbrojiti predmjer, isprobati varijantu dijela…), svaki s alatima koje poziva i dozvolama koje treba, i svaki ponovljen našim testovima. Aplikacije ne sadrže AI. Pogledaj [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novi u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje još nije pregledao izvorni govornik. Pomoć je na engleskom.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (još nema datoteke za tvoj sistem, nema mreže, loš potpis), umjesto samo "Gotovo", i prestaje vraćati karticu Novosti koju si zatvorio dok ne stigne novije izdanje.

## Nije još u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket za Microsoft Store prebačeni su na 0.8 jer provjera certifikata još nije stigla. Provjeri SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windowsu, ako SmartScreen zaustavi instalater, izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Macu, prvi put, desni klik na CadCraft Studio i izaberi {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema izdanja za iPad ili iPhone.
- Spiskovi uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedan okvir ne čita.
- OLE objekti DWG-a se čuvaju, ali se ne prikazuju, a metafajl slike unutar OLE objekata se ne crta.
- Čitanje tabela stilova iscrtavanja (CTB datoteke) iz drugih programa čeka uzorak datoteke.
- Stariji azijski tekst zapisan kao `\M+` kodovi se čita, ali još nije provjeren na datoteci iz drugog programa.
- PDF podloge: slike unutar stranice prikazuju se na ekranu, ali se ne iscrtavaju; asistentova štampa izostavlja podloge, a nije provjereno kako ih drugi programi čitaju iz sačuvanog isječka i razmjere.
- Historija: CadCraft još ne šalje svoja spašavanja u oblak, pa su verzije u oblaku one spašene s drugih uređaja i s weba. Historija je samo u CadCraft Studiju.
- Nije još provjereno da li Studio čuva folder podrške acad.lsp poslije ponovnog pokretanja; ako traži, izaberi folder ponovo u APPLOAD.
- Panel Laser nije još isproban na pravom laseru: provjeri svaku postavku na otpadu. CadCraft Studio nema Web Serial, pa u Studiju panel samo čuva G-kod.
- Registrovanje skenova je provjereno na izmišljenim skenovima, ne još na setu pravog skenera.
- Pomjeranje dvoprstom je provjereno simuliranim događajima touchpada, ne još na pravom touchpadu.
- {{cmd:PEDIT}} nema opciju Uredi teme (koristi hvatišta ili Svojstva). Odmak, skraćivanje, produžavanje, zaobljenje, prelom i spajanje još ne primaju splajnove; visina splajna (Z) se ne čuva.
- Novi tekst pasusa još ne može dobiti kodove formatiranja, a SVG štampe prikazuju formatirani tekst u jednoj boji.
- Opcija WBLOCK-a Cijeli crtež zapisuje samo model, ne listove. Trenutni stil kota se ne čuva u datoteci: crtež se otvara s Standard kao trenutnim.
- Stilovi stilova trake s karticama još nemaju spiskove slojeva, boja ili tipova linija: koristi panel {{ui:Slojevi}} i {{ui:Svojstva}}.
- Oblaci tačaka se još ne čuvaju u crtežu niti štampaju, a E57 datoteke se otvaraju do 6 miliona tačaka i 512 MB.
- Sačuvane DWG datoteke CadCrafta još nisu provjerene u samom AutoCADu.

Sve ostalo je u [Još nije izgrađeno](topic:not-built-yet).
