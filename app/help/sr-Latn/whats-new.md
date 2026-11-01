---
title: Šta je novo u 0.7
summary: PDF podloge i uvoz PDF-a, skenirani crteži sa automatskim praćenjem, pravi splajnovi sa SPLINE, SPLINEDIT i PEDIT, upravljač stilovima kota, tekst koji zadržava oblikovanje, WBLOCK i sopstvene razmere, 3D solidi iz drugih programa, registrovanje skenova, panel Laser, izvoz USD, Istorija i štampanje u CadCraft Studiju, vođeni prvi crtež, traka sa alatkama sa bilo koje strane ili u manje redova, i još za AI asistente.
keywords: šta je novo, beleške o izdanju, dnevnik promena, promene, 0.7, verzija, nove funkcije, pdf, pdfattach, pdfimport, podloga, skeniranje, scanattach, scantrace, praćenje, raster, rastersnap, splajn, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, oblikovanje, wblock, scalelistedit, lista razmera, acis, 3d solidi, registerscans, registrovanje skenova, icp, e57, las, laser, grbl, g-kod, usd, usdout, istorija, verzije, poređenje, štampa, štampač, png, svg, stil štampe, tip linije, obilazak, brzi pregled, mapa komandi, položaj trake sa alatkama, redovi trake, toolbardock, regen, regenall, tačpad, prevlačenje, kodna strana, ćirilica, korejski, kineski, japanski, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, fascikla podrške, asistenti, mcp, jedinice, portugalski
from: b9258ca6
---

Ovo je šta se promenilo u CadCraft-u 0.7, u odnosu na 0.6. Mnogo toga je traženo na Discord-u. Spisak je grupisan po oblastima, sa najvažnijim na prvom mestu.

## Novo

### PDF-ovi i skenirani crteži

