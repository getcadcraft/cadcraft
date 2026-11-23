---
title: Što je novo u 0.9 (ranije)
summary: Šrafure koje prate svoju granicu, skupine slojeva, slagane etaže, 2D pametni zidovi s vratima i prozorima, stilovi teksta i uređivač oblikovanog teksta, plutajući naredbeni redak, hvatanje na mrežu, deset načina crtanja luka te ploča Dokumenti.
keywords: što je novo 0.9, ranije izdanje, što je novo, 0.9, bilješke o izdanju, dnevnik promjena, šrafura, pridružena šrafura, hatchedit, datoteka pat, datoteka uzorka, skupine slojeva, laygroup, etaže, slagane etaže, floorlayers, pametni zidovi, zid, vrata, prozor, alati za zidove, stil teksta, stil, mtext, uređivač odlomka, oblikovanje, plutajući naredbeni redak, naredbeni redak, gornje područje, kompaktno, hvatanje na mrežu, grid snap, f9, luk, ploča dokumenata, check out, britanske dimenzije čelika, draw.io, tajlandski tekst, dxf r12, što je novo, dnevnik, 0.8, 0.8.1, verzija, nove značajke, automatsko dovršavanje, duh, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, spajanje, git, fossil, access, crtanje bez vida, čitač zaslona, granice, bearings, aunits, shx, dijagram, ole, povijest, usporedba, riječima, svojstva, stope i inči, rastezanje, jezici, ulazni uređaji, problemi, uživo, pomoćnici
from: 3451e64c
---

Ovo je što se promijenilo u CadCraftu 0.9 u odnosu na 0.8.1. CadCraft je aplikacija za 2D i 3D crtanje u CadCraft Studiju 0.9 i njegovim osam aplikacija. 0.9 dovršava izradu nacrta, dodaje stilove teksta i pravi uređivač teksta te daje više prostora na zaslonu.

## Novo

### Izrada nacrta

