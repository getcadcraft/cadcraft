---
title: Kaj je novega v različici 0.7 (prej)
summary: PDF podloge in uvoz PDF, skenirane risbe s samodejnim sledenjem, pravi zlepki s SPLINE, SPLINEDIT in PEDIT, upravitelj slogov kotiranja, besedilo, ki ohrani svojo obliko, WBLOCK in lastna merila, 3D telesa iz drugih programov, registracija skenov, plošča Laser, izvoz USD, Zgodovina in tiskanje v CadCraft Studiu, vodena prva risba, orodna vrstica na katerikoli strani ali v manj vrsticah ter več za pomočnike z umetno inteligenco.
keywords: kaj je novega 0.7, prejšnja izdaja, opombe ob izdaji, dnevnik sprememb, spremembe, 0.7, različica, nove funkcije, pdf, pdfattach, pdfimport, podloga, skeniranje, scan, scanattach, scantrace, sledenje, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, oblikovanje, wblock, scalelistedit, seznam meril, acis, 3D telesa, registerscans, registracija skenov, icp, e57, las, laser, grbl, G-koda, usd, usdout, zgodovina, različice, primerjava, tiskanje, tiskalnik, png, svg, slog izrisa, tip črte, vodnik, bližnjični list, kazalo ukazov, položaj orodne vrstice, vrstice orodne vrstice, regen, regenall, sledilna ploščica, podrsanje, kodna stran, cirilica, korejščina, kitajščina, japonščina, elektrika, rcd, p&id, pid, acad.lsp, acaddoc.lsp, podporna mapa, pomočniki, mcp, enote, portugalščina
from: d9a8ea79
---

To je, kar se je spremenilo v CadCraftu 0.7 v primerjavi z 0.6. Veliko od tega so uporabniki zahtevali na Discordu. Seznam je razdeljen po področjih, najpomembnejše je prvo.

## Novo

### PDF-ji in skenirane risbe

