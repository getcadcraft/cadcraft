---
title: Šta je novo u 0.7
summary: PDF podloge i uvoz PDF-a, skenirani crteži sa automatskim praćenjem, pravi splajnovi sa SPLINE, SPLINEDIT i PEDIT, upravljač stilovima kota, tekst koji zadržava oblikovanje, WBLOCK i vaše vlastite razmjere, 3D solidi iz drugih programa, registracija skenova, panel Laser, izvoz USD, historija i štampanje u CadCraft Studiu, vođeni prvi crtež, traka sa alatima na bilo kojoj strani ili u manje redova, i još više za AI asistente.
keywords: šta je novo, what's new, bilješke o izdanju, izmjene, 0.7, verzija, nove funkcije, pdf, pdfattach, pdfimport, podloga, skeniranje, scanattach, scantrace, praćenje, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, oblikovanje, wblock, scalelistedit, spisak razmjera, acis, 3d solidi, registerscans, registracija skenova, icp, e57, las, laser, grbl, g-code, usd, usdout, historija, verzije, uporedi, štampa, štampač, png, svg, stil štampe, tip linije, obilazak, brzi pregled, karta komandi, položaj trake, redovi trake, regen, regenall, touchpad, prevlačenje, kodna stranica, ćirilica, korejski, kineski, japanski, električne instalacije, rcd, p&id, pid, acad.lsp, acaddoc.lsp, fascikla podrške, asistenti, mcp, jedinice, portugalski
from: b9258ca6
---

Ovo je ono što se promijenilo u CadCraft-u 0.7, u odnosu na 0.6. Mnogo toga je traženo na Discordu. Spisak je grupisan po oblastima, s najvažnijim prvo.

## Novo

### PDF-ovi i skenirani crteži

