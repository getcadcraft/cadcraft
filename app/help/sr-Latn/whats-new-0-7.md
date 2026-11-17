---
title: Novosti u verziji 0.7 (ranije)
summary: PDF podloge i uvoz PDF-a, skenirani crteži sa automatskim praćenjem, pravi splajnovi sa SPLINE, SPLINEDIT i PEDIT, menadžer stilova kota, tekst koji zadržava svoje oblikovanje, WBLOCK i sopstvene razmere, 3D tela iz drugih programa, registracija skenova, panel Laser, izvoz u USD, Istorija i štampanje u CadCraft Studiju, vođen prvi crtež, traka sa alatkama sa bilo koje strane ili u manje redova, i još toga za AI asistente.
keywords: novosti 0.7, raniji izdanje, beleške o izdanju, dnevnik promena, izmene, 0.7, verzija, nove funkcije, pdf, pdfattach, pdfimport, podloga, skeniranje, scanattach, scantrace, praćenje, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, oblikovanje, wblock, scalelistedit, lista razmera, acis, 3D tela, registerscans, registracija skenova, icp, e57, las, laser, grbl, g-code, usd, usdout, istorija, verzije, poređenje, štampa, štampač, png, svg, stil štampe, tip linije, tura, kratak pregled, mapa komandi, položaj trake alatki, redovi trake alatki, toolbardock, regen, regenall, tačped, prevlačenje, kodna stranica, ćirilica, korejski, kineski, japanski, električne instalacije, rcd, p&id, pid, acad.lsp, acaddoc.lsp, fascikla podrške, asistenti, mcp, jedinice, portugalski
from: d07ca034
---

Ovo je šta se promenilo u CadCraft 0.7, u odnosu na 0.6. Mnogo toga je traženo na Discordu. Spisak je grupisan po oblastima, sa najvažnijim na početku.

## Novo

### PDF-ovi i skenirani crteži