- **Šrafure koje prate svoju granicu.** {{cmd:HATCH}} se povezuje s onim što je omeđuje. Pomaknete, okrenete ili skalirate granicu i šrafura s uzorkom slijedi; preoblikujete je i šrafura se ponovno izračunava. {{cmd:HATCHEDIT}} (`HE`) naknadno mijenja šrafuru i izrađuje ili prekida vezu. Pogledajte [Šrafura i ispuna površina](topic:hatch).
- **Datoteke uzoraka šrafure.** Na pitanje {{cmd:HATCH}} `Pick internal point` upišite `F` (datoteka uzorka) i odaberite datoteku `.pat`. Isprobane su samo datoteke zapisane u uobičajenom formatu.
- **Skupine slojeva.** U {{ui:Alati}} na ploči {{ui:Slojevi}}: {{ui:Nova skupina}}, {{ui:Dodaj gotove skupine}}, {{ui:Grupiraj po nazivu}} i {{ui:Pronađi sloj}}; ili upišite {{cmd:LAYGROUP}} (`LG`). Pogledajte [Organiziranje crteža slojevima](topic:layers#group-layers).
- **Slagane etaže.** {{cmd:FLOORS}} (`FLR`), ili {{ui:Etaže…}} u izborniku {{ui:Više}} u skupini {{ui:Pogled}}. Prikaz na listu može prikazati jednu etažu pod {{ui:Prikazana etaža}} u Svojstvima. {{cmd:FLOORLAYERS}} pretvara etaže u slojeve za datoteku koja ide nekome drugom. Pogledajte [Slaganje etaža u jednom crtežu](topic:floors).
- **2D pametni zidovi, vrata i prozori.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Kutovi, T spojevi i križanja izračunavaju se za vas. Zidovi čuvaju zapis o svojim spojevima, a Svojstva dobivaju Ne dopusti spajanje na početku / na kraju, Liniju položaja i uredivu Duljinu. Pogledajte [Crtanje 2D zidova, vrata i prozora](topic:walls-2d).
- **Alat za zidove na zidovima nacrta.** Upišite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i ostale. Još nemaju gumbe na alatnoj traci. Pogledajte [Oblici zidova, rezovi, pomaci i zaključavanja za 2D zidove](topic:wall-tools-2d).

### Tekst

- **Stilovi teksta.** {{cmd:STYLE}} (`ST`), ili {{ui:Stil teksta}} na alatnoj traci {{ui:Crtanje}}: imenovani stilovi s fontom, visinom, faktorom širine i nagibom. Pogledajte [Postavljanje fonta i veličine teksta stilovima teksta](topic:text-styles).
- **Uređivač oblikovanog odlomka.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ili dvostruki klik na tekst otvara okvir s fontom, veličinom, podebljanjem, kurzivom, podcrtavanjem, precrtavanjem, bojom, poravnanjem te znakovima za stupanj, plus-minus i promjer, plus {{ui:U redu}} i {{ui:Odustani}}. Pogledajte [Oblikovanje odlomka teksta](topic:format-paragraph-text).
- **Dijagram iz draw.io XML-a.** {{cmd:DIAGRAM}} (`T2D`) čita i zalijepljeni XML draw.io. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **Tajlandski tekst u PDF ispisu.** Prije se ispisivao kao upitnici.

### Više prostora i pomagala za crtanje

- **Plutajući, tanji naredbeni redak i kompaktno gornje područje.** Povucite ručku naredbenog retka da pluta, povucite njegov gornji rub za manje redaka, {{key:F2}} otvara povijest. {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Naredbeni redak}} i izbori gornjeg područja imaju iste postavke. Pogledajte [Postavke](topic:settings#command-line).
- **Izbornik hvatanja objekata.** Desni klik na {{ui:Hvatanje}} u statusnoj traci ili upišite {{cmd:OSNAP}}.
- **Hvatanje na mrežu.** Gumb {{ui:Hvatanje na mrežu}} u statusnoj traci ili {{key:F9}}: odabrane točke idu na najbližu točku mreže kad hvatanje objekata nije uhvatilo točku.
- **Luk na deset načina i Nastavi.** {{ui:Luk}} na alatnoj traci {{ui:Crtanje}} ili {{cmd:ARC}}: 3 točke, obitelj Početak/Središte/Kraj i obitelj Središte/Početak/Kraj, te Nastavi (pritisnite {{key:Enter}} na početnoj točki) od zadnje linije, luka ili polilinije.
- **Ploča Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ili {{ui:Dokumenti…}} u izborniku {{ui:Više}} u skupini {{ui:Pogled}}: revizija, stanje i preuzimanje za svaki crtež u mapi projekta. Otvara se kao središnji dijaloški okvir. Pogledajte [Dokumenti](topic:documents).

### Datoteke

- **Britanske dimenzije čelika.** 976 presjeka na ploči Standardno, upisuju se kao na crtežima (na primjer `305x165x40 UB`).
- **Južnoafrički paketi** (praksa crtanja i građevinski propisi) kao paketi dodatka Građevinski propisi. Brojevi nisu provjereni.
- **Dodaci za CadCraft,** dodaju se po potrebi i isključeni su prema zadanim postavkama: projektiranje unutarnje rasvjete, dizajn čipa (HDL u raspored), glodanje na glodalici, simulacija strujnih krugova, zupčanici valjkastih lanaca i državni paketi građevinskih propisa.

## Ispravljeno

- Pomicanje, okretanje ili skaliranje šrafure ostavljalo je uzorak iza.
- {{cmd:GRIDMOVE}} je pomicao cijeli zid nacrta koji tek počinje na liniji mreže. Zid se sada procjenjuje po krajevima.
- Mreža se prikazivala samo unutar granica crteža čak i kad su granice isključene.
- Popis blokova u bočnoj ploči pomiče se, a naziv koji nije blok navodi blokove koji počinju tako („Did you mean“).
- Datoteke DXF R12 koje je AutoCAD odbijao („Unknown group 1001 for table“) sada se tamo otvaraju.
- Vrlo velike datoteke (oko 70.000 objekata i više) nisu se otvarale s porukom „Maximum call stack size exceeded“.
- Datoteke DWG iz AutoCADa 2018 i kasnijih s visokom verzijom održavanja nisu se otvarale s porukom „bad BITLONG code 11“.
- U okviru odlomka teksta nova veličina upisana za odabrani dio zadržava odabir.

## U svakoj aplikaciji

Bootstrap opisi uz svaki upravljački element s pomoći, početni savjet koji možete zatvoriti, trake kartica koje se pomiču kad ne stanu, i naslov kartice preglednika koji prati otvoreni crtež (`<drawing> - CadCraft | CadCraft`). {{ui:Postavke}} › {{ui:Raspored}} sada je padajući izbornik s izborima od dva retka. Popis jezika u {{ui:Postavke}} duži je nego u 0.8. Zajedničko uređivanje uživo, zbirke knjižnice te jedinice težine i temperature opisani su u bilješkama Studija.

## Iskrena ograničenja

- Tekst odlomka nema popise s oznakama ili brojevima, ravnalo tabulatora ni poravnanje u obostranom. Ispisani PDF-ovi postavljaju tekst u Helvetici.
- Zidovi nacrta su ravni, pa se luk crta kao kratki zidovi. Provjera alata za zidove od strane zajednice još je u tijeku.
- Skupine slojeva nisu zapisane u vlastitom formatu AutoCADa, pa AutoCAD prikazuje običan popis. Drugi programi prikazuju sve etaže zajedno osim ako ne pokrenete {{cmd:FLOORLAYERS}}.
- Ploču Dokumenti nisu isprobala dva čovjeka na pravoj mapi za dijeljenje. Glodanje na glodalici nije pokrenuto ni na jednom pravom stroju. Procjena rasvjete provjerena je prema praćenju fotona, a ne drugim programom. Inženjerski dodaci su pomoćna sredstva za provjeru, a ne zamjena za pregled inženjera.
- Jezici osim engleskog su strojni nacrti, a neke nove riječi su samo na engleskom.

## Ranije: 0.8 i 0.8.1

Ovo je što se promijenilo u CadCraftu 0.8 i 0.8.1 u odnosu na 0.7. 0.8 (1. studenoga 2026.) dodaje pomoćna sredstva za crtanje koja rade iz vašeg crteža, po pravilima na vašem računalu i bez modela, a 0.8.1 (2. studenoga 2026.) ispravlja greške prijavljene nakon njega.

### Novo

**Crtež koji dovršava vašu misao**

- **Duh pokazuje što slijedi.** Kad nijedna naredba ne radi, sivi isprekidani duh pokazuje što uzorci vašeg crteža kažu da slijedi: sljedeći stup na istom razmaku, sljedeći korak stubišta, nedostajući zid sobe. Pritisnite {{key:Tab}} da ga nacrtate kao jedan korak poništavanja, ili {{key:Esc}} da ga odbacite. Gleda samo najnovije objekte, pa ostaje gladak na velikom crtežu. Isključite ga u {{ui:Postavke}} › {{ui:CadCraft}} ili s {{cmd:AUTOCOMPLETE}} `Off`.
- **Sljedeća točka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je sljedeća točka: sljedeći korak stubišta, četvrti kut pravokutnika ili točka koja ga zatvara. Dovedite kursor blizu nje i pritisnite {{key:Tab}}, kao da ste tamo kliknuli.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtajte grube poteze olovkom, mišem ili prstom i svaki postaje čista linija, kružnica, luk, pravokutnik ili polilinija, poravnata s onim što je već nacrtano. Pogledajte [Skiciranje olovkom i dobivanje preciznih oblika](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) pronalazi papir na fotografiji, ispravlja perspektivu, primjenjuje veličinu papira i mjerilo koje zadate i prenosi linije olovke na sloj za svaku boju olovke. Natpisi se ne prenose.
- **Dimenzioniranje po pravilima.** {{cmd:AUTODIM}} (`ADIM`) izrađuje lance kota duž stranica koje odaberete, ukupnu veličinu, širine otvora, promjere rupa i, uz `Grid`, razmak linija mreže. Nikad ne ponavlja kotu koja već postoji.
- **Pomaknite liniju mreže i skup slijedi.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji završavaju na liniji mreže rasteže se s njom, zidovi duž nje, stupovi, njezin mjehurić i oznaka se pomiču, a kote na njoj mjere novi razmak. Jedan korak poništavanja.

**Listovi, detalji i oznake**

- **Listovi koji se sami slažu.** {{cmd:AUTOSHEET}} uzima vaše imenovane poglede (ili zasebne dijelove modela), bira veličinu papira i standardno mjerilo te postavlja poglede na nove listove sa zaglavljem i natpisom naziva i mjerila. Sve ostaje uređivo. Pogledajte [Neka slaganje listova napravim za mene](topic:lay-out-sheets-for-me).
- **Detalji vaše tvrtke, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše vlastite blokove detalja. Kad se odabrano podudara s jednim prema riječima na njegovim slojevima, nazivima blokova i bilješkama, statusna traka to kaže; odaberite ga i postavite. {{cmd:DETAILS}} › Share stavlja vaš popis u mapu Dokumenti i donosi ono što je vaš tim dodao. Postavke isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definira oznaku (njezinu vrstu, vrijednosti koje može poprimiti, blokove na koje se odnosi), postavlja je na odabrane reference blokova i navodi ih kao popis koji možete spremiti kao CSV. Definicije se čuvaju u DWG-u. Pogledajte [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravokutnik za crtež: mreža ga ispunjava, a zumiranje na Sve ga prikazuje. Granice se prikazuju kao obris i spremaju se u DWG i DXF, zajedno s granicama papira. Pogledajte [Postavljanje granica crteža](topic:drawing-limits).

**Rad s drugim ljudima i drugim programima**

- **Pretvorite označavanje u reviziju.** {{cmd:REDLINE}} čita paket koji zapisuje MarkupCraft i navodi svaku promjenu. Prihvatite ili odbacite svaku s bilješkom; prihvaćene dobivaju revizijski oblak i dnevnik revizija u jednom koraku poništavanja, a spremate datoteku odgovora koja zatvara označavanja u MarkupCraftu. Pogledajte [Pretvaranje označavanja u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Uz {{ui:Datoteke pogodne za spajanje}} uključeno u {{ui:Postavke}} › {{ui:CadCraft}}, svaki objekt dobiva ključ koji se nikad ne mijenja (datoteke su oko 10 posto veće). `cadcraft merge base ours theirs` zatim spaja uređivanja dviju osoba jednog DWG-a ili DXF-a objekt po objekt i javlja samo gdje su dvije osobe promijenile istu stvar. Pogledajte [Spajanje uređivanja dviju osoba jednog crteža](topic:merge-drawings).
- **Što se promijenilo, riječima.** U Povijesti, Usporedba daje običan popis: što se gdje promijenilo, koliko su velika mjesta, što je dodano, uklonjeno ili promijenjeno te tekst koji je uređen. Pogledajte [Riječima reći što se promijenilo](topic:changes-in-words).
- **Smjerni kutovi i kutovi.** Upišite smjer kao geodetski smjerni kut, poput N45°23'30"E, ili u stupnjevima, minutama i sekundama, bilo gdje gdje se traži kut; AUNITS postavlja kako se kutovi prikazuju. Pogledajte [Upisivanje i prikaz smjernih kutova](topic:bearings-and-angles).
- **Vlastiti SHX fontovi.** Dajte CadCraftu mapu SHX fontova i stilovi teksta koji ih imenuju crtaju se u njima, na zaslonu i u ispisima. Pogledajte [Crtanje teksta vlastitim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili popis od-do i crta blokove i spojnice koje možete uređivati. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG-u.** {{cmd:OLELIST}} navodi OLE objekte koje DWG nosi, a CadCraft ih ne može sam postaviti, i postavlja kopiju slike gdje kažete. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši proračuni ostaju uz crtež.** Listovi proračuna i razlozi dizajna čuvaju se u DWG-u uz tablicu klasa.

**Crtanje bez vida**

- Uključite {{ui:Crtanje bez vida}} u {{ui:Postavke}} (ili upišite {{cmd:ACCESS}} i odgovorite `On`). CadCraft izgovara svaku naredbu i rezultat putem čitača zaslona, opisuje crtež i što je blizu kursora, omogućuje pomicanje kursora i odabir točaka tipkovnicom, te svira zvuk za svako hvatanje i ručku. Tamo gdje preglednik može prepoznati govor na vašem računalu, naredbe se mogu izgovoriti. Pogledajte [Crtanje bez vida](topic:draft-without-sight).

**U svakoj aplikaciji**

- **Jezici.** 54 jezika; deset je novo (litavski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili, uzbečki). Jezici osim engleskog su strojni nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** Dodirna podloga, olovka, 3D miš, upravljač za igre i MIDI upravljanje.
- **Retci alatne trake i mreža svojstava.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Retci alatne trake}} nudi Prelomi, 2 retka ili 1 redak u ostalim aplikacijama. CadCraft ima vlastitu postavku u {{ui:Postavke}} › {{ui:CadCraft}} (vidi [Retci alatne trake](topic:settings#toolbar-rows)). Zajednička mreža svojstava nalazi se u tri druge aplikacije, a ne u CadCraftu.
- **Problemi, uživo i dodaci.** Zajednička ploča Problemi koja upozorava u svakoj aplikaciji, prikaz Uživo tko je gdje u CadCraft Studiju (vidi [Rad na jednom crtežu zajedno](topic:work-live)), i popis dodataka.
- **Povežite svoju umjetnu inteligenciju.** Jedna veza iz CadCraft Studija sa svih osam aplikacija, s razinom samo za čitanje, prijedloga ili uređivanja po aplikaciji i dnevnikom običnim riječima o tome što je pomoćnik radio. CadCraft nema vlastitu umjetnu inteligenciju, a Pitaj u svakoj aplikaciji rabi umjetnu inteligenciju koju povežete.

### Ispravljeno u 0.8.1

- **Svojstva su pokazivala 150 umjesto 12'-6"** u crtežima u stopama i inčima. Polja koja aplikacija sama čita ponovno zadržavaju svoj tekst.
- **Datoteke DWG čiji se odjeljak klasa čitao kao pogrešna vrsta** (GitHub cadcraft#5) sada se ispravno otvaraju.
- **Križić se više ne prikazuje iza skočnih prozora.**
- **Studio i zapakirana izdanja mogu mijenjati jezik za vrijeme rada.** Prije su bila samo na engleskom. Još nije isprobano na svakoj platformi: javite nam ako se jezik ne mijenja.
- **Tableti u uspravnom položaju** daju slobodnu visinu mreže platnu, a način listova počinje na 760 px ili manje.
- **STRETCH s prozorom križanja i LIMITS** prijavljeni su u Studiju 0.8.0 i već su bili ispravni u web izdanju 0.8; instalacijski program prijavitelja bio je stariji. Studio 0.8.1 ih sadrži.

### Još nije u ovom izdanju

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može upozoriti (odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}); na Macu desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. Izdanja za trgovine su na čekanju, a izdanje za iPad i iPhone nije ponovno izrađeno za 0.8.1.
- **Skice olovkom i fotografije skica** isprobane su samo na izmišljenim fotografijama i mišem, još ne sa pravom olovkom, zaslonom osjetljivim na dodir ili rukom nacrtanom skicom na papiru.
- **Crtanje bez vida** isprobano je automatskim provjerama, još ne čitačem zaslona ni slijepim ispitivačem.
- **Dijeljenje detalja** nije provjereno od strane dviju osoba, a mapa Team Cloud Plan kao mapa Dokumenti nije izrađena.
- **Spajanje** radi za CadCraftove datoteke DWG i DXF; isto za datoteke drugih aplikacija nije izrađeno.
- **Poništavanje kroz prozore:** CadCraft javlja svaki završeni korak, ali Studio još nema jedinstveno Poništi za sve aplikacije; svaka aplikacija poništava vlastite korake.
- **OLE objekti DWG-a** se čuvaju, ali se ne crtaju na mjestu.
- **Čitanje tablica stilova ispisa (datoteke CTB)** iz drugih programa je izrađeno, ali nije provjereno prema datoteci iz drugog programa.
- **Povežite svoju umjetnu inteligenciju:** povezivanje jednim klikom u Studiju, hostirani konektor za umjetnu inteligenciju u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovom izdanju.

Za izdanje prije ovoga pogledajte [Što je novo u 0.7](topic:whats-new-0-7).
