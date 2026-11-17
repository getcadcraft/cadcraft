---
title: Što je novo u 0.9
summary: Šrafure koje prate svoj rub, slojne grupe, slagane etaže, 2D pametni zidovi s vratima i prozorima, stilovi teksta i uređivač oblikovanog teksta, plutajući naredbeni redak, hvatanje na mrežu, deset načina crtanja luka i ploča Dokumenti.
keywords: što je novo, 0.9, bilješke o izdanju, dnevnik promjena, šrafura, pridružena šrafura, hatchedit, datoteka uzorka, pat, slojne grupe, laygroup, etaže, slagane etaže, floorlayers, pametni zidovi, zid, vrata, prozor, alati za zidove, stil teksta, stil, uređivač mtext, odlomački tekst, oblikovanje, plutajući naredbeni redak, naredbeni redak, gornje područje, kompaktno, hvatanje na mrežu, f9, luk, ploča dokumenti, uzimanje na uređivanje, uk čelični profili, draw.io, tajlandski tekst, dxf r12, što je novo, 0.8, 0.8.1, verzija, nove značajke, automatsko dovršavanje, sjena, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, git, fossil, pristup, granice, smjerovi, aunits, shx, dijagram, ole, povijest, usporedba, riječima, svojstva, stope i palci, rastezanje, jezici, ulazni uređaji, problemi, uporabno, asistenti
from: 8b6dea0b
---

Ovo se promijenilo u CadCraftu 0.9 u odnosu na 0.8.1. CadCraft je aplikacija za 2D i 3D crtanje u CadCraft Studiju 0.9 i njegovih osam aplikacija. Verzija 0.9 dovršava crtanje tlocrta, dodaje stilove teksta i pravi uređivač teksta te vam daje više prostora na zaslonu.

## Novo

### Crtanje tlocrta