- **Stavite PDF stranu pod crtež.** {{cmd:PDFATTACH}} (`PDFATT`) postavlja stranu u njenoj pravoj veličini ili u razmeri koju ukucate. Hvatajte se za njene linije, zatamnite je, načinite je monohromatskom ({{cmd:PDFADJUST}}), isecite je ({{cmd:PDFCLIP}}) i uključujte i isključujte slojeve samog PDF-a ({{cmd:PDFLAYERS}}). Štampa se kao linije, ispune i tekst, a DWG ili DXF 2000 je čuva kao vezu ka datoteci. Otvaranje PDF-a sa {{ui:Otvori}} pita da li da ga pridružite ili uvezete. Pogledajte [PDF podloge i uvoz PDF-a](topic:pdf-underlay).
- **Pretvorite PDF stranu u objekte crteža.** {{cmd:PDFIMPORT}} (`PDFIM`) pravi linije, polilinije, krugove, lukove, pune šrafure i tekst na slojevima nazvanim po PDF-u, u pravoj veličini, u ukucanoj razmeri, ili razmeri iz dve tačke i stvarne dužine, u jednom koraku opoziva. Pogledajte [Uvoz strane](topic:pdf-underlay#import-a-page).
- **Skenirani crteži.** {{cmd:SCANATTACH}} uvodi PNG, JPEG ili TIFF (jednu stranu ili sve) ili PDF stranu koja je slika. Zatim je razmerite iz dve tačke ({{cmd:SCANSCALE}}), poravnate ({{cmd:SCANALIGN}}), ispravite pravi ugao po sopstvenim dugim linijama ({{cmd:SCANDESKEW}}), učinite crno-belom i uklonite mrlje ({{cmd:SCANCLEAN}}), isečete i obrišete delove. Svaki korak je jedan korak opoziva, a originalna datoteka se čuva. Pogledajte [Skenirani crteži i praćenje](topic:scanned-drawings).
- **Pratite skeniranje u linije i lukove.** {{cmd:SCANTRACE}} crta linije skena kao linije i lukove na novom sloju, SCAN-TRACE, uz toleranciju koju postavite, a tekst i šrafuru ostavlja kakvi jesu. Izveštaj kaže šta je napravljeno, a šta je ostavljeno, i ne tvrdi da je rezultat tačan: proverite ga prema listu. {{cmd:RASTERSNAP}} omogućava hvatanja objekata da nađu krajeve, uglove i preseke skena. Ništa se nikuda ne šalje i ne koristi se obučen model. Pogledajte [Praćenje](topic:scanned-drawings#the-trace).

### Crtanje i uređivanje

- **Pravi splajnovi.** {{cmd:SPLINE}} (`SPL`) crta krivu kroz tačke ili iz kontrolnih tačaka (stepen 1 do 5), sa tangentama na krajevima; {{cmd:SPLINEDIT}} (`SPE`) pomera, dodaje i briše tačke provlačenja ili kontrolne tačke, podešava težine, otvara, zatvara, preokreće, ili pretvara splajn u polilniju. Splajnovi iz DWG i DXF datoteka otvaraju se kao splajnovi, a DWG i DXF 2000 ih čuvaju kao splajnove. Pogledajte [Splajnovi i polilinije](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zatvara i otvara polilinije, spaja linije i lukove na njih, postavlja jednu širinu, provlači krivu kroz temena ili splajn duž njih i vraća to nazad sa Decurve, preokreće, i uređuje više njih odjednom. Pogledajte [Uređivanje polilinije](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) upisuje blok, neke objekte ili ceo crtež u novu DWG ili DXF datoteku koja sadrži samo slojeve, stilove i blokove koje koriste. Pogledajte [Upis bloka ili objekata u sopstvenu datoteku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) ponovo iscrtava karticu na kojoj ste iz crteža, {{cmd:REGENALL}} (`REA`) svaku karticu, okno i otvoreni crtež. Pogledajte [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i kote

- **Tekst zadržava svoje oblikovanje.** Pasusni tekst iz drugih programa zadržava boje po reči, podebljano i kurziv, podvlačenje, slagane razlomke i visine: crtaju se na ekranu i u PDF-ovima, čuvaju se kada menjate reči i vraćaju se pri čuvanju. Pogledajte [Oblikovanje unutar pasusnog teksta iz drugih programa](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Menadžer stilova kota.** {{cmd:DIMSTYLE}} (`D`) pravi, menja, poredi i primenjuje imenovane stilove kota; promena stila menja svaku kotu koja ga koristi. {{cmd:DIMEDIT}} (`DED`) vraća tekst, upisuje novi tekst, okreće ga ili kosi pomoćne linije; {{cmd:DIMTEDIT}} pomera tekst levo, desno ili u centar. Pogledajte [Imenovani stilovi kota](topic:dimension-settings#named-dimension-styles).
- **Sopstvene razmere.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje razmere kao što je 1:75 na spiskove razmera prozora pogleda i štampe; čuvaju se u crtežu (DWG i DXF 2000), a crtež iz drugog programa donosi sopstveni spisak. Pogledajte [Razmere](topic:units-papers-scales#scales).
- **Tekst u drugim azbukama.** DXF datoteke sačuvane u ćirilici, korejskoj, kineskoj, japanskoj ili vijetnamskoj kodnoj stranici sada se otvaraju sa svojim tekstom, a kineski, japanski i korejski tekst se štampa u PDF-ovima (štampa preuzima veći font kada mu prvi put zatreba). Pogledajte [Font](topic:text#font).

### Štampanje

- **Više u tabelama stilova štampe.** Za svaku boju tabela sada može da postavi i tip linije, kraj linije i spoj linija, kao i stil ispune koji štampa pune ispune kao linije šrafure; tabela ima sopstveni spisak debljina linija i razmeru tipa linije. Pogledajte [Tabele stilova štampe](topic:plot-pdf#plot-style-tables).
- **Štampa, i PNG i SVG datoteke.** Dijalog za štampu ima {{ui:Štampaj…}}, {{ui:Preuzmi PNG}} (300 dpi) i {{ui:Preuzmi SVG}}. U CadCraft Studiju on navodi štampače računara, njihov papir i broj kopija. Pogledajte [Štampa](topic:plot-pdf#print) i [Slika i SVG datoteke](topic:plot-pdf#picture-and-svg-files).

### 3D i oblaci tačaka

- **3D tela iz drugih programa.** Tela, oblasti i tela iz modelskog prostora crteža prikazuju se na kartici 3D, samo za čitanje, a čuvanje u DWG ih vraća nepromenjene. Lica na površinama koje CadCraft još ne crta se navode, a ne pogađaju. Pogledajte [Tela iz drugih programa](topic:3d-solids#solids-from-other-programs).
- **Registracija više skenova.** {{cmd:REGISTERSCANS}} (`REGSCAN`) postavlja skenove snimljene sa različitih položaja u jedan okvir, po parovima tačaka ili ukucanim koordinatama cilja, dotera ih sa ICP-om, čuva registraciju kao mali projektni fajl i upisuje registrisani oblak kao jednu LAS ili E57 datoteku. Pogledajte [Registracija više skenova u jedan](topic:register-scans).
- **Izvoz u USD.** {{cmd:USDOUT}}, ili {{cmd:EXPORT3D}} › {{ui:USD}}, upisuje tela sa kartice 3D kao `.usda`, `.usdc` ili `.usdz`. Pogledajte [Izvoz 3D modela u USD](topic:usd).
- **Računanje na kartici 3D.** Gde alatke na kartici 3D traže rastojanje, možete ukucati račun, kao u komandnoj liniji. Pogledajte [Aritmetika u ukucanoj vrednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Pravljenje

- **Pošaljite crtež laseru.** {{cmd:LASER}}, ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}, otvara panel preko crteža: svaki sloj seče, ureže, graviše linije, ispunjava oblike, graviše sliku ili se ne šalje, sa svojom snagom, brzinom i prolazima. Pregled prati vaše izmene, {{ui:Sačuvaj G-kod…}} upisuje G-kod u GRBL laserskom režimu, a u Chrome-u ili Edge-u panel može da uokviri posao i pošalje ga preko USB-a. Podešavanja se čuvaju u crtežu (DWG i DXF). Pogledajte [Slanje crteža laseru](topic:laser-cutting).
- **Simboli instalacija u dodatku Električne instalacije.** Izlazi za podatke, telefon i TV, tasteri i vremenski prekidači, termostat, znak za izlaz, detektori, tačka za poziv i sirena, ventilator, bojler, šporet, tačka za punjenje EV-a, merač energije i pod-tabla, i simboli RCD i RCBO. Strujno kolo može da nosi RCD, tabela tabli ima kolonu RCD, a provere navode utičnička kola bez RCD-a od 30 mA ili manje. To je podsetnik pri planiranju, a ne provera propisa.
- **Dodatak P&ID.** P&ID crta dijagrame procesa: simbole sa tačkama povezivanja, linije procesa i signala, oznake, brojeve linija, spiskove linija, opreme, instrumenata i ventila (CSV ili radna sveska) i provere. Dolazi uz CadCraft i isključen je dok ga ne uključite u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Dodaci}}. To je pomoćno sredstvo za crtanje, a ne inženjersko odobrenje, a njegove reči su za sada samo na engleskom.

### Početak i ekran

- **Vođen prvi crtež.** {{cmd:TOUR}} (ili {{ui:Pređi obilazak}} na početnoj kartici) vodi vas kroz šest koraka u pravom crtežu: liniju, krug, pomeranje, skraćivanje, brisanje i kotu. Pokreće se sam prvi put kada se CadCraft otvori sa praznim crtežom. Pogledajte [Radije biste da vas vode?](topic:getting-started#prefer-to-be-guided)
- **Kratak pregled i mapa komandi.** [Kratak pregled](topic:cheat-sheet) ima 40 svakodnevnih komandi na jednoj strani, i kao PDF za štampu, a [mapa komandi](topic:command-map) navodi komande sa kratkim imenima, od A do Ž.
- **Traka sa alatkama sa bilo koje strane.** {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Položaj trake sa alatkama}}: gore (kao ranije), dole, levo ili desno, ili ukucajte {{cmd:TOOLBARDOCK}}. Pogledajte [Položaj trake sa alatkama](topic:settings#toolbar-position).
- **Redovi trake sa alatkama.** {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Redovi alatne trake}}: prelamanje da stane, 2 reda ili 1 red, za CadCraft traku i stilove Drafting classic i Ribbon. {{key:Shift+Ctrl+F1}} prolazi kroz njih, {{key:Ctrl+F1}} kroz ono što dugmad prikazuju, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} ih podešavaju. Početna poruka ima dugme za zatvaranje. Hvala GJoe2, koji je ovo poslao kao pull request. Pogledajte [Redovi trake sa alatkama](topic:settings#toolbar-rows).

### U CadCraft Studiju

- **Istorija.** {{cmd:HISTORY}} (`HIST`), ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Istorija…}}: kopije koje Studio čuva kada otvorite i sačuvate crtež, i verzije crteža u oblaku ako ste ga otvorili iz oblaka. Otvorite ili vratite jednu, ili uporedite dve, sa prikazanim bojom onim što je dodato, uklonjeno i izmenjeno. Pogledajte [Istorija](topic:history).
- **acad.lsp i acaddoc.lsp.** Izaberite fasciklu podrške u {{cmd:APPLOAD}}: ta dva fajla se učitavaju pri pokretanju CadCraft-a (acaddoc.lsp ponovo za svaku novu karticu crteža), a `S::STARTUP` se izvršava posle njih. Pogledajte [Učitavanje aplikacija](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Prozor za štampu u sopstvenom prozoru.** Dugme u naslovnoj traci premešta ga u prozor koji možete postaviti na drugi monitor. Pogledajte Premeštanje dijaloga.

### Za AI asistente

- **Datoteke po imenu, u fasciklama koje birate.** U CadCraft Studiju asistent može da otvara, čuva i štampa datoteke po imenu, i da komandi da datoteku koju ona traži (INSERT iz datoteke, COUNT-ov izvoz, SAVEAS, PLOT), ali samo unutar fascikli koje dodate pod {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Fascikle koje sme da koristi}}. Pogledajte [Dozvolite mu da koristi datoteke u fasciklama koje birate](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Manje poziva.** Asistent može da ukuca celu komandnu liniju odjednom, da drži komandu otvorenu između poziva, da broji objekte po tipu i sloju bez njihovog navođenja, i da postavi blok sa vrednostima atributa u jednom koraku.
- **Bez prozora.** Komandna linija `cadcraft` upisuje SVG štampe i pretvara, štampa, proverava ili opisuje mnogo datoteka odjednom. MCP paket još nije objavljen. Pogledajte [Rad sa datotekama bez otvaranja CadCraft-a](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Promenjeno

- **Tačped pomera.** Pomerite dva prsta na tačpedu i 2D pogled ih prati; štipanje i točkić miša uvećavaju. Pogledajte [Miš, tačped i dodir](topic:mouse-trackpad-touch).
- **Objekti iz drugih programa se čuvaju.** Ugrađeni objekti DXF-a prikazuju se kao njihova slika ili kao obeležen okvir i čuvaju se nazad DXF 2000 formatom. Objekti DWG-a se čuvaju i upisuju nazad kada sačuvate kao DWG, ali se još ne prikazuju. Ranije su se gubili pri čuvanju. Pogledajte [Objekti iz drugih programa (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jedinice novog crteža** prate jedinicu koju označite u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}}.

## Ispravljeno

- Na mestima gde su se listovi otvarali prazni, ili gde je viewport nestao pa se umesto njega prikazivao ceo model, sada se otvaraju sa svojim pravim prozorima pogleda. Raspored bez veze sa svojim sadržajem se čuva, a izveštaj pri otvaranju to kaže.
- DXF datoteke u starijim kodnim stranicama prikazivale su iskrivljen ćirilični i korejski tekst. Sada se čitaju ispravno.
- Pasusni tekst iz drugih programa gubio je oblikovanje pri otvaranju i čuvao se kao običan tekst.

## U svim aplikacijama

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jedan spisak za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka anketna stopa je sopstvena jedinica). Isključite jedinice koje nikada ne koristite i one napuštaju spiskove; označite jednu i novi rad počinje u njoj. Datoteka uvek zadržava sopstvenu jedinicu. U CadCraft-u oznaka postavlja jedinice novog crteža kada je to jedinica koju crtež može da nosi; sopstveno polje {{ui:Jedinice}} u CadCraft-u još ne prati ove prekidače. Kada crtež ima jedinice, dužina koju ukucate može da nosi oznaku bilo koje jedinice. Pogledajte [Jedinice, ukucane vrednosti i spiskovi jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Sažeta}} stane više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da ga usidrite ili otkačite, pustite je na traku drugog panela da delite okvir kao kartice, zakačite je da kliže do ivice, ili je sakrijte i vratite sa ivice. Pogledajte [Raspoređivanje panela](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za naslovnu traku van puta crtežu; vraća se tamo gde ste ga ostavili. Dvostruki klik na naslovnu traku ga ponovo centrira. Pogledajte [Premeštanje dijaloga](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset primera zahteva za sopstvenog asistenta (srediti crtež, štampati set, proveriti crteže, postaviti pitanja modelu, sabrati predmer, isprobati varijantu dela…), svaki sa alatima koje poziva i dozvolama koje mu treba, i svaki ponovljen našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje nije pregledao izvorni govornik. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis) umesto samo „Gotovo”, i prestaje da vraća karticu Novosti koju ste zatvorili dok ne postoji novije izdanje.

## Još nije u ovoj verziji

- **0.7 nije potpisan kodom.** Potpisivanje i Microsoft Store paket prebačeni su na 0.8 jer sertifikat nije stigao. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalator, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verzije za iPad ili iPhone.
- Spiskovi uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedno polje ne čita.
- DWG OLE objekti se čuvaju ali se ne prikazuju, a metafajl slike unutar OLE objekata se ne crta.
- Čitanje tabela stilova štampe (CTB datoteke) iz drugih programa čeka primer datoteke.
- Stariji azijski tekst zapisan kao `\M+` kodovi se čita, ali još nije proveren na datoteci iz drugog programa.
- PDF podloge: slike unutar strane se prikazuju na ekranu ali se ne štampaju, štampa asistenta izostavlja podloge, a kako drugi programi čitaju sačuvani isečak i razmeru nije proveren u njima.
- Istorija: CadCraft još ne šalje svoja čuvanja u oblak, pa su verzije iz oblaka one sačuvane sa drugih uređaja i sa weba. Istorija je samo u CadCraft Studiju.
- Nije još poznato da li Studio zadržava fasciklu podrške acad.lsp posle ponovnog pokretanja; ako pita, izaberite fasciklu ponovo u APPLOAD.
- Panel Laser još nije probran na pravom laseru: isprobajte svako podešavanje na otpadu. CadCraft Studio nema Web Serial, pa u Studiju panel samo čuva G-kod.
- Registracija skenova je probana na izmišljenim skenovima, a ne još na setu pravog skenera.
- Dvoprstno pomeranje je probano sa simuliranim događajima tačpeda, a ne još na pravom tačpedu.
- {{cmd:PEDIT}} nema opciju Edit vertex (koristite ručice ili Svojstva). Ofset, skraćivanje, produžavanje, zaobljenje, prekidanje i spajanje još ne primaju splajnove; visina splajna (Z) se ne čuva.
- Novi pasusni tekst još ne može da dobije kodove oblikovanja, a SVG štampe prikazuju oblikovan tekst u jednoj boji.
- „Ceo crtež” u WBLOCK-u upisuje samo model, a ne listove. Trenutni stil kota se ne čuva u datoteci: crtež se otvara sa stilom Standard kao tekućim.
- Stilovi trake sa karticama još nemaju spiskove slojeva, boja ili tipova linija: koristite panel {{ui:Slojevi}} i {{ui:Svojstva}}.
- Oblaci tačaka se još ne čuvaju u crtežu niti štampaju, a E57 datoteke se otvaraju do 6 miliona tačaka i 512 MB.
- Sačuvane DWG datoteke CadCraft-a još nisu proverene u samom AutoCAD-u.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
