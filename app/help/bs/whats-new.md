---
title: Novosti u 0.9
summary: Šrafure koje prate svoju granicu, slojne grupe, naslagani podovi, 2D pametni zidovi s vratima i prozorima, stilovi teksta i uređivač formatiranog teksta, plutajuća komandna linija, hvatanje za mrežu, deset načina crtanja luka i panel Dokumenti.
keywords: novosti, 0.9, bilješke o izdanju, dnevnik promjena, šrafura, pridružena šrafura, hatchedit, pat datoteka, datoteka uzorka, slojne grupe, laygroup, podovi, naslagani podovi, floorlayers, pametni zidovi, zid, vrata, prozor, alati za zidove, stil teksta, stil, uređivač mtext, pasus tekst, formatiranje, plutajuća komandna linija, komandna linija, gornje područje, kompaktno, hvatanje za mrežu, f9, luk, panel dokumenti, provjera, uk čelični profili, draw.io, tajlandski tekst, dxf r12, novosti, što je novo, bilješke o izdanju, promjene, 0.8, 0.8.1, verzija, nove funkcije, automatsko dovršavanje, duh, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, git, fossil, access, crtanje bez vida, čitač ekrana, granice, azimuti, aunits, shx, dijagram, ole, historija, poredi, riječima, svojstva, stope i inči, rastezanje, jezici, ulazni uređaji, problemi, live, asistenti
from: 8b6dea0b
---

Ovo je šta se promijenilo u CadCraftu 0.9, u odnosu na 0.8.1. CadCraft je 2D i 3D aplikacija za crtanje u CadCraft Studiju 0.9 i njegovih osam aplikacija. 0.9 završava izradu osnova, dodaje stilove teksta i pravi uređivač teksta, te daje više prostora na ekranu.

## Novo

### Izrada osnova