- **Šrafure koje prate svoj rub.** {{cmd:HATCH}} se povezuje s onim što ga omeđuje. Pomaknete, rotirate ili skalirate rub, a šrafura i njezin uzorak slijede; preoblikujete ga, a šrafura se ponovno izračunava. {{cmd:HATCHEDIT}} (`HE`) mijenja šrafuru naknadno i pravi ili prekida tu vezu. Vidi [Šrafure i područja ispune](topic:hatch).
- **Datoteke uzoraka šrafure.** Na pitanje {{cmd:HATCH}} `Odredite unutarnju točku` upišite `F` (Datoteka uzorka) i odaberite `.pat` datoteku. Isprobane su samo datoteke napisane u uobičajenom formatu.
- **Slojne grupe.** U {{ui:Alati}} na ploči {{ui:Slojevi}}: {{ui:Nova skupina}}, {{ui:Dodaj gotove skupine}}, {{ui:Grupiraj po nazivu}} i {{ui:Pronađi sloj}}; ili upišite {{cmd:LAYGROUP}} (`LG`). Vidi [Organizirajte crtež slojevima](topic:layers#group-layers).
- **Slagane etaže.** {{cmd:FLOORS}} (`FLR`), ili {{ui:Etaže…}} u izborniku {{ui:Više}} grupe {{ui:Pogled}}. Viewport na listu može prikazati jednu etažu pod {{ui:Prikazana etaža}} u Svojstvima. {{cmd:FLOORLAYERS}} pretvara etaže u slojeve za datoteku koja ide nekome drugome. Vidi [Slaganje etaža u jednom crtežu](topic:floors).
- **2D pametni zidovi, vrata i prozori.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Kutove, T spojeve i križanja izračunava sam CadCraft. Zidovi čuvaju zapis o tome kako se spajaju, a Svojstva dobivaju {{ui:Ne dopusti spajanje na početku}} / {{ui:Ne dopusti spajanje na kraju}}, linija lokacije i {{ui:Duljina}} koju možete uređivati. Vidi [Crtajte pametne zidove, vrata i prozore u 2D](topic:walls-2d).
- **Alat za zidove na tlocrtnim zidovima.** Upišite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i ostale. Nemaju još gumbe na alatnoj traci. Vidi [Oblici zidova, rezovi, odmaci i zaključavanja za 2D zidove](topic:wall-tools-2d).

### Tekst

- **Stilovi teksta.** {{cmd:STYLE}} (`ST`), ili {{ui:Stil teksta}} na alatnoj traci {{ui:Crtanje}}: imenovani stilovi s fontom, visinom, faktorom širine i nagibom. Vidi [Postavite font i veličinu teksta stilovima teksta](topic:text-styles).
- **Uređivač oblikovanog odlomačnog teksta.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ili dvostruki klik na tekst otvara okvir s fontom, veličinom, podebljanjem, kosim tekstom, podcrtavanjem, precrtavanjem, bojom, poravnanjem te znakovima stupnja, plus-minus i promjera, uz {{ui:U redu}} i {{ui:Odustani}}. Vidi [Oblikujte odlomački tekst](topic:format-paragraph-text).
- **Dijagram iz draw.io XML-a.** {{cmd:DIAGRAM}} (`T2D`) čita i zalijepljeni draw.io XML. Vidi [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **Tajlandski tekst u PDF plotu.** Prije se ispisivao kao upitnici.

### Više prostora i pomagala za crtanje

- **Plutajući, tanji naredbeni redak i kompaktno gornje područje.** Povucite hvatište naredbenog retka da ga odvojite, povucite njegov gornji rub za manje redaka, a {{key:F2}} otvara povijest. {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Naredbeni redak}} i izbori gornjeg područja imaju iste postavke. Vidi [Postavke](topic:settings#command-line).
- **Izbornik hvatanja objekata.** Desnom tipkom kliknite {{ui:Hvatanje}} u statusnoj traci ili upišite {{cmd:OSNAP}}.
- **Hvatanje na mrežu.** Gumb {{ui:Hvatanje na mrežu}} u statusnoj traci ili {{key:F9}}: odabrane točke idu na najbližu točku mreže kad hvatanje objekta nije uhvatilo točku.
- **Luk na deset načina i Nastavi.** {{ui:Luk}} na alatnoj traci {{ui:Crtanje}} ili {{cmd:ARC}}: 3 točke, obitelj Početak/Središte/Kraj i obitelj Središte/Početak/Kraj te Nastavi (pritisnite {{key:Enter}} na početnoj točki) od posljednje linije, luka ili polilinije.
- **Ploča Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ili {{ui:Dokumenti…}} u izborniku {{ui:Više}} grupe {{ui:Pogled}}: revizija, stanje i uzimanje na uređivanje za svaki crtež u mapi projekta. Otvara se kao centrirani dijalog. Vidi [Dokumenti](topic:documents).

### Datoteke

- **Veličine UK čeličnih profila.** 976 profila na ploči Standard, upisanih kao na crtežima (na primjer `305x165x40 UB`).
- **Južnoafrički paketi** (praksa crtanja i građevinski propisi) kao paketi dodatka Građevinski propisi. Brojevi nisu provjereni.
- **Dodaci za CadCraft,** dodaju se po potrebi i isključeni su po zadanome: dizajn unutarnje rasvjete, dizajn čipova (HDL u raspored), rezbarenje glodalicom, simulacija strujnih krugova, lančanici za lančane prijenose i paketi zemalja za građevinske propise.

## Ispravljeno

- Premještanje, rotiranje ili skaliranje šrafure ostavljalo je njezin uzorak iza.
- {{cmd:GRIDMOVE}} je nosio cijeli zid tlocrta koji samo počinje na liniji mreže. Zid se sada procjenjuje po krajevima.
- Mreža se prikazivala samo unutar granica crteža, čak i kad su granice isključene.
- Popis blokova u bočnoj ploči sada se pomiče, a ime koje nije blok navodi blokove koji počinju njime („Jeste li mislili“).
- DXF R12 datoteke koje je AutoCAD odbijao („Unknown group 1001 for table“) sada se tamo otvaraju.
- Vrlo velike datoteke (oko 70.000 entiteta i više) nisu se otvarale uz poruku „Maximum call stack size exceeded“.
- DWG datoteke iz AutoCADa 2018. i novijih s visokom verzijom održavanja nisu se otvarale uz „bad BITLONG code 11“.
- U okviru odlomačnog teksta nova veličina upisana za odabrani dio zadržava odabir.

## U svim aplikacijama

Opisi (tooltip) na svakom upravljaču s savjetom, početni savjet koji možete zatvoriti, trake kartica koje se pomiču kad ne stanu te naslov kartice preglednika koji prati otvoreni crtež (`<drawing> - CadCraft | CadCraft`). {{ui:Postavke}} › {{ui:Raspored}} sada je padajući izbornik s dvoredičnim izborima. Popis jezika u {{ui:Postavke}} duži je nego u 0.8. Zajedničko uređivanje uživo, zbirke Knjižnice te jedinice težine i temperature opisani su u bilješkama o Studiju.

## Iskrena ograničenja

- Odlomački tekst nema popise s oznakama ni brojevima, ravnalo tabulatora ni poravnanje u bloku. Plotani PDF-ovi slažu tekst u Helveticu.
- Zidovi u tlocrtu su ravni, pa se luk crta kao kratki zidovi. Provjera zajednice za alat zida još je na čekanju.
- Slojne grupe nisu zapisane u AutoCADovom vlastitom formatu, pa AutoCAD prikazuje ravan popis. Drugi programi prikazuju sve etaže zajedno, osim ako ne pokrenete {{cmd:FLOORLAYERS}}.
- Ploča Dokumenti nije isprobana na pravom dijeljenom mjestu, dvije osobe je nisu isprobale. Rezbarenje glodalicom nije izvedeno ni na jednom pravom stroju. Procjena rasvjete provjerena je prema praćenju fotona, a ne prema drugom programu. Inženjerski dodaci su pomagala za provjeru, a ne zamjena za pregled inženjera.
- Jezici osim engleskog su strojne radne verzije, a neke nove riječi su samo na engleskom.

## Ranije: 0.8 i 0.8.1

Ovo se promijenilo u CadCraftu 0.8 i 0.8.1 u odnosu na 0.7. Verzija 0.8 (1. studenoga 2026.) dodaje pomagala za crtanje koja rade iz vašeg vlastitog crteža, prema pravilima na vašem računalu i bez modela, a 0.8.1 (2. studenoga 2026.) ispravlja greške prijavljene nakon nje.

### Novo

**Crtež koji nastavlja vašu misao**

- **Sjena pokazuje što slijedi.** Bez pokrenute naredbe siva isprekidana sjena pokazuje što uzorci vašeg crteža kažu da slijedi: sljedeći stup na istom razmaku, sljedeći korak stubišta, nedostajući zid prostorije. Pritisnite {{key:Tab}} da je nacrtate kao jedan korak poništavanja, ili {{key:Esc}} da je odbacite. Gleda samo najnovije objekte, pa ostaje glatka na velikom crtežu. Isključite je u {{ui:Postavke}} › {{ui:CadCraft}} ili s {{cmd:AUTOCOMPLETE}} `Off`.
- **Sljedeća točka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} sjena je sljedeća točka: sljedeći korak stubišta, četvrti kut pravokutnika ili točka koja ga zatvara. Približite kursor i pritisnite {{key:Tab}}, kao da ste kliknuli tamo.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtajte grube poteze olovkom, mišem ili prstom i svaki postaje čista linija, kružnica, luk, pravokutnik ili polilinija, uhvaćen na ono što je već nacrtano. Vidi [Skicirajte olovkom i dobijete preciznu geometriju](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) pronalazi papir na fotografiji, ispravlja perspektivu, primjenjuje veličinu papira i mjerilo koje zadate te prenosi linije olovke na sloj za svaku boju olovke. Slova se ne prenose.
- **Kotirajte prema pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota duž stranica koje odaberete, ukupnu veličinu, širine otvora, promjere rupa te, s `Grid`, razmak mreže. Nikad ne ponavlja kotu koja već postoji.
- **Pomaknite liniju mreže i skup slijedi.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji završavaju na liniji mreže rastežu se s njom, zidovi uz nju, stupovi, njezin mjehurić i oznaka se pomiču, a kote na njoj mjere novi razmak. Jedan korak poništavanja.

**Listovi, detalji i oznake**

- **Listovi koji se sami slažu.** {{cmd:AUTOSHEET}} uzima vaše imenovane poglede (ili zasebne dijelove modela), odabire veličinu papira i standardno mjerilo te stavlja poglede na nove listove sa zaglavljem crteža i natpisom s imenom i mjerilom. Sve ostaje uređivo. Vidi [Neka listove složi za mene](topic:lay-out-sheets-for-me).
- **Detalji vaše tvrtke, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše vlastite blokove detalja. Kad se odabrano podudara s jednim prema riječima na njegovim slojevima, nazivima blokova i bilješkama, statusna traka to kaže; odaberite ga i postavite. {{cmd:DETAILS}} › {{ui:Dijeli}} stavlja vaš popis u mapu Dokumenti i donosi ono što je vaš tim dodao. Postavke isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definira oznaku (njezinu vrstu, vrijednosti koje može poprimiti, blokove na koje se primjenjuje), postavlja je na odabrane reference blokova i popisuje ih kao tablicu koju možete spremiti kao CSV. Definicije se čuvaju u DWG-u. Vidi [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravokutnik za crtež: mreža ga ispunjava, a zum Sve ga prikazuje. Granice se prikazuju kao obris i spremaju se u DWG i DXF, s granicama papira. Vidi [Postavljanje granica crteža](topic:drawing-limits).

**Rad s drugim ljudima i drugim programima**

- **Pretvorite oznaku u reviziju.** {{cmd:REDLINE}} čita paket koji zapisuje MarkupCraft i navodi svaku promjenu. Prihvatite ili odbijte svaku s bilješkom; prihvaćene dobivaju revizijski oblak i dnevnik revizija u jednom koraku poništavanja, a spremate datoteku odgovora koja zatvara oznake u MarkupCraftu. Vidi [Pretvorite oznaku u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Uz {{ui:Datoteke pogodne za spajanje}} uključeno u {{ui:Postavke}} › {{ui:CadCraft}}, svaki objekt dobija ključ koji se nikad ne mijenja (datoteke su oko 10 posto veće). `cadcraft merge base ours theirs` tada spaja dvije tuđe izmjene jednog DWG ili DXF objekta po objekt i javlja samo gdje su dvije osobe promijenile istu stvar. Vidi [Spojite dvije izmjene jednog crteža](topic:merge-drawings).
- **Što se promijenilo, riječima.** U Povijesti Usporedba daje jednostavan popis: gdje su se stvari promijenile, koliko su velika ta mjesta, što je dodano, uklonjeno ili promijenjeno te tekst koji je uređen. Vidi [Recite riječima što se promijenilo](topic:changes-in-words).
- **Smjerovi i kutovi.** Upišite smjer kao geodetski smjer, na primjer N45°23'30"E, ili u stupnjevima, minutama i sekundama, bilo gdje gdje se traži kut. AUNITS postavlja kako se kutovi prikazuju. Vidi [Upisivanje i prikaz smjerova i kutova](topic:bearings-and-angles).
- **Vlastiti SHX fontovi.** Dajte CadCraftu mapu SHX fontova i stilovi teksta koji ih imenuju crtaju se njima, na zaslonu i u plotovima. Vidi [Crtanje teksta vlastitim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili popis od-do te crta blokove i konektore koje možete uređivati. Vidi [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG-u.** {{cmd:OLELIST}} popisuje OLE objekte koje DWG nosi, a CadCraft ih sam ne može postaviti, i postavlja kopiju slike gdje kažete. Vidi [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši proračuni ostaju uz crtež.** Listovi proračuna i razlozi dizajna čuvaju se u DWG-u uz tablicu klasa.

**Crtanje bez vida**

- Uključite {{ui:Crtanje bez vida}} u {{ui:Postavke}} (ili upišite {{cmd:ACCESS}} i odgovorite `On`). CadCraft izgovara svaku naredbu i rezultat preko vašeg čitača zaslona, opisuje crtež i što je blizu kursora, dopušta vam da pomičete kursor i odredite točke tipkovnicom te svira zvuk za svako hvatanje i ručku. Gdje vaš preglednik može prepoznati govor na računalu, naredbe se mogu izgovarati. Vidi [Crtanje bez vida](topic:draft-without-sight).

**U svim aplikacijama**

- **Jezici.** 54 jezika; deset je novo (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili, uzbečki). Jezici osim engleskog su strojne radne verzije dok ih izvorni govornik ne pregleda.
- **Ulazni uređaji.** Upravljanje trackpadom, olovkom, 3D mišem, igraćim kontrolerom i MIDI-jem.
- **Retci alatne trake i mreža svojstava.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Retci alatne trake}} nudi prelamanje, 2 retka ili 1 redak u drugim aplikacijama. CadCraft ima vlastitu postavku u {{ui:Postavke}} › {{ui:CadCraft}} (vidi [Retci alatne trake](topic:settings#toolbar-rows)). Zajednička mreža svojstava nalazi se u tri druge aplikacije, a ne u CadCraftu.
- **Problemi, Uporabno i dodaci.** Zajednička ploča Problemi upozorava u svim aplikacijama, prikaz {{ui:Uporabno}} pokazuje tko je gdje u CadCraft Studiju (vidi [Rad na jednom crtežu zajedno s Live TeamWork](topic:work-live)), te popis dodataka.
- **Povežite svoju AI.** Jedna veza iz CadCraft Studija sa svih osam aplikacija, s razinom samo za čitanje, prijedlog ili uređivanje po aplikaciji i dnevnikom što je pomoćnik radio običnim riječima. CadCraft nema vlastitu AI, a Pitajte u svakoj aplikaciji koristi AI koju povežete.

### Ispravljeno u 0.8.1

- **Svojstva su pokazivala 150 umjesto 12'-6"** u crtežima u stopama i palcima. Polja koja aplikacija čita sama ponovno zadržavaju svoj tekst.
- **DWG datoteke čiji je odjeljak klasa pročitan kao krivi tip** (GitHub cadcraft#5) sada se ispravno otvaraju.
- **Križić se više ne prikazuje iza skočnih prozora.**
- **Studio i pakirana izdanja mogu promijeniti jezik za vrijeme rada.** Prije su bili samo na engleskom. Nije još ispitano na svakoj platformi: javite nam ako se jezik ne mijenja.
- **Tableti u uspravnom položaju** daju slobodnu visinu mreže platnu, a način listova počinje na 760 px ili manje.
- **STRETCH s prozorom križanja i LIMITS** prijavljeni su u Studiju 0.8.0, a već su bili ispravni u web verziji 0.8; instalacijski program prijavitelja bio je stariji. Studio 0.8.1 ih sadrži.

### Još nije u ovoj verziji

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može upozoriti (odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}); na Macu desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. Verzije za trgovine su na čekanju, a verzija za iPad i iPhone nije ponovno izrađena za 0.8.1.
- **Skice olovkom i fotografije skica** isprobane su samo na izmišljenim fotografijama i mišu, još ne s pravom olovkom, zaslonom osjetljivim na dodir ili rukom nacrtanom skicom na papiru.
- **Crtanje bez vida** je testirano automatskim provjerama, još ne čitačem zaslona ili slijepim testerom.
- **Dijeljenje detalja** nije imalo provjeru s dvije osobe, a mapa Team Cloud Plan kao mapa Dokumenti nije izrađena.
- **Spajanje** radi za DWG i DXF datoteke CadCrafta; za datoteke drugih aplikacija nije izrađeno.
- **Poništavanje preko prozora:** CadCraft javlja svaki završen korak, ali Studio još nema jedno {{ui:Poništi}} za sve aplikacije; svaka aplikacija poništava svoje korake.
- **OLE objekti DWG-a** se čuvaju, ali se ne crtaju na mjestu.
- **Čitanje tablica stilova plota (CTB datoteke)** iz drugih programa izrađeno je, ali nije provjereno s datotekom iz drugog programa.
- **Povežite svoju AI:** jednoklik povezivanje u Studiju, hostirani konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovom izdanju.

Za prethodnu verziju vidi [Što je novo u 0.7](topic:whats-new-0-7).