- **Stavite PDF stranicu ispod crteža.** {{cmd:PDFATTACH}} (`PDFATT`) postavlja stranicu u pravoj veličini ili u razmjeri koju upišete. Hvatajte se za njene linije, učinite je blijedom, napravite je jednobojnom ({{cmd:PDFADJUST}}), isjecite je ({{cmd:PDFCLIP}}) i uključujte i isključujte slojeve samog PDF-a ({{cmd:PDFLAYERS}}). Štampa se kao linije, popune i tekst, a DWG ili DXF 2000 je zadržava kao vezu na datoteku. Kad otvorite PDF sa {{ui:Otvori}}, pita da li da ga pridružite ili uvezete. Vidi [PDF podloge i uvoz PDF-a](topic:pdf-underlay).
- **Pretvorite PDF stranicu u objekte crteža.** {{cmd:PDFIMPORT}} (`PDFIM`) pravi linije, polilinije, krugove, lukove, pune šrafure i tekst na slojevima imenovanim po PDF-u, u pravoj veličini, u upisanoj razmjeri, ili razmjerom iz dvije tačke i stvarne udaljenosti, u jednom koraku poništavanja. Vidi [Uvoz stranice](topic:pdf-underlay#import-a-page).
- **Skenirani crteži.** {{cmd:SCANATTACH}} unosi PNG, JPEG ili TIFF (jednu stranicu ili sve) ili PDF stranicu koja je slika. Zatim je razmjerite iz dvije tačke ({{cmd:SCANSCALE}}), poravnajte ({{cmd:SCANALIGN}}), ispravite je po njenim dugim linijama ({{cmd:SCANDESKEW}}), pretvorite u crno-bijelu i uklonite mrlje ({{cmd:SCANCLEAN}}), izrežite je i obrišite dijelove. Svaki korak je jedan korak poništavanja, a originalna datoteka se čuva. Vidi [Skenirani crteži i praćenje](topic:scanned-drawings).
- **Pratite skenirani crtež u linije i lukove.** {{cmd:SCANTRACE}} crta linije skena kao linije i lukove na novom sloju, SCAN-TRACE, s tolerancijom koju postavite, a tekst i šrafure ostavlja kakvi jesu. Izvještaj kaže šta je napravljeno i šta je ostavljeno, i nije tvrdnja da je rezultat tačan: provjerite ga sa listom. {{cmd:RASTERSNAP}} omogućava da hvatanje objekata pronalazi krajeve, uglove i presjeke skena. Ništa se nigdje ne šalje i ne koristi se obučen model. Vidi [Praćenje](topic:scanned-drawings#the-trace).

### Crtanje i uređivanje

- **Pravi splajnovi.** {{cmd:SPLINE}} (`SPL`) crta krivu kroz tačke ili iz kontrolnih tačaka (stepen 1 do 5), sa krajnjim tangentama; {{cmd:SPLINEDIT}} (`SPE`) pomjera, dodaje i briše tačke prileganja ili kontrolne tačke, postavlja težine, otvara, zatvara, obrće, ili pretvara splajn u polilinije. Splajnovi iz DWG i DXF datoteka otvaraju se kao splajnovi, a DWG i DXF 2000 ih spašavaju kao splajnove. Vidi [Splajnovi i polilinije](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zatvara i otvara polilinije, spaja linije i lukove s njima, postavlja jednu širinu, prilagođava krivu kroz vrhove ili splajn duž njih, a vraća je nazad sa Decurve, obrće, i uređuje više odjednom. Vidi [Uređivanje polilinije](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) upisuje blok, neke objekte ili cijeli crtež u novu DWG ili DXF datoteku, koja sadrži samo slojeve, stilove i blokove koje koriste. Vidi [Upis bloka ili objekata u njihovu datoteku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) ponovo crta karticu na kojoj jeste, iz crteža; {{cmd:REGENALL}} (`REA`) svaku karticu, okno i otvoren crtež. Vidi [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i kote

- **Tekst zadržava oblikovanje.** Pasus tekst iz drugih programa zadržava boje po riječi, podebljano i kurziv, podvlačenje, slagane razlomke i visine: crtaju se na ekranu i u PDF-ovima, zadržavaju se kad uređujete riječi i vraćaju se pri spašavanju. Vidi [Oblikovanje unutar pasus teksta iz drugih programa](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Upravljač stilovima kota.** {{cmd:DIMSTYLE}} (`D`) pravi, mijenja, upoređuje i primjenjuje imenovane stilove kota; promjena stila mijenja svaku kotu koja ga koristi. {{cmd:DIMEDIT}} (`DED`) vraća tekst, upisuje novi tekst, okreće ga ili kosi pomoćne linije; {{cmd:DIMTEDIT}} pomjera tekst ulijevo, udesno ili u sredinu. Vidi [Imenovani stilovi kota](topic:dimension-settings#named-dimension-styles).
- **Vaše razmjere.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje razmjere kao 1:75 u spiskove razmjera prozora pregleda i štampe; čuvaju se u crtežu (DWG i DXF 2000), a crtež iz drugog programa donosi svoj spisak. Vidi [Razmjere](topic:units-papers-scales#scales).
- **Tekst u drugim abecedama.** DXF datoteke spašene u kodnim stranicama ćirilice, korejskog, kineskog, japanskog ili vijetnamskog sada se otvaraju sa svojim tekstom, a kineski, japanski i korejski tekst se štampa u PDF-ovima (štampa preuzima veći font kad mu prvi put zatreba). Vidi [Font](topic:text#font).

### Štampanje i štampa

- **Više u tabelama stila štampe.** Za svaku boju tabela sada može postaviti i tip linije, kraj i spoj linije, i stil popune koji štampa pune popune kao linije šrafure; tabela ima svoj spisak debljina i razmjeru tipa linije. Vidi [Tabele stila štampe](topic:plot-pdf#plot-style-tables).
- **Štampa, i PNG i SVG datoteke.** Dijalog Štampaj ima {{ui:Štampaj…}}, {{ui:Preuzmi PNG}} (300 dpi) i {{ui:Preuzmi SVG}}. U CadCraft Studiu navodi štampače računara, njihov papir i broj kopija. Vidi [Štampa](topic:plot-pdf#print) i [Slika i SVG datoteke](topic:plot-pdf#picture-and-svg-files).

### 3D i oblaci tačaka

- **3D solidi iz drugih programa.** Solidi, regije i tijela u modelskom prostoru crteža prikazuju se na kartici 3D, samo za čitanje, a spašavanje kao DWG ih vraća nepromijenjene. Površine na površinama koje CadCraft još ne crta se navode, a ne pogađaju. Vidi [Solidi iz drugih programa](topic:3d-solids#solids-from-other-programs).
- **Registrujte više skenova.** {{cmd:REGISTERSCANS}} (`REGSCAN`) postavlja skenove snimljene s različitih položaja u jedan okvir, po parovima tačaka ili upisanim koordinatama cilja, dorađuje ih sa ICP, čuva registraciju kao mali projektni fajl i upisuje registrovani oblak tačaka kao jednu LAS ili E57 datoteku. Vidi [Registracija više skenova u jedan](topic:register-scans).
- **Izvoz USD.** {{cmd:USDOUT}}, ili {{cmd:EXPORT3D}} › {{ui:USD}}, upisuje solide kartice 3D kao `.usda`, `.usdc` ili `.usdz`. Vidi [Izvoz 3D modela kao USD](topic:usd).
- **Proračuni na kartici 3D.** Gdje alati kartice 3D traže udaljenost, možete upisati proračun, kao u komandnoj liniji. Vidi [Aritmetika u upisanoj vrijednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Pravljenje stvari

- **Pošaljite crtež laseru.** {{cmd:LASER}}, ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}, otvara panel preko crteža: svaki sloj reže, ureže, graviše linije, popunjava oblike, graviše sliku ili se ne šalje, sa svojom snagom, brzinom i prolazima. Pregled prati vaše izmjene, {{ui:Spasi G-kod…}} piše G-kod GRBL režima lasera, a u Chrome-u ili Edge-u panel može uokviriti posao i poslati ga preko USB-a. Postavke se čuvaju u crtežu (DWG i DXF). Vidi [Slanje crteža laseru](topic:laser-cutting).
- **Simboli instalacija za zgrade u dodatku Električne instalacije.** Utičnice za podatke, telefon i TV, prekidači s ključem i vremenski prekidači, termostat, znak izlaza, detektori, tačka poziva i zvučni signal, ventilator, bojler, šporet, tačka za punjenje EV-a, brojilo energije i podtabla, te simboli RCD i RCBO. Strujno kolo može imati RCD, tabela panela ima kolonu RCD, a provjere imenuju kola utičnica bez RCD-a od 30 mA ili manje. To je podsjetnik za planiranje, a ne provjera propisa.
- **Dodatak P&ID.** P&ID crta dijagrame procesa: simbole sa tačkama spoja, linije procesa i signala, oznake, brojeve linija, spiskove linija, opreme, instrumenata i ventila (CSV ili radna sveska) i provjere. Dolazi uz CadCraft i isključen je dok ga ne uključite u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Dodaci}}. To je pomoć pri crtanju, a ne inženjersko odobrenje, a njegove riječi su za sada samo na engleskom.

### Početak i ekran

- **Vođeni prvi crtež.** {{cmd:TOUR}} (ili {{ui:Pogledaj obilazak}} na početnoj kartici) vodi vas kroz šest koraka u stvarnom crtežu: linija, krug, pomjeranje, skraćivanje, brisanje i kota. Počinje sam prvi put kad se CadCraft otvori praznog. Vidi [Radije biste da vas vodimo?](topic:getting-started#prefer-to-be-guided)
- **Brzi pregled i karta komandi.** [Brzi pregled](topic:cheat-sheet) ima 40 svakodnevnih komandi na jednoj stranici, i kao PDF za štampanje, a [karta komandi](topic:command-map) navodi komande sa njihovim kratkim nazivima, od A do Z.
- **Traka sa alatima na bilo kojoj strani.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Položaj trake s alatima}}: gore (kao prije), dolje, lijevo ili desno, ili upišite {{cmd:TOOLBARDOCK}}. Vidi [Položaj trake s alatima](topic:settings#toolbar-position).
- **Redovi trake sa alatima.** {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Redovi alatne trake}}: prelamanje da stane, 2 reda ili 1 red, za traku CadCraft-a i stilove Drafting classic i Ribbon. {{key:Shift+Ctrl+F1}} prolazi kroz njih, {{key:Ctrl+F1}} kroz ono što dugmad prikazuju, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} ih postavljaju. Početna napomena ima dugme za zatvaranje. Hvala korisniku GJoe2, koji je ovo poslao kao pull request. Vidi [Redovi alatne trake](topic:settings#toolbar-rows).

### U CadCraft Studiu

- **Historija.** {{cmd:HISTORY}} (`HIST`), ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Historija…}}: kopije koje Studio čuva kad otvorite i spasite crtež, i verzije crteža u oblaku ako ste ga otvorili iz oblaka. Otvorite ili vratite jednu, ili uporedite dvije, sa prikazanim dodatim, uklonjenim i promijenjenim stvarima u boji. Vidi [Historija](topic:history).
- **acad.lsp i acaddoc.lsp.** Izaberite fasciklu podrške u {{cmd:APPLOAD}}: te dvije datoteke učitavaju se kad se CadCraft pokrene (acaddoc.lsp ponovo za svaku novu karticu crteža), a `S::STARTUP` se izvršava nakon njih. Vidi [Učitavanje aplikacija](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dijalog za štampanje u vlastitom prozoru.** Dugme u naslovnoj traci premješta dijalog u prozor koji možete staviti na drugi monitor. Vidi [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).

### Za AI asistente

- **Datoteke po imenu, u fasciklama koje izaberete.** U CadCraft Studiu asistent može otvoriti, spasiti i štampati datoteke po imenu, i predati komandi datoteku koju traži (INSERT iz datoteke, COUNT-ov izvoz, SAVEAS, PLOT), ali samo unutar fascikli koje dodate pod {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Folderi koje smije koristiti}}. Vidi [Dozvolite mu da koristi datoteke u fasciklama koje izaberete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Manje poziva.** Asistent može upisati cijelu komandnu liniju odjednom, držati komandu otvorenom između poziva, brojati objekte po vrsti i sloju bez njihovog nabrajanja, i postaviti blok sa vrijednostima atributa u jednom koraku.
- **Bez prozora.** Komandna linija `cadcraft` piše SVG štampe i pretvara, štampa, provjerava ili opisuje mnogo datoteka odjednom. MCP paket još nije objavljen. Vidi [Rad s datotekama bez otvaranja CadCraft-a](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Izmijenjeno

- **Touchpad pomjera.** Pomjerite dva prsta na touchpadu i 2D pogled ih prati; štipanje i točkić miša zumiraju. Vidi [Miš, touchpad i dodir](topic:mouse-trackpad-touch).
- **OLE objekti se zadržavaju.** Ugrađeni objekti DXF-a prikazuju se kao slika ili kao označeni okvir i spašavaju se nazad kroz DXF 2000. OLE objekti DWG-a se zadržavaju i zapisuju kad spasite kao DWG, ali se još ne prikazuju. Prije su se gubili pri spašavanju. Vidi [Objekti iz drugih programa (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jedinice novog crteža** prate jedinicu koju označite zvjezdicom u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}}.

## Ispravljeno

- Listovi koji su se otvarali prazni, ili su izgubili prozor pregleda i na njegovom mjestu prikazivali cijeli model, sada se otvaraju sa svojim stvarnim prozorima pregleda. List bez veze sa svojim sadržajem se zadržava, a izvještaj o otvaranju to kaže.
- DXF datoteke u starijim kodnim stranicama prikazivale su pokvaren tekst na ćirilici i korejskom. Sada se čitaju ispravno.
- Pasus tekst iz drugih programa gubio je oblikovanje pri otvaranju i spašavao se kao običan tekst.

## Za sve aplikacije

- **Jedinice.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jedan spisak za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka geodetska stopa je sopstvena jedinica). Isključite jedinice koje nikad ne koristite i one nestaju sa spiskova; označite jednu zvjezdicom i novi rad počinje u njoj. Datoteka uvijek zadržava svoju jedinicu. U CadCraft-u zvjezdica postavlja jedinice novog crteža kad je to jedinica koju crtež može nositi, a vlastiti okvir {{ui:Jedinice}} u CadCraft-u još ne prati prekidače. Kad crtež ima jedinice, dužina koju upišete može nositi oznaku bilo koje jedinice. Vidi [Jedinice, upisane vrijednosti i spiskovi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stane više na ekran (ekrani osjetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da pričvrstite ili otkačite panel, spustite je na naslovnu traku drugog panela da dijele jedan okvir kao kartice, zakačite je da kliznu do ivice, ili sakrijte panel i vratite ga sa ivice. Vidi [Poredajte panele](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomjeraju.** Prevucite dijalog za naslovnu traku izvan puta crtežu; vraća se tamo gdje ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovo centrirate. Vidi [Pomjeranje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahtjeva za vašeg asistenta (sredite crtež, odštampajte set, provjerite crteže, postavite pitanja modelu, zbrojite predmjer, isprobajte varijantu dijela…), svaki sa alatima koje poziva i dozvolama koje treba, i svaki ponovljen našim testovima. Aplikacije ne sadrže AI. Vidi [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je novo u {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku riječ aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom jeziku.
- **CadCraft Studio** kaže zašto provjera ažuriranja nije uspjela (nema datoteke za vaš sistem još, nema mreže, loš potpis) umjesto samo „Gotovo“, i prestaje da vraća karticu Šta je novo koju ste zatvorili dok ne izađe novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Store prebačeni su na 0.8 jer provjera certifikata još nije stigla. Provjerite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desnim klikom kliknite CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Spiskovi uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedan okvir ne čita.
- OLE objekti DWG-a se zadržavaju ali se ne prikazuju, a metafile slike unutar OLE objekata se ne crtaju.
- Čitanje tabela stila štampe (CTB datoteke) iz drugih programa čeka uzorak datoteke.
- Stariji azijski tekst zapisan kao `\M+` kodovi se čita, ali još nije provjeren sa datotekom iz drugog programa.
- PDF podloge: slike unutar stranice se prikazuju na ekranu ali se ne štampaju, štampa asistenta izostavlja podloge, a nije provjereno kako ih drugi programi čitaju u sačuvanom isječku i razmjeri.
- Historija: CadCraft još ne šalje svoja spašavanja u oblak, pa su verzije u oblaku one spašene s drugih uređaja i sa weba. Historija je samo u CadCraft Studiu.
- Nije provjereno da li Studio zadržava fasciklu podrške acad.lsp nakon ponovnog pokretanja; ako pita, izaberite fasciklu ponovo u APPLOAD-u.
- Panel Laser još nije isproban na pravom laseru: testirajte svaku postavku na otpadu. CadCraft Studio nema Web Serial, pa u Studiu panel samo spašava G-kod.
- Registracija skenova je testirana na izmišljenim skenovima, još ne na skenovima pravog skenera.
- Pomjeranje dvama prstima je isprobano sa simuliranim događajima touchpada, još ne na pravom touchpadu.
- {{cmd:PEDIT}} nema opciju Edit vertex (koristite hvataljke ili Svojstva). Ofset, skraćivanje, produženje, zaobljenje, prekid i spajanje još ne uzimaju splajnove; visina splajna (Z) se ne zadržava.
- Novi pasus tekst ne može još dobiti kodove oblikovanja, a SVG štampe prikazuju oblikovani tekst u jednoj boji.
- Opcija Cijeli crtež u WBLOCK-u piše samo model, ne listove. Trenutni stil kota se ne čuva u datoteci: crtež se otvara sa stilom Standard kao trenutnim.
- Stilovi menija trake nemaju još spiskove sloja, boje ili tipa linije: koristite panel {{ui:Slojevi}} i {{ui:Svojstva}}.
- Oblaci tačaka se još ne čuvaju u crtežu niti se štampaju, a E57 datoteke se otvaraju do 6 miliona tačaka i 512 MB.
- Sačuvani DWG-ovi CadCraft-a još nisu provjereni u samom AutoCAD-u.

Ostalo je u [Još nije izrađeno](topic:not-built-yet).