- **Stavite PDF stranu pod crtež.** {{cmd:PDFATTACH}} (`PDFATT`) postavlja stranu u njenoj pravoj veličini ili razmeri koju ukucate. Hvatajte se za njene linije, zatamnite je, pretvorite u monohromatsku ({{cmd:PDFADJUST}}), isecite je ({{cmd:PDFCLIP}}) i prebacujte PDF-ove sopstvene slojeve ({{cmd:PDFLAYERS}}). Štampa se kao linije, popune i tekst, a DWG ili DXF 2000 je čuva kao vezu ka datoteci. Otvaranje PDF-a pomoću {{ui:Otvori}} pita da li da ga pripnete ili uvezete. Pogledajte [PDF podloge i uvoz PDF-a](topic:pdf-underlay).
- **Pretvorite PDF stranu u objekte crteža.** {{cmd:PDFIMPORT}} (`PDFIM`) pravi linije, polilinije, krugove, lukove, pune šrafure i tekst na slojevima nazvanim po PDF-u, u pravoj veličini, u unetoj razmeri, ili razmerom iz dve tačke i stvarnog rastojanja, u jednom koraku poništavanja. Pogledajte [Uvoz strane](topic:pdf-underlay#import-a-page).
- **Skenirani crteži.** {{cmd:SCANATTACH}} unosi PNG, JPEG ili TIFF (jednu stranu ili sve) ili PDF stranu koja je slika. Zatim je skalirajte iz dve tačke ({{cmd:SCANSCALE}}), poravnajte ({{cmd:SCANALIGN}}), ispravite je po njenim dugim linijama ({{cmd:SCANDESKEW}}), napravite je crno-belom i uklonite mrlje ({{cmd:SCANCLEAN}}), isecite je i izbrišite delove. Svaki korak je jedan korak poništavanja, a originalna datoteka se čuva. Pogledajte [Skenirani crteži i praćenje](topic:scanned-drawings).
- **Pratite skeniranje u linije i lukove.** {{cmd:SCANTRACE}} crta linije skeniranja kao linije i lukove na novom sloju, SCAN-TRACE, do tolerancije koju podesite, i ostavlja tekst i šrafiranje kakvi jesu. Izveštaj kaže šta je napravljeno i šta je ostavljeno, i nije tvrdnja da je rezultat tačan: proverite ga prema listu. {{cmd:RASTERSNAP}} omogućava hvatanje objekata da nađe krajeve, uglove i preseke skeniranja. Ništa se ne šalje nigde i ne koristi se nikakav istrenirani model. Pogledajte [Praćenje](topic:scanned-drawings#the-trace).

### Crtanje i uređivanje

- **Pravi splajnovi.** {{cmd:SPLINE}} (`SPL`) crta krivu kroz tačke ili iz kontrolnih tačaka (stepen od 1 do 5), sa krajnjim tangentama; {{cmd:SPLINEDIT}} (`SPE`) pomera, dodaje i briše tačke prilagođavanja ili kontrolne tačke, podešava težine, otvara, zatvara, obrće ili pretvara splajn u polilinije. Splajnovi iz DWG i DXF datoteka otvaraju se kao splajnovi, a DWG i DXF 2000 ih čuvaju kao splajnove. Pogledajte [Splajnovi i polilinije](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zatvara i otvara polilinije, spaja linije i lukove sa njima, postavlja jednu širinu, prilagođava krivu kroz temena ili splajn duž njih i vraća je sa Decurve, obrće, i uređuje više odjednom. Pogledajte [Uređivanje polilinije](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) upisuje blok, neke objekte ili ceo crtež u novi DWG ili DXF koji sadrži samo slojeve, stilove i blokove koje koristi. Pogledajte [Upis bloka ili objekata u sopstvenu datoteku](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) ponovo crta karticu na kojoj ste iz crteža, a {{cmd:REGENALL}} (`REA`) svaku karticu, prozor i otvoreni crtež. Pogledajte [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Tekst i kote

- **Tekst zadržava oblikovanje.** Pasusni tekst iz drugih programa zadržava boje po reči, podebljano i kurziv, podvlačenje, slagane razlomke i visine: crtaju se na ekranu i u PDF-ovima, zadržavaju se kada menjate reči i čuvaju se nazad. Pogledajte [Oblikovanje unutar pasusnog teksta iz drugih programa](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Upravljač stilovima kota.** {{cmd:DIMSTYLE}} (`D`) pravi, menja, poredi i primenjuje imenovane stilove kota; promena stila menja svaku kotu koja ga koristi. {{cmd:DIMEDIT}} (`DED`) vraća tekst, unosi novi tekst, okreće ga ili kosi pomoćne linije; {{cmd:DIMTEDIT}} pomera tekst levo, desno ili u sredinu. Pogledajte [Imenovani stilovi kota](topic:dimension-settings#named-dimension-styles).
- **Sopstvene razmere.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) dodaje razmere kao što je 1:75 u liste razmera prozora pogleda i štampe; čuvaju se u crtežu (DWG i DXF 2000), a crtež iz drugog programa donosi sopstvenu listu. Pogledajte [Razmere](topic:units-papers-scales#scales).
- **Tekst u drugim azbukama.** DXF datoteke sačuvane u ćiriličnim, korejskim, kineskim, japanskim ili vijetnamskim kodnim stranicama sada se otvaraju sa svojim tekstom, a kineski, japanski i korejski tekst se štampa u PDF-ovima (štampa preuzima veći font kada ga prvi put zatreba). Pogledajte [Font](topic:text#font).

### Štampa

- **Više u tabelama stilova štampe.** Za svaku boju tabela sada može da podesi i tip linije, kraj linije i spoj linija, i stil popune koji štampa pune popune kao linije šrafure; tabela ima sopstvenu listu debljina linija i razmeru tipa linije. Pogledajte [Tabele stilova štampe](topic:plot-pdf#plot-style-tables).
- **Štampa, i PNG i SVG datoteke.** Dijalog za štampanje ima {{ui:Štampaj…}}, {{ui:Preuzmi PNG}} (300 dpi) i {{ui:Preuzmi SVG}}. U CadCraft Studiju prikazuje štampače računara, njihov papir i broj kopija. Pogledajte [Štampa](topic:plot-pdf#print) i [Slika i SVG datoteke](topic:plot-pdf#picture-and-svg-files).

### 3D i oblaci tačaka

- **3D solidi iz drugih programa.** Solidi, regioni i tela u modelskom prostoru crteža prikazuju se na kartici 3D, samo za čitanje, a čuvanje kao DWG ih vraća nepromenjene. Površine na površima koje CadCraft još ne crta se navode, ne pogađaju. Pogledajte [Solidi iz drugih programa](topic:3d-solids#solids-from-other-programs).
- **Registrujte više skenova.** {{cmd:REGISTERSCANS}} (`REGSCAN`) postavlja skenove snimljene sa različitih pozicija u jedan okvir, po parovima tačaka ili unetim koordinatama cilja, dorađuje ih sa ICP, čuva registraciju kao malu projektnu datoteku i upisuje registrovani oblak kao jednu LAS ili E57 datoteku. Pogledajte [Registrujte više skenova u jedan](topic:register-scans).
- **Izvoz USD-a.** {{cmd:USDOUT}}, ili {{cmd:EXPORT3D}} › {{ui:USD}}, upisuje solide kartice 3D kao `.usda`, `.usdc` ili `.usdz`. Pogledajte [Izvoz 3D modela kao USD](topic:usd).
- **Proračuni na kartici 3D.** Gde alati kartice 3D traže rastojanje, možete ukucati proračun, kao u komandnoj liniji. Pogledajte [Aritmetika u unetoj vrednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Pravljenje stvari

- **Pošaljite crtež laseru.** {{cmd:LASER}}, ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Laser…}}, otvara panel preko crteža: svaki sloj seče, zareže, graviše linije, popunjava oblike, graviše sliku ili se ne šalje, sa svojom snagom, brzinom i prolazima. Pregled prati vaše izmene, {{ui:Sačuvaj G-kod…}} upisuje G-kod u GRBL laserskom režimu, a u Chrome-u ili Edge-u panel može da uokviri posao i pošalje ga preko USB-a. Podešavanja se čuvaju u crtežu (DWG i DXF). Pogledajte [Pošaljite crtež laseru](topic:laser-cutting).
- **Simboli instalacija u dodatku Elektro.** Izlazi za podatke, telefon i TV, prekidači za ključ i vreme, termostat, znak za izlaz, detektori, tačka poziva i sirena, ventilator, bojler, šporet, tačka za punjenje električnih vozila, merač energije i podtabla, kao i simboli RCD i RCBO. Strujno kolo može imati RCD, kolona RCD postoji u spisku tabli, a provere imenuju strujna kola za utičnice bez RCD-a od 30 mA ili manje. Ovo je podsetnik za planiranje, a ne provera propisa.
- **Dodatak P&ID.** P&ID crta dijagrame procesa: simbole sa tačkama povezivanja, linije procesa i signala, oznake, brojeve linija, spiskove linija, opreme, instrumenata i ventila (CSV ili radna sveska) i provere. Dolazi uz CadCraft i isključen je dok ga ne uključite u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Dodaci}}. To je pomoćno sredstvo za crtanje, a ne inženjersko odobrenje, a njegov tekst je za sada samo na engleskom.

### Početak rada i ekran

- **Vođeni prvi crtež.** {{cmd:TOUR}} (ili {{ui:Pređi obilazak}} na početnoj kartici) vodi kroz šest koraka u pravom crtežu: linija, krug, pomeranje, obrezivanje, brisanje i kotiranje. Počinje sam prvi put kada se CadCraft otvori praznog. Pogledajte [Radije biste vođeni?](topic:getting-started#prefer-to-be-guided)
- **Brzi pregled i mapa komandi.** [Brzi pregled](topic:cheat-sheet) ima 40 svakodnevnih komandi na jednoj strani, takođe kao PDF za štampanje, a [mapa komandi](topic:command-map) navodi komande sa kratkim nazivima, od A do Z.
- **Traka sa alatkama sa bilo koje strane.** {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Položaj trake sa alatkama}}: gore (kao ranije), dole, levo ili desno, ili ukucajte {{cmd:TOOLBARDOCK}}. Pogledajte [Položaj trake sa alatkama](topic:settings#toolbar-position).
- **Redovi trake sa alatkama.** {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Redovi alatne trake}}: prelamanje da stane, 2 reda ili 1 red, za traku CadCraft-a i stilove „Klasični crtački“ i „Traka“. {{key:Shift+Ctrl+F1}} prolazi kroz njih, {{key:Ctrl+F1}} kroz ono što dugmad prikazuju, a {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} ih podešavaju. Početna poruka ima dugme za zatvaranje. Hvala korisniku GJoe2, koji je ovo poslao kao pull request. Pogledajte [Redovi trake sa alatkama](topic:settings#toolbar-rows).

### U CadCraft Studiju

- **Istorija.** {{cmd:HISTORY}} (`HIST`), ili {{ui:Pogled}} › {{ui:Više}} › {{ui:Istorija…}}: kopije koje Studio čuva kada otvorite i sačuvate crtež, i verzije crteža u oblaku kada ste ga otvorili iz oblaka. Otvorite ili vratite jednu, ili uporedite dve, sa prikazanim dodatim, uklonjenim i promenjenim stvarima u boji. Pogledajte [Istorija](topic:history).
- **acad.lsp i acaddoc.lsp.** Izaberite fasciklu podrške u {{cmd:APPLOAD}}: te dve datoteke se učitavaju kada se CadCraft pokrene (acaddoc.lsp ponovo za svaku novu karticu crteža), a `S::STARTUP` se izvršava posle njih. Pogledajte [Učitavanje aplikacija](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dijalog za štampanje u sopstvenom prozoru.** Dugme na naslovnoj traci premešta ga u prozor koji možete staviti na drugi monitor. Pogledajte [Premestite dijalog](common:arrange-panels#move-a-dialog).

### Za AI asistente

- **Datoteke po nazivu, u fasciklama koje izaberete.** U CadCraft Studiju asistent može da otvara, čuva i štampa datoteke po nazivu, i da komandi preda datoteku koju traži (INSERT iz datoteke, izvoz COUNT-a, SAVEAS, PLOT), ali samo unutar fascikli koje dodate u {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Asistenti}} › {{ui:Fascikle koje sme da koristi}}. Pogledajte [Dozvolite mu da koristi datoteke u fasciklama koje izaberete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Manje poziva.** Asistent može da ukuca celu komandnu liniju odjednom, drži komandu otvorenu između poziva, broji objekte po tipu i sloju bez njihovog navođenja, i postavlja blok sa vrednostima atributa u jednom koraku.
- **Bez prozora.** Komandna linija `cadcraft` upisuje SVG štampe i konvertuje, štampa, proverava ili opisuje mnogo datoteka odjednom. MCP paket još nije objavljen. Pogledajte [Rad sa datotekama bez otvaranja CadCraft-a](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Izmenjeno

- **Tačpad pomera.** Pomerite dva prsta na tačpadu i 2D pogled ih prati; štipanje i točkić miša zumiraju. Pogledajte [Miš, tačpad i dodir](topic:mouse-trackpad-touch).
- **OLE objekti se čuvaju.** Ugrađeni objekti DXF-a prikazuju se kao svoja slika ili kao označen okvir i čuvaju se nazad kroz DXF 2000. OLE objekti DWG-a se zadržavaju i upisuju nazad kada čuvate kao DWG, ali još nisu prikazani. Ranije su se gubili pri čuvanju. Pogledajte [Objekti iz drugih programa (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Jedinice novog crteža** prate jedinicu koju označite u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}}.

## Ispravljeno

- Listovi koji su se otvarali prazni, ili su izgubili prozor pogleda i pokazivali ceo model umesto njega, sada se otvaraju sa svojim pravim prozorima pogleda. List bez veze sa svojim sadržajem se čuva, a izveštaj o otvaranju to kaže.
- DXF datoteke u starijim kodnim stranicama prikazivale su iskrivljen ćirilični i korejski tekst. Sada se čitaju ispravno.
- Pasusni tekst iz drugih programa gubio je oblikovanje pri otvaranju i čuvao se kao običan tekst.

## U svim aplikacijama

- **Jedinice.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jedinice}} ima po jednu listu za dužinu, površinu, zapreminu, ugao i nagib, sa tačnim veličinama koje daju definicije jedinica (američka anketna stopa je sopstvena jedinica). Isključite jedinice koje nikada ne koristite i one napuštaju liste; označite jednu zvezdicom i novi rad počinje u njoj. Datoteka uvek zadržava svoju jedinicu. U CadCraft-u zvezdica postavlja jedinice novog crteža kada je to jedinica koju crtež može da nosi, a sopstveni okvir CadCraft-a {{ui:Jedinice}} još ne prati prekidače. Kada crtež ima jedinice, dužina koju ukucate može nositi oznaku bilo koje jedinice. Pogledajte [Jedinice, unete vrednosti i liste jedinica](common:unit-lists).
- **Gušći raspored i paneli koji se sklanjaju.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Gustina rasporeda}} › {{ui:Zbijeno}} stavlja više na ekran (ekrani osetljivi na dodir i telefoni zadržavaju velika dugmad). Svaki bočni panel ima tanku naslovnu traku: prevucite je da pričvrstite ili otkačite panel, spustite je na traku drugog panela da delite jedan okvir kao kartice, zakačite je da kliže do ivice, ili sakrijte i vratite je sa ivice. Pogledajte [Rasporedite panele](common:arrange-panels#make-the-layout-denser).
- **Dijalozi se pomeraju.** Prevucite dijalog za naslovnu traku van puta crteža; vraća se tamo gde ste ga ostavili. Dvaput kliknite naslovnu traku da ga ponovo centrirate. Pogledajte [Premestite dijalog](common:arrange-panels#move-a-dialog).
- **Recepti za AI asistente.** Deset gotovih zahteva za sopstvenog asistenta (srediti crtež, isštampati set, proveriti crteže, postaviti pitanja modelu, sabrati predmer, isprobati varijantu dela…), svaki sa alatima koje poziva i dozvolama koje mu trebaju, i svaki ponovljen našim testovima. Aplikacije ne sadrže AI. Pogledajte [Recepti za AI asistente](common:assistants-recipes).
- **Jezici.** **Português (Portugal)** je nov u {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Jezik}}. Taj, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** sada imaju svaku reč aplikacija, kao nacrte koje izvorni govornik još nije pregledao. Teme pomoći su na engleskom.
- **CadCraft Studio** kaže zašto provera ažuriranja nije uspela (još nema datoteke za vaš sistem, nema mreže, loš potpis), umesto samo „Gotovo“, i prestaje da vraća karticu Šta je novo koju ste zatvorili dok ne postoji novije izdanje.

## Nije u ovoj verziji još

- **0.7 nije potpisan kodom.** Potpisivanje i paket Microsoft Store prebačeni su u 0.8 jer validacija sertifikata još nije stigla. Proverite SHA-256 uz svaku datoteku na getcadcraft.com/download. Na Windows-u, ako SmartScreen zaustavi instalater, izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}. Na Mac-u, prvi put, desnim klikom kliknite CadCraft Studio i izaberite {{ui:Otvori}}. CadCraft Studio još nije u prodavnici aplikacija, i još nema verziju za iPad ili iPhone.
- Liste uglova i nagiba u {{ui:Jedinice}} se čuvaju, ali ih još nijedan okvir ne čita.
- OLE objekti DWG-a se čuvaju ali se ne prikazuju, a metafile slike unutar OLE objekata se ne crtaju.
- Čitanje tabela stilova štampe (CTB datoteke) iz drugih programa čeka uzorak datoteke.
- Stariji azijski tekst zapisan kao `\M+` kodovi se čita, ali još nije proveren na datoteci iz drugog programa.
- PDF podloge: slike unutar stranice prikazuju se na ekranu ali se ne štampaju, asistentova štampa izostavlja podloge, a nije proveren kako drugi programi čitaju sačuvani isečak i razmeru.
- Istorija: CadCraft još ne šalje svoja čuvanja u oblak, pa su verzije u oblaku one sačuvane sa drugih uređaja i sa veb-a. Istorija je samo u CadCraft Studiju.
- Da li Studio zadržava fasciklu podrške acad.lsp posle ponovnog pokretanja nije još proveravano; ako traži, izaberite fasciklu ponovo u APPLOAD-u.
- Panel Laser još nije isproban na pravom laseru: proverite svako podešavanje na otpadu. CadCraft Studio nema Web Serial, pa u Studiju panel čuva samo G-kod.
- Registrovanje skenova je testirano na izmišljenim skenovima, još ne na skupu pravog skenera.
- Panoramisanje dvoprstom je isprobano simuliranim događajima tačpada, još ne na pravom tačpadu.
- {{cmd:PEDIT}} nema opciju Uredi teme (koristite hvataljke ili Svojstva). Ofset, obrezivanje, produženje, zaobljenje, prekid i spajanje još ne uzimaju splajnove. Visina splajna (Z) se ne čuva.
- Novi pasusni tekst ne može još dobiti kodove oblikovanja, a SVG štampe prikazuju oblikovan tekst u jednoj boji.
- WBLOCK-ov Ceo crtež upisuje samo model, a ne listove. Trenutni stil kota nije sačuvan u datoteci: crtež se otvara sa Standard kao trenutnim.
- Stilovi menija trake nemaju još liste slojeva, boja ili tipova linija: koristite panel {{ui:Slojevi}} i {{ui:Svojstva}}.
- Oblaci tačaka se još ne čuvaju u crtežu niti štampaju, a E57 datoteke se otvaraju do 6 miliona tačaka i 512 MB.
- Sačuvane DWG datoteke CadCraft-a još nisu proverene u samom AutoCAD-u.

Sve ostalo je u [Još nije napravljeno](topic:not-built-yet).