- **Stran PDF pod risbo.** {{cmd:PDFATTACH}} (`PDFATT`) postavi stran v njeni pravi velikosti ali v merilu, ki ga vtipkate. Pripnete se lahko na njene črte, jo zbledite, naredite črno-belo ({{cmd:PDFADJUST}}), jo obrežete ({{cmd:PDFCLIP}}) in preklapljate sloje samega PDF-ja ({{cmd:PDFLAYERS}}). Izriše se kot črte, polnila in besedilo, DWG ali DXF 2000 pa jo ohrani kot povezavo do datoteke. Ko z {{ui:Odpri}} odprete PDF, vpraša, ali naj ga pripne ali uvozi. Glejte [Podloge PDF in uvoz PDF](topic:pdf-underlay).
- **Stran PDF v objekte risbe.** {{cmd:PDFIMPORT}} (`PDFIM`) naredi črte, polilinije, krožnice, loke, polna šrafiranja in besedilo na slojih, poimenovanih po PDF-ju, v pravi velikosti, vtipkanem merilu ali merilu iz dveh točk in prave razdalje, v enem koraku razveljavitve. Glejte [Uvoz strani](topic:pdf-underlay#import-a-page).
- **Skenirane risbe.** {{cmd:SCANATTACH}} vnese PNG, JPEG ali TIFF (eno stran ali vse) ali stran PDF, ki je slika. Nato jo izmerite iz dveh točk ({{cmd:SCANSCALE}}), poravnate ({{cmd:SCANALIGN}}), izravnate po njenih lastnih dolgih črtah ({{cmd:SCANDESKEW}}), naredite črno-belo in odstranite pike ({{cmd:SCANCLEAN}}), obrežete in izbrišete dele. Vsak korak je en korak razveljavitve, prvotna datoteka pa se ohrani. Glejte [Skenirane risbe in sledenje](topic:scanned-drawings).
- **Sledenje skena v črte in loke.** {{cmd:SCANTRACE}} nariše črte skena kot črte in loke na novem sloju SCAN-TRACE, z nastavljeno toleranco, besedilo in šrafiranje pa pusti, kakor sta. Poročilo pove, kaj je naredilo in kaj je pustilo, vendar ni trditev, da je rezultat pravilen: preverite ga z listom. {{cmd:RASTERSNAP}} omogoča, da objektni prijemi najdejo konce, vogale in križišča skena. Nič se ne pošilja nikamor in ne uporablja se naučen model. Glejte [Sledenje](topic:scanned-drawings#the-trace).

### Risanje in urejanje

- **Pravi zlepki.** {{cmd:SPLINE}} (`SPL`) riše krivuljo skozi točke ali iz kontrolnih točk (stopnja od 1 do 5), s tangentami na koncih. {{cmd:SPLINEDIT}} (`SPE`) premika, dodaja in briše prilegajoče ali kontrolne točke, nastavlja uteži, odpira, zapira, obrača ali pretvori zlepek v polilinijo. Zlepki iz datotek DWG in DXF se odprejo kot zlepki, DWG in DXF 2000 pa jih shranita kot zlepke. Glejte [Zlepki in polilinije](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) zapira in odpira polilinije, nanje pripenja črte in loke, nastavi eno širino, prilagodi krivuljo skozi oglišča ali zlepek vzdolž njih ter ga vrne z Decurve, obrača in ureja več naenkrat. Glejte [Urejanje polilinije](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) zapiše blok, nekaj objektov ali celotno risbo v novo datoteko DWG ali DXF, ki vsebuje le sloje, sloge in bloke, ki jih uporabljajo. Glejte [Zapis bloka ali objektov v lastno datoteko](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN in REGENALL.** {{cmd:REGEN}} (`RE`) ponovno nariše zavihek, na katerem ste, iz risbe, {{cmd:REGENALL}} (`REA`) pa vse zavihke, podokna in odprte risbe. Glejte [REGEN in REGENALL](topic:commands#regen-and-regenall).

### Besedilo in kote

- **Besedilo ohrani svojo obliko.** Odstavčno besedilo iz drugih programov ohrani barve po besedah, krepko in ležeče, podčrtano, zložene ulomke in višine: prikaže se na zaslonu in v PDF-jih, ohrani se, ko urejate besede, in se shrani nazaj. Glejte [Oblikovanje v odstavčnem besedilu iz drugih programov](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Upravitelj slogov kotiranja.** {{cmd:DIMSTYLE}} (`D`) ustvari, spremeni, primerja in uporabi poimenovane sloge kotiranja; sprememba sloga spremeni vsako koto, ki ga uporablja. {{cmd:DIMEDIT}} (`DED`) vrne besedilo nazaj, vtipka novo besedilo ter obrne ali nagne pomožne merilne črte. {{cmd:DIMTEDIT}} premakne besedilo levo, desno ali v središče. Glejte [Poimenovani slogi kotiranja](topic:dimension-settings#named-dimension-styles).
- **Lastna merila.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) doda merila, kakršno je 1:75, v sezname meril pogleda in izrisa. Shranjena so v risbi (DWG in DXF 2000), risba iz drugega programa pa prinese svoj seznam. Glejte [Merila](topic:units-papers-scales#scales).
- **Besedilo v drugih abecedah.** Datoteke DXF, shranjene v kodnih straneh za cirilico, korejščino, kitajščino, japonščino ali vietnamščino, se zdaj odprejo z besedilom. Kitajsko, japonsko in korejsko besedilo se izriše v PDF-jih (izris ob prvi potrebi prenese večjo pisavo). Glejte [Pisava](topic:text#font).

### Izris in tiskanje

- **Več v tabelah slogov izrisa.** Za vsako barvo tabela zdaj lahko nastavi tudi tip črte, konec in spoj črte ter slog polnila, ki polna polnila izriše kot šrafiranje. Tabela ima svoj seznam debelin in merilo tipa črte. Glejte [Tabele slogov izrisa](topic:plot-pdf#plot-style-tables).
- **Tiskanje ter datoteke PNG in SVG.** Pogovorno okno Izris ima {{ui:Natisni…}}, {{ui:Prenesi PNG}} (300 dpi) in {{ui:Prenesi SVG}}. V CadCraft Studiu našteje tiskalnike računalnika, njihov papir in število kopij. Glejte [Tiskanje](topic:plot-pdf#print) in [Slike in datoteke SVG](topic:plot-pdf#picture-and-svg-files).

### 3D in oblaki točk

- **3D telesa iz drugih programov.** Telesa, območja in telesa v modelnem prostoru risbe se prikažejo na zavihku 3D samo za branje; shranjevanje v DWG jih zapiše nazaj nespremenjene. Ploskve na površinah, ki jih CadCraft še ne riše, so naštete, ne ugibane. Glejte [Telesa iz drugih programov](topic:3d-solids#solids-from-other-programs).
- **Registracija več skenov.** {{cmd:REGISTERSCANS}} (`REGSCAN`) postavi skene, posnete z različnih položajev, v en okvir, po parih točk ali vtipkanih koordinatah cilja. Izboljša jih z ICP, registracijo shrani kot majhno projektno datoteko in registrirani oblak zapiše kot eno datoteko LAS ali E57. Glejte [Registracija več skenov v enega](topic:register-scans).
- **Izvoz USD.** {{cmd:USDOUT}} ali {{cmd:EXPORT3D}} › {{ui:USD}} zapiše telesa zavihka 3D kot `.usda`, `.usdc` ali `.usdz`. Glejte [Izvoz 3D modela v USD](topic:usd).
- **Računanje na zavihku 3D.** Kjer orodja zavihka 3D zahtevajo razdaljo, lahko vtipkate izračun, kakor v ukazni vrstici. Glejte [Računanje v vtipkani vrednosti](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Izdelovanje

- **Pošljite risbo na laser.** {{cmd:LASER}} ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Laser…}} odpre ploščo nad risbo: vsak sloj se reže, rahlo zareže (score), gravira črte, polni oblike, gravira sliko ali pa ni poslan, z močjo, hitrostjo in prehodi. Predogled sledi vašim urejanjem, {{ui:Shrani G-kodo…}} zapiše G-kodo za laserski način GRBL. V Chromu ali Edgeu lahko plošča okviri posel in ga pošlje prek USB. Nastavitve se shranijo v risbi (DWG in DXF). Glejte [Pošljite risbo na laser](topic:laser-cutting).
- **Gradnja vgradnih simbolov v dodatku Elektrika.** Vtičnice za podatke, telefon in TV, tipkala za ključ in čas, termostat, izhodni znak, detektorji, ročni javljalnik in sirena, ventilator, grelnik vode, štedilnik, polnilna točka za EV, števec energije in podrazdelilnik ter simboli RCD in RCBO. Tokokrog lahko nosi RCD, tabela razdelilnika ima stolpec RCD, preverjanja pa poimenujejo tokokroge vtičnic brez RCD 30 mA ali manj. Gre za opomnik pri načrtovanju, ne za preverjanje predpisov.
- **Dodatek P&ID.** P&ID riše procesne sheme: simbole s priključnimi točkami, procesne in signalne črte, oznake, številke črt, sezname črt, opreme, instrumentov in ventilov (CSV ali delovni zvezek) ter preverjanja. Priložen je CadCraftu in je izklopljen, dokler ga ne vklopite v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Dodatki}}. Je pripomoček za risanje, ne inženirska odobritev, njegova besedila pa so za zdaj le v angleščini.

### Začetek in zaslon

- **Vodena prva risba.** {{cmd:TOUR}} (ali {{ui:Ogled vodnika}} na začetni kartici) vas vodi skozi šest korakov v pravi risbi: črta, krožnica, premik, rezanje, brisanje in kota. Začne se samodejno ob prvem odpiranju CadCrafta, ko je prazen. Glejte [Raje z vodenjem?](topic:getting-started#prefer-to-be-guided).
- **Bližnjični list in kazalo ukazov.** [Bližnjični list](topic:cheat-sheet) ima 40 pogostih ukazov na eni strani, tudi kot PDF za tisk. [Kazalo ukazov](topic:command-map) pa našteje ukaze s kratkimi imeni od A do Z.
- **Orodna vrstica na katerikoli strani.** {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Položaj orodne vrstice}}: zgoraj (kot prej), spodaj, levo ali desno, ali vtipkajte {{cmd:TOOLBARDOCK}}. Glejte [Položaj orodne vrstice](topic:settings#toolbar-position).
- **Vrstice orodne vrstice.** {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Vrstice orodne vrstice}}: prelom, da se prilega, 2 vrstici ali 1 vrstica, za orodno vrstico CadCraft in sloga Drafting classic in Ribbon. {{key:Shift+Ctrl+F1}} preklaplja med njimi, {{key:Ctrl+F1}} med tem, kar gumbi prikazujejo, {{cmd:TOOLBARROWS}} in {{cmd:TOOLBAR}} pa jih nastavita. Začetni namig ima gumb za zapiranje. Hvala GJoe2, ki je to poslal kot pull request. Glejte [Vrstice orodne vrstice](topic:settings#toolbar-rows).

### V CadCraft Studiu

- **Zgodovina.** {{cmd:HISTORY}} (`HIST`) ali {{ui:Pogled}} › {{ui:Več}} › {{ui:Zgodovina…}}: kopije, ki jih Studio hrani, ko odprete in shranite risbo, ter oblačne različice risbe, če ste jo odprli iz oblaka. Odprite ali obnovite eno ali primerjajte dve, pri čemer so dodano, odstranjeno in spremenjeno prikazani v barvi. Glejte [Zgodovina](topic:history).
- **acad.lsp in acaddoc.lsp.** Izberite podporno mapo v {{cmd:APPLOAD}}: ti dve datoteki se naložita ob zagonu CadCrafta (acaddoc.lsp še enkrat za vsak nov zavihek risbe), `S::STARTUP` pa se izvede za njima. Glejte [Nalaganje aplikacij](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Pogovorno okno Izris v svojem oknu.** Gumb v njegovi naslovni vrstici ga premakne v okno, ki ga lahko postavite na drug monitor. Glejte [Premik pogovornega okna](common:arrange-panels#move-a-dialog).

### Za pomočnike z umetno inteligenco

- **Datoteke po imenu v mapah, ki jih izberete.** V CadCraft Studiu lahko pomočnik odpre, shrani in izriše datoteke po imenu ter ukazu poda datoteko, ki jo zahteva (INSERT iz datoteke, izvoz ukaza COUNT, SAVEAS, PLOT), vendar samo znotraj map, ki jih dodate pod {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Pomočniki}} › {{ui:Mape, ki jih sme uporabljati}}. Glejte [Dovolite uporabo datotek v mapah, ki jih izberete](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Manj klicev.** Pomočnik lahko vtipka celotno vrstico ukaza naenkrat, odpre ukaz med klici, šteje objekte po vrsti in sloju brez seznama ter vstavi blok z vrednostmi atributov v enem koraku.
- **Brez okna.** Ukazna vrstica `cadcraft` zapiše izrise SVG ter pretvori, izriše, preveri ali opiše mnogo datotek hkrati. Paket MCP še ni objavljen. Glejte [Delo z datotekami brez odpiranja CadCrafta](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Spremenjeno

- **Sledilna ploščica pomika.** Premaknete dva prsta po sledilni ploščici, pogled 2D jim sledi; stisk in kolešček miške povečata. Glejte [Miška, sledilna ploščica in dotik](topic:mouse-trackpad-touch).
- **Predmeti OLE se ohranijo.** Vgnezdeni predmeti DXF se prikažejo kot slika ali označen okvir in se shranijo nazaj z DXF 2000. Predmeti DWG se ohranijo in zapišejo nazaj, ko shranite kot DWG, vendar še niso prikazani. Prej so se ob shranjevanju izgubili. Glejte [Predmeti iz drugih programov (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Enote nove risbe** sledijo enoti, ki jo označite v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}}.

## Popravljeno

- Razporeditve, ki so se odprle prazne ali so izgubile pogled in namesto njega pokazale ves model, se zdaj odprejo s pravimi pogledi. Razporeditev brez povezave z vsebino se ohrani, poročilo ob odprtju pa to pove.
- Datoteke DXF v starejših kodnih straneh so prikazovale pokvarjeno cirilično in korejsko besedilo. Zdaj so pravilno prebrane.
- Odstavčno besedilo iz drugih programov je ob odprtju izgubilo svojo obliko in se je pri shranjevanju zapisalo navadno.

## V vseh aplikacijah

- **Enote.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Enote}} ima za dolžino, površino, prostornino, kot in naklon vsak svoj seznam, z natančnimi velikostmi, ki jih dajo definicije enot (ameriška geodetska stopala so posebna enota). Izklopite enote, ki jih nikoli ne uporabljate, in izginejo s seznamov enot; označite eno, in nova dela se začnejo v njej. Datoteka vedno ohrani svojo enoto. V CadCraftu označitev nastavi enote nove risbe, kadar je to enota, ki jo risba lahko nosi; okno {{ui:Enote}} CadCrafta še ne sledi stikalom. Ko ima risba enote, lahko vtipkana dolžina nosi oznako katerekoli enote. Glejte [Enote, vtipkane vrednosti in seznami enot](common:unit-lists).
- **Gostejša postavitev in podokna, ki se sama uredijo.** {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Gostota postavitve}} › {{ui:Kompaktno}} na zaslonu spravi več (zasloni na dotik in telefoni ohranijo velike gumbe). Vsako stransko podokno ima tanjšo naslovno vrstico: povlecite jo, da se pripne ali postane plavajoče, spustite jo na naslovno vrstico drugega podokna, da si delita okvir kot zavihke, jo pripnite, da zdrsne na rob, ali jo skrijte in vrnite z roba. Glejte [Razporeditev podoken](common:arrange-panels#make-the-layout-denser).
- **Pogovorna okna se premikajo.** Povlecite pogovorno okno za naslovno vrstico iz poti risbe; ko ga spet odprete, je tam, kjer ste ga pustili. Dvokliknite naslovno vrstico, da ga spet centrirate. Glejte [Premik pogovornega okna](common:arrange-panels#move-a-dialog).
- **Recepti za pomočnike z umetno inteligenco.** Deset obdelanih zahtev za vašega pomočnika (uredi risbo, izriši sklop, preveri risbe, zastavi vprašanja modelu, seštej predizmere, preizkusi različico dela ...), vsaka s orodji, ki jih kliče, in dovoljenji, ki jih potrebuje; vsako ponovijo naši testi. Aplikacije ne vsebujejo umetne inteligence. Glejte [Recepti za pomočnike](common:assistants-recipes).
- **Jeziki.** **Português (Portugal)** je nov v {{ui:Nastavitve}} › {{ui:Splošno}} › {{ui:Jezik}}. Ta, **Português (Brasil)**, **Español (México)** in **Bahasa Indonesia** imajo zdaj vse besede aplikacij, kot osnutke, ki jih ni pregledal izvorni govorec. Teme pomoči so v angleščini.
- **CadCraft Studio** pove, zakaj preverjanje posodobitve ni uspelo (še ni datoteke za vaš sistem, ni omrežja, napačen podpis), namesto da bi le pisal „Končano“. Ne prikazuje več kartice Kaj je novega, ki ste jo zaprli, dokler ne izide novejša izdaja.

## Še ni v tej različici

- **0.7 ni podpisana s kodo.** Podpisovanje in paket Microsoft Store sta se prestavila na 0.8, ker potrditev certifikata še ni prišla. Preverite SHA-256 ob vsaki datoteki na getcadcraft.com/download. V Windows, če SmartScreen ustavi namestitveni program, izberite {{ui:Več informacij}}, nato {{ui:Vseeno zaženi}}. Na Macu prvič z desnim klikom kliknite CadCraft Studio in izberite {{ui:Odpri}}. CadCraft Studio še ni v trgovini z aplikacijami, izdelave za iPad ali iPhone pa še ni.
- Kota in naklon v {{ui:Enote}} sta shranjena, vendar ju nobeno okno še ne bere.
- OLE predmeti DWG se ohranijo, vendar niso prikazani, slike metadatotek znotraj predmetov OLE pa se ne rišejo.
- Branje tabel slogov izrisa (datoteke CTB) iz drugih programov čaka na vzorčno datoteko.
- Starejše azijsko besedilo, zapisano kot kode `\M+`, se prebere, vendar še ni preverjeno z datoteko iz drugega programa.
- Podloge PDF: slike znotraj strani so prikazane na zaslonu, vendar se ne izrišejo. Izris pomočnika podloge izpusti. Kako drugi programi berejo shranjen obrez in merilo, še ni preverjeno.
- Zgodovina: CadCraft še ne pošilja shranjevanj v oblak, zato so oblačne različice tiste, shranjene z drugih naprav in iz spleta. Zgodovina je le v CadCraft Studiu.
- Ali Studio ohrani podporno mapo acad.lsp po ponovnem zagonu, še ni preverjeno; če vpraša, mapo v APPLOAD znova izberite.
- Plošča Laser še ni bila preizkušena na pravem laserju: vsako nastavitev preizkusite na odpadnem materialu. CadCraft Studio nima Web Serial, zato plošča v Studiu shrani le G-kodo.
- Registracija skenov je bila preizkušena na izmišljenih skenih, še ne na nizu pravega skenerja.
- Dvoprstni pomik je bil preizkušen s simuliranimi dogodki sledilne ploščice, še ne na pravi sledilni ploščici.
- {{cmd:PEDIT}} nima možnosti Edit vertex (uporabite ročice ali Lastnosti). Odmik, rezanje, podaljšanje, zaobljanje, prelom in združevanje še ne sprejmejo zlepkov; višina (Z) zlepka se ne ohrani.
- Novo odstavčno besedilo še ne more dobiti kod oblikovanja, SVG izrisi pa prikažejo oblikovano besedilo v eni barvi.
- Možnost WBLOCK Celotna risba zapiše le model, ne liste. Trenutni slog kotiranja se v datoteki ne shrani: risba se odpre s slogom Standard.
- Slogi menija s trakom še nimajo seznamov slojev, barv ali tipov črt: uporabite podokno {{ui:Sloji}} in {{ui:Lastnosti}}.
- Oblaki točk se še ne shranjujejo v risbo in se ne izrisujejo. Datoteke E57 se odprejo do 6 milijonov točk in 512 MB.
- Shranjene datoteke DWG CadCrafta še niso bile preverjene v samem AutoCADu.

Vse drugo je v [Še ni izdelano](topic:not-built-yet).