- **Šrafure koje prate svoju granicu.** {{cmd:HATCH}} se povezuje s onim što je omeđuje. Pomjeri, okreni ili razmjeri granicu, pa šrafura i njen uzorak slijede; preoblikuj je, pa se šrafura ponovo računa. {{cmd:HATCHEDIT}} (`HE`) mijenja šrafuru poslije i pravi ili prekida tu vezu. Pogledaj [Šrafura i ispunjena područja](topic:hatch).
- **Datoteke uzoraka šrafure.** Na pitanje {{cmd:HATCH}} `Pick internal point` ukucaj `F` (Pattern file) i izaberi `.pat` datoteku. Isprobane su samo datoteke napisane u uobičajenom formatu.
- **Slojne grupe.** U {{ui:Alati}} na panelu {{ui:Slojevi}}: {{ui:Nova grupa}}, {{ui:Dodaj gotove grupe}}, {{ui:Grupiši po nazivu}} i {{ui:Pronađi sloj}}; ili ukucaj {{cmd:LAYGROUP}} (`LG`). Pogledaj [Organizuj crtež slojevima](topic:layers#group-layers).
- **Naslagani podovi.** {{cmd:FLOORS}} (`FLR`), ili {{ui:Podovi…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}. Prozor na listu može prikazati jedan pod pod {{ui:Prikazani pod}} u Svojstvima. {{cmd:FLOORLAYERS}} pretvara podove u slojeve za datoteku koja ide nekome drugom. Pogledaj [Slaži podove u jednom crtežu](topic:floors).
- **2D pametni zidovi, vrata i prozori.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Uglovi, T spojevi i presjeci se računaju za tebe. Zidovi čuvaju zapis o tome kako se spajaju, a Svojstva dobijaju Zabrani spajanje na početku / na kraju, Liniju lokacije i izmjenjivu Dužinu. Pogledaj [Crtaj 2D zidove, vrata i prozore](topic:walls-2d).
- **Alat za zidove na zidovima osnove.** Ukucaj {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i ostale. Još nemaju dugmad na alatnoj traci. Pogledaj [Oblici zidova, presjeci, odmaci i zaključavanja za 2D zidove](topic:wall-tools-2d).

### Tekst

- **Stilovi teksta.** {{cmd:STYLE}} (`ST`), ili {{ui:Stil teksta}} na alatnoj traci {{ui:Crtanje}}: imenovani stilovi s fontom, visinom, faktorom širine i nagibom. Pogledaj [Postavi font i veličinu teksta stilovima teksta](topic:text-styles).
- **Uređivač formatiranog teksta pasusa.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ili dvoklik na tekst otvara okvir s fontom, veličinom, podebljanjem, kurzivom, podvlačenjem, precrtavanjem, bojom, poravnanjem i znakovima stepena, plus-minus i prečnika, plus {{ui:U redu}} i {{ui:Otkaži}}. Pogledaj [Formatiraj tekst pasusa](topic:format-paragraph-text).
- **Dijagram iz draw.io XML-a.** {{cmd:DIAGRAM}} (`T2D`) čita i nalijepljeni draw.io XML. Pogledaj [Nacrtaj dijagram iz teksta](topic:text-to-diagram).
- **Tajlandski tekst u PDF štampi.** Ranije se štampao kao upitnici.

### Više prostora i pomoćna sredstva za crtanje

- **Plutajuća, tanja komandna linija i kompaktno gornje područje.** Povuci hvatište komandne linije da je otkačiš, povuci njenu gornju ivicu za manje redova, {{key:F2}} otvara historiju. {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Komandna linija}} i izbori gornjeg područja imaju iste postavke. Pogledaj [Postavke](topic:settings#command-line).
- **Meni hvatanja objekata.** Desni klik na {{ui:Hvatanje}} u statusnoj traci, ili ukucaj {{cmd:OSNAP}}.
- **Hvatanje za mrežu.** Dugme {{ui:Hvatanje za mrežu}} u statusnoj traci, ili {{key:F9}}: izabrane tačke idu na najbližu tačku mreže kad hvatanje objekta nije uhvatilo tačku.
- **Luk na deset načina, i Nastavi.** {{ui:Luk}} na alatnoj traci {{ui:Crtanje}} ili {{cmd:ARC}}: 3 tačke, porodica Početak/Centar/Kraj i porodica Centar/Početak/Kraj, te Nastavi (pritisni {{key:Enter}} u početnoj tački) od posljednje linije, luka ili polilinije.
- **Panel Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ili {{ui:Dokumenti…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}: revizija, stanje i preuzimanje za svaki crtež u folderu projekta. Otvara se kao centriran dijalog. Pogledaj [Dokumenti](topic:documents).

### Datoteke

- **Čelični profili UK.** 976 presjeka u panelu Standard, upisanih kao na crtežima (na primjer `305x165x40 UB`).
- **Južnoafrički paketi** (praksa crtanja i građevinski propisi) kao paketi dodatka Građevinski propisi. Brojevi nisu provjereni.
- **Dodaci za CadCraft,** dodaju se po potrebi i isključeni su po zadanom: projektovanje unutrašnjeg osvjetljenja, dizajn čipova (HDL u raspored), rezbarenje na ruteru, simulacija kola, zupčanici lančanika i paketi građevinskih propisa po zemljama.

## Popravljeno

- Pomjeranje, okretanje ili razmjera šrafure ostavljalo je njen uzorak iza.
- {{cmd:GRIDMOVE}} je nosio cijeli zid osnove koji počinje samo na liniji mreže. Zid se sad procjenjuje po svojim krajevima.
- Mreža se prikazivala samo unutar granica crteža čak i kad su granice isključene.
- Lista blokova u bočnom panelu se pomjera, a naziv koji nije blok navodi blokove koji počinju tim nazivom („Da li si mislio“).
- DXF R12 datoteke koje je AutoCAD odbijao („Unknown group 1001 for table“) sad se tu otvaraju.
- Vrlo velike datoteke (oko 70.000 entiteta i više) nisu se otvarale uz „Maximum call stack size exceeded“.
- DWG datoteke iz AutoCADa 2018 i kasnijih s visokom verzijom održavanja nisu se otvarale uz „bad BITLONG code 11“.
- U okviru za tekst pasusa, nova veličina ukucana za izabrani dio zadržava izbor.

## U svakoj aplikaciji

Opisi u obliku bubica (Bootstrap) na svakoj kontroli koja ima savjet, početni savjet koji možeš zatvoriti, kartice koje se pomjeraju kad ne stanu, i naslov kartice preglednika koji prati otvoreni crtež (`<drawing> - CadCraft | CadCraft`). {{ui:Postavke}} › {{ui:Raspored}} je sad padajući spisak izbora s dva reda. Spisak jezika u {{ui:Postavke}} je duži nego u 0.8. Zajedničko uređivanje uživo, zbirke biblioteke i jedinice težine i temperature opisani su u bilješkama Studija.

## Iskreno o ograničenjima

- Tekst pasusa nema liste s oznakama ili brojevima, lenjir tabulatora ni poravnanje po širini. Štampani PDF-ovi slažu tekst u Helvetici.
- Zidovi osnove su pravi, pa se luk crta kao kratki zidovi. Provjera alata za zidove od strane zajednice je u toku.
- Slojne grupe nisu zapisane u AutoCADovom vlastitom formatu, pa AutoCAD prikazuje ravnu listu. Drugi programi prikazuju sve podove zajedno, osim ako ne pokreneš {{cmd:FLOORLAYERS}}.
- Panel Dokumenti nisu isprobala dva čovjeka na pravoj dijeljenoj mreži. Rezbarenje na ruteru nije pokrenuto ni na jednoj pravoj mašini. Procjena osvjetljenja je provjerena prema trasiranju fotona, a ne prema drugom programu. Dodaci za inženjerstvo su pomoćna sredstva za provjeru, a ne zamjena za pregled inženjera.
- Jezici osim engleskog su strojni nacrti, a neke nove riječi su samo na engleskom.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u CadCraftu 0.8 i 0.8.1, u odnosu na 0.7. 0.8 (1. novembar 2026) dodaje pomoćna sredstva za crtanje koja rade iz tvog vlastitog crteža, pravilima na tvom računaru i bez modela, a 0.8.1 (2. novembar 2026) popravlja greške prijavljene poslije.

### Novo

**Crtež koji dovršava tvoju misao**

- **Duh pokazuje šta slijedi.** Bez pokrenute komande, sivi isprekidani duh pokazuje šta kažu uzorci tvog crteža: sljedeći stub na istom razmaku, sljedeći korak stepenica, nedostajući zid sobe. Pritisni {{key:Tab}} da ga nacrtaš kao jedan korak poništavanja, ili {{key:Esc}} da ga odbaciš. Gleda samo najnovije objekte, pa ostaje glatko na velikom crtežu. Isključi ga u {{ui:Postavke}} › {{ui:CadCraft}} ili s {{cmd:AUTOCOMPLETE}} `Off`.
- **Sljedeća tačka dok crtaš liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je sljedeća tačka: sljedeći korak stepenica, četvrti ugao pravougaonika, ili tačka koja ga zatvara. Približi kursor i pritisni {{key:Tab}}, kao da si tu kliknuo.
- **Skice perom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtaj grube poteze perom, mišem ili prstom, pa svaki postane čista linija, krug, luk, pravougaonik ili polilinija, uhvaćena za ono što je već nacrtano. Pogledaj [Skiciraj perom i dobij preciznu geometriju](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) nalazi papir na fotografiji, ispravlja perspektivu, primjenjuje veličinu papira i razmjeru koje daš, i prenosi linije pera na sloj za svaku boju pera. Natpisi se ne prenose.
- **Kotiraj prema pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota duž stranica koje izabereš, ukupnu veličinu, širine otvora, prečnike rupa i, s `Grid`, razmak mreže. Nikad ne ponavlja kotu koja već postoji.
- **Pomjeri liniju mreže i skup slijedi.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji se završavaju na liniji mreže rastežu se s njom, zidovi uz nju, stubovi, njen balon i oznaka se pomjeraju, a kote na njoj mjere novi razmak. Jedan korak poništavanja.

**Listovi, detalji i oznake**

- **Listovi koji se sami slažu.** {{cmd:AUTOSHEET}} uzima tvoje imenovane poglede (ili zasebne dijelove modela), bira veličinu papira i standardnu razmjeru, i stavlja poglede na nove listove s naslovnim blokom i natpisom s imenom i razmjerom. Sve ostaje izmjenjivo. Pogledaj [Slaži listove za mene](topic:lay-out-sheets-for-me).
- **Detalji tvoje firme, ponuđeni dok crtaš.** {{cmd:DETAILS}} (`DET`) čuva tvoje vlastite blokove detalja. Kad se izabrano poklapa s jednim po riječima na njegovim slojevima, nazivima blokova i napomenama, statusna traka to kaže; izaberi ga i postavi. {{cmd:DETAILS}} › Share stavlja tvoj spisak u folder Dokumenti i donosi ono što je tim dodao. Postavke isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definiše oznaku (njenu vrstu, vrijednosti koje može uzeti, blokove na koje se primjenjuje), postavlja je na izabrane reference blokova i navodi ih kao spisak koji možeš spasiti kao CSV. Definicije se čuvaju u DWG-u. Pogledaj [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravougaonik za crtež: mreža ga popunjava, a zum Sve ga prikazuje. Granice se prikazuju kao obris i čuvaju se u DWG i DXF, s granicama papira. Pogledaj [Postavi granice crteža](topic:drawing-limits).

**Rad s drugim ljudima i drugim programima**

- **Pretvori označavanje u reviziju.** {{cmd:REDLINE}} čita paket koji piše MarkupCraft i navodi svaku promjenu. Prihvati ili odbij svaku s bilješkom; prihvaćene dobijaju oblak revizije i dnevnik revizija u jednom koraku poništavanja, a ti spasiš datoteku odgovora koja zatvara označavanja u MarkupCraftu. Pogledaj [Pretvori označavanje u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Kad je {{ui:Datoteke pogodne za spajanje}} uključeno u {{ui:Postavke}} › {{ui:CadCraft}}, svaki objekat dobija ključ koji se nikad ne mijenja (datoteke su oko 10 posto veće). `cadcraft merge base ours theirs` tada spaja izmjene dvije osobe na jednom DWG ili DXF objektu po objekat i izvještava samo tamo gdje su dvije osobe promijenile istu stvar. Pogledaj [Spoji izmjene dvije osobe na jednom crtežu](topic:merge-drawings).
- **Šta se promijenilo, riječima.** U Historiji, Poredi daje običan spisak: gdje su se stvari promijenile, koliko su velika mjesta, šta je dodano, uklonjeno ili promijenjeno, i tekst koji je izmijenjen. Pogledaj [Reci riječima šta se promijenilo](topic:changes-in-words).
- **Azimuti i uglovi.** Ukucaj smjer kao geodetski azimut, na primjer N45°23'30"E, ili u stepenima, minutama i sekundama, bilo gdje gdje se traži ugao; AUNITS postavlja kako se uglovi prikazuju. Pogledaj [Ukucaj i prikaži azimute i uglove](topic:bearings-and-angles).
- **Tvoji vlastiti SHX fontovi.** Daj CadCraftu folder SHX fontova i stilovi teksta koji ih imenuju crtaju se njima, na ekranu i u štampi. Pogledaj [Crtaj tekst u svojim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do i crta blokove i konektore koje možeš uređivati. Pogledaj [Nacrtaj dijagram iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG-u.** {{cmd:OLELIST}} navodi OLE objekte koje DWG nosi, a CadCraft ih sam ne može postaviti, i postavlja kopiju slike gdje kažeš. Pogledaj [Slike](topic:pictures#objects-from-other-programs-ole).
- **Tvoji proračuni ostaju uz crtež.** Proračunske tabele i razlozi projekta čuvaju se u DWG-u uz tabelu klasa.

**Crtanje bez vida**

- Uključi {{ui:Crtanje bez vida}} u {{ui:Postavke}} (ili ukucaj {{cmd:ACCESS}} i odgovori `On`). CadCraft izgovara svaku komandu i rezultat preko tvog čitača ekrana, opisuje crtež i ono što je blizu kursora, dopušta ti da pomjeraš kursor i biraš tačke tastaturom, te pušta zvuk za svako hvatanje i hvatište. Gdje tvoj preglednik može prepoznati govor na tvom računaru, komande se mogu izgovoriti. Pogledaj [Crtaj bez vida](topic:draft-without-sight).

**U svakoj aplikaciji**

- **Jezici.** 54 jezika; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki). Jezici osim engleskog su strojni nacrti dok ih ne pregleda izvorni govornik.
- **Ulazni uređaji.** Upravljanje touchpadom, perom, 3D mišem, kontrolerom za igre i MIDI kontrolama.
- **Redovi alatne trake i mreža svojstava.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi Prelomi, 2 reda ili 1 red u drugim aplikacijama. CadCraft zadržava svoju postavku u {{ui:Postavke}} › {{ui:CadCraft}} (vidi [Redovi alatne trake](topic:settings#toolbar-rows)). Zajednička mreža svojstava je u tri druge aplikacije, a ne u CadCraftu.
- **Problemi, Live i dodaci.** Zajednički panel Problemi koji upozorava u svakoj aplikaciji, pogled Live u CadCraft Studiju na to ko je gdje (vidi [Radi na jednom crtežu zajedno](topic:work-live)), i spisak dodataka.
- **Poveži svoj AI.** Jedna veza iz CadCraft Studija sa svih osam aplikacija, s nivoom samo za čitanje, predlaganje ili uređivanje po aplikaciji, i dnevnikom radnji asistenta običnim riječima. CadCraft nema sopstveni AI, a Pitaj u svakoj aplikaciji koristi AI koji ti povežeš.

### Popravljeno u 0.8.1

- **Svojstva su pokazivala 150 umjesto 12'-6"** u crtežima u stopama i inčima. Polja koja aplikacija sama čita ponovo zadržavaju svoj tekst.
- **DWG datoteke čiji je odjeljak klasa čitan kao pogrešan tip** (GitHub cadcraft#5) sad se ispravno otvaraju.
- **Pokazivač više ne prikazuje se iza iskočnih prozora.**
- **Studio i upakovana izdanja mogu mijenjati jezik za vrijeme rada.** Ranije su bila samo na engleskom. Još nije isprobano na svim platformama: javi nam ako se jezik ne mijenja.
- **Tableti u uspravnom položaju** daju slobodnu visinu mreže platnu, a režim listova počinje na 760 px ili manje.
- **STRETCH sa presječnim prozorom i LIMITS** prijavljeni su na Studiju 0.8.0, a već su bili ispravni u 0.8 web verziji; instalater prijavitelja je bio stariji. Studio 0.8.1 ih sadrži.

### Nije još u ovoj verziji

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može upozoriti (izaberi {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}); na Macu, desni klik na CadCraft Studio i izaberi {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a iPad i iPhone verzija nije ponovo izgrađena za 0.8.1.
- **Skice perom i fotografije skica** isprobane su samo na izmišljenim fotografijama i mišu, još ne s pravim perom, ekranom osjetljivim na dodir ili rukom nacrtanom skicom na papiru.
- **Crtanje bez vida** testirano je automatskim provjerama, još ne s čitačem ekrana ili slijepim testerom.
- **Dijeljenje detalja** nije imalo provjeru dvije osobe, a fascikla Team Cloud Plan kao folder Dokumenti nije izgrađena.
- **Spajanje** radi za CadCraftove DWG i DXF datoteke; za datoteke drugih aplikacija nije izgrađeno.
- **Poništavanje preko prozora:** CadCraft prijavljuje svaki završen korak, ali Studio još nema jedno Poništi za sve aplikacije; svaka aplikacija poništava svoje korake.
- **OLE objekti DWG-a** se čuvaju, ali se ne crtaju na mjestu.
- **Čitanje tabela stilova iscrtavanja (CTB datoteke)** iz drugih programa je izgrađeno, ali nije provjereno na datoteci iz drugog programa.
- **Poveži svoj AI:** povezivanje jednim klikom u Studiju, hostovani konektor za AI u pregledniku, tvoj vlastiti API ključ u Studiju i objavljeni MCP paket nisu obećani u ovom izdanju.

Za verziju prije ove, pogledaj [Novosti u 0.7](topic:whats-new-0-7).
