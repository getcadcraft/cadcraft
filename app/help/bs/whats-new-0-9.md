---
title: Novo u verziji 0.9 (ranije)
summary: Šrafure koje prate svoju granicu, grupe slojeva, naslagani podovi, 2D pametni zidovi sa vratima i prozorima, stilovi teksta i uređivač formatiranog teksta, plutajuća komandna linija, hvatanje za mrežu, deset načina crtanja luka i panel Dokumenti.
keywords: novo u 0.9, ranija verzija, novo, 0.9, bilješke o izdanju, dnevnik promjena, šrafura, pridružena šrafura, hatchedit, datoteka uzorka, pat, pattern file, grupe slojeva, laygroup, podovi, naslagani podovi, floors, floorlayers, pametni zidovi, zid, vrata, prozor, alati za zidove, stil teksta, style, uređivač mtext, pasus, formatiranje, plutajuća komandna linija, komandna linija, gornje područje, kompaktno, hvatanje za mrežu, grid snap, f9, luk, dokumenti, britanski čelik, draw.io, tajlandski tekst, dxf r12, novo, promjene, 0.8, 0.8.1, verzija, nove funkcije, automatsko dovršavanje, duh, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, git, fossil, access, crtanje bez vida, čitač ekrana, granice, azimuti, aunits, shx, dijagram, ole, historija, poređenje, riječima, svojstva, stope i inči, rastezanje, jezici, ulazni uređaji, problemi, uživo, pomoćnici
from: 3451e64c
---

Ovo je šta se promijenilo u CadCraft-u 0.9, u odnosu na 0.8.1. CadCraft je aplikacija za 2D i 3D crtanje u CadCraft Studio 0.9 i njegovim osam aplikacija. Verzija 0.9 završava crtanje planova, dodaje stilove teksta i pravi uređivač teksta i daje više prostora na ekranu.

## Novo

### Crtanje planova

- **Šrafure koje prate svoju granicu.** {{cmd:HATCH}} se povezuje s onim što je ograničava. Pomjerite, okrenite ili skalirajte granicu i šrafura i njen uzorak slijede; preoblikujte je i šrafura se ponovo izračunava. {{cmd:HATCHEDIT}} (`HE`) kasnije mijenja šrafuru i pravi ili prekida vezu. Pogledajte [Šrafura i područja ispune](topic:hatch).
- **Datoteke uzoraka šrafure.** Na pitanje {{cmd:HATCH}} `Pick internal point` ukucajte `F` (Datoteka uzorka) i izaberite `.pat` datoteku. Isprobane su samo datoteke napisane u uobičajenom formatu.
- **Grupe slojeva.** U {{ui:Alati}} na panelu {{ui:Slojevi}}: {{ui:Nova grupa}}, {{ui:Dodaj gotove grupe}}, {{ui:Grupiši po nazivu}} i {{ui:Pronađi sloj}}; ili ukucajte {{cmd:LAYGROUP}} (`LG`). Pogledajte [Organizacija crteža pomoću slojeva](topic:layers#group-layers).
- **Naslagani podovi.** {{cmd:FLOORS}} (`FLR`), ili {{ui:Podovi…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}. Prikaz na listu može prikazati jedan pod pod {{ui:Prikazani pod}} u Svojstvima. {{cmd:FLOORLAYERS}} pretvara podove u slojeve za datoteku koja ide nekome drugom. Pogledajte [Naslagani podovi u jednom crtežu](topic:floors).
- **2D pametni zidovi, vrata i prozori.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Uglovi, T spojevi i ukrštanja se računaju za vas. Zidovi vode zapis o tome kako se spajaju, a Svojstva dobijaju {{ui:Zabrani spajanje na početku}} / {{ui:Zabrani spajanje na kraju}}, {{ui:Linija lokacije}} i izmjenjivu {{ui:Dužinu}}. Pogledajte [Crtanje 2D zidova, vrata i prozora](topic:walls-2d).
- **Alat za zid na zidovima u planu.** Ukucajte {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i ostale. Još nemaju dugmad na traci s alatima. Pogledajte [Oblici zidova, presjeci, odmaci i zaključavanja za 2D zidove](topic:wall-tools-2d).

### Tekst

- **Stilovi teksta.** {{cmd:STYLE}} (`ST`), ili {{ui:Stil teksta}} na traci {{ui:Crtanje}}: imenovani stilovi sa fontom, visinom, faktorom širine i nagibom. Pogledajte [Postavljanje fonta i veličine teksta stilovima teksta](topic:text-styles).
- **Uređivač formatiranog teksta pasusa.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ili dvostruki klik na tekst otvara okvir s fontom, veličinom, podebljanim, kurzivom, podvučenim, precrtanim, bojom, poravnanjem i znakovima stepena, plus-minus i prečnika, plus {{ui:U redu}} i {{ui:Otkaži}}. Pogledajte [Formatiranje teksta pasusa](topic:format-paragraph-text).
- **Dijagram iz draw.io XML-a.** {{cmd:DIAGRAM}} (`T2D`) takođe čita nalijepljeni draw.io XML. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **Tajlandski tekst u PDF štampi.** Ranije se štampao kao upitnici.

### Više prostora i pomagala za crtanje

- **Plutajuća, tanja komandna linija i kompaktno gornje područje.** Prevucite hvataljku komandne linije da je učinite plutajućom, prevucite njenu gornju ivicu za manje linija, {{key:F2}} otvara historiju. {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Komandna linija}} i izbori gornjeg područja imaju iste postavke. Pogledajte [Postavke](topic:settings#command-line).
- **Meni hvatanja objekata.** Desni klik na {{ui:Hvatanje}} u statusnoj traci, ili ukucajte {{cmd:OSNAP}}.
- **Hvatanje za mrežu.** Dugme {{ui:Hvatanje za mrežu}} u statusnoj traci, ili {{key:F9}}: odabrane tačke idu na najbližu tačku mreže kad hvatanje objekta nije uzelo tačku.
- **Luk na deset načina, i Nastavi.** {{ui:Luk}} na traci {{ui:Crtanje}} ili {{cmd:ARC}}: 3 tačke, porodica Početak/Centar/Kraj i porodica Centar/Početak/Kraj, i Nastavi ({{key:Enter}} na početnoj tački) od posljednje linije, luka ili polilinije.
- **Panel Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ili {{ui:Dokumenti…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}: revizija, stanje i preuzimanje za svaki crtež u fascikli projekta. Otvara se kao centriran dijalog. Pogledajte [Dokumenti](topic:documents).

### Datoteke

- **Britanske veličine čelika.** 976 presjeka u panelu {{ui:Standardni}}, ukucanih kao na crtežima (na primjer `305x165x40 UB`).
- **Južnoafrički paketi** (praksa crtanja i građevinski propisi) kao paketi dodatka Građevinski propisi. Brojevi nisu provjereni.
- **Dodaci za CadCraft,** dodaju se po potrebi i isključeni su po zadanom: dizajn unutrašnjeg osvjetljenja, dizajn čipova (HDL u raspored), glodanje, simulacija kola, zupčanici lančanika i paketi građevinskih propisa po zemljama.

## Ispravljeno

- Pomjeranje, okretanje ili skaliranje šrafure ostavljalo je uzorak iza.
- {{cmd:GRIDMOVE}} je nosio cijeli zid u planu koji samo počinje na liniji mreže. Zid se sada procjenjuje po krajevima.
- Mreža se prikazivala samo unutar granica crteža, čak i kad su granice isključene.
- Spisak blokova u bočnom panelu se pomjera, a naziv koji nije blok navodi blokove koji počinju tim nazivom („Da li ste mislili“).
- DXF R12 datoteke koje je AutoCAD odbijao („Unknown group 1001 for table“) sada se tu otvaraju.
- Vrlo velike datoteke (oko 70.000 entiteta i više) nisu se otvarale s porukom „Maximum call stack size exceeded“.
- DWG datoteke iz AutoCAD-a 2018 i kasnije s visokom verzijom održavanja nisu se otvarale s porukom „bad BITLONG code 11“.
- U okviru teksta pasusa, nova veličina ukucana za odabrani dio zadržava odabir.

## U svakoj aplikaciji

Opisi (Bootstrap tooltips) uz svaku kontrolu koja ima savjet, početni savjet koji možete zatvoriti, jezičci koji se pomjeraju kad ne staju, i naslov kartice pregledača koji prati otvoreni crtež (`<drawing> - CadCraft | CadCraft`). {{ui:Postavke}} › {{ui:Raspored}} je sada padajući spisak izbora od dva reda. Spisak jezika u {{ui:Postavke}} duži je nego u 0.8. Zajedničko uređivanje uživo, zbirke biblioteke i jedinice težine i temperature opisani su u bilješkama Studija.

## Iskreno o ograničenjima

- Tekst pasusa nema liste sa tačkama ni brojevima, lenjir s tabulatorima ni poravnanje po širini. Štampani PDF-ovi postavljaju tekst u Helvetica.
- Zidovi u planu su pravi, pa se luk crta kao kratki zidovi. Provjera alata za zid od strane zajednice je u toku.
- Grupe slojeva nisu zapisane u AutoCAD-ovom formatu, pa AutoCAD prikazuje ravan spisak. Drugi programi prikazuju sve podove zajedno, osim ako ne pokrenete {{cmd:FLOORLAYERS}}.
- Panel Dokumenti nisu isprobala dva čovjeka na pravom dijeljenom folderu. Rezanje glodalicom nije pokrenuto ni na jednom pravom računaru. Procjena osvjetljenja provjerena je pomoću praćenja fotona, a ne drugog programa. Inženjerski dodaci su pomoćna sredstva za provjeru, a ne zamjena za pregled inženjera.
- Jezici osim engleskog su mašinski nacrti, a neke nove riječi su samo na engleskom.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promijenilo u CadCraft-u 0.8 i 0.8.1, u odnosu na 0.7. Verzija 0.8 (1. novembra 2026) dodaje pomoćna sredstva za crtanje koja rade s vašim crtežom, po pravilima na vašem računaru i bez modela, a 0.8.1 (2. novembra 2026) ispravlja greške prijavljene poslije nje.

### Novo

**Crtež koji dovršava vašu misao**

- **Duh pokazuje šta dolazi poslije.** Kad nijedna naredba nije pokrenuta, sivi isprekidani duh pokazuje šta uzorci vašeg crteža kažu da dolazi: sljedeći stub na istom razmaku, sljedeći korak stepenica, zid koji nedostaje u sobi. Pritisnite {{key:Tab}} da ga nacrtate kao jedan korak poništavanja, ili {{key:Esc}} da ga odbacite. Gleda samo najnovije objekte, pa ostaje gladak na velikom crtežu. Isključite ga u {{ui:Postavke}} › {{ui:CadCraft}} ili sa {{cmd:AUTOCOMPLETE}} `Off`.
- **Sljedeća tačka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je sljedeća tačka: sljedeći korak stepenica, četvrti ugao pravougaonika ili tačka koja ga zatvara. Dovedite kursor blizu i pritisnite {{key:Tab}}, kao da ste kliknuli tamo.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: crtajte grube poteze olovkom, mišem ili prstom i svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, uhvaćena za ono što je već nacrtano. Pogledajte [Skiciranje olovkom i precizna geometrija](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) nalazi papir na fotografiji, ispravlja perspektivu, primjenjuje veličinu papira i razmjeru koje date, i ocrtava linije olovke na sloj za svaku boju olovke. Natpisi se ne ocrtavaju.
- **Kotiranje po pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota duž stranica koje izaberete, ukupnu veličinu, širine otvora, promjere rupa i, uz `Grid`, razmak mreže. Nikad ne ponavlja kotu koja je već tu.
- **Pomjerite liniju mreže i skup prati.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji se završavaju na liniji mreže rastežu se s njom, zidovi duž nje, stubovi, njen balon i oznaka se pomjeraju, a kote na njoj mjere novi razmak. Jedan korak poništavanja.

**Listovi, detalji i oznake**

- **Listovi koji se sami slažu.** {{cmd:AUTOSHEET}} uzima vaše imenovane poglede (ili zasebne dijelove modela), bira veličinu papira i standardnu razmjeru, i postavlja poglede na nove listove sa naslovnim blokom i natpisom naziv-i-razmjera. Sve ostaje uređivo. Pogledajte [Neka slaže listove za mene](topic:lay-out-sheets-for-me).
- **Detalji vaše firme, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše sopstvene blokove detalja. Kad se ono što odaberete poklapa s jednim po riječima na njegovim slojevima, nazivima blokova i napomenama, statusna traka to kaže; odaberite ga i postavite. {{cmd:DETAILS}} › Dijeli stavlja vaš spisak u fasciklu Dokumenti i donosi ono što je vaš tim dodao. Postavke isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definiše oznaku (njenu vrstu, vrijednosti koje može uzeti, blokove na koje se odnosi), postavlja je na reference blokova koje odaberete, i navodi ih kao raspored koji možete spasiti kao CSV. Definicije se čuvaju u DWG. Pogledajte [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravougaonik za crtež: mreža ga ispunjava, a zumiranje All ga prikazuje. Granice se prikazuju kao obris i čuvaju se u DWG i DXF, zajedno s granicama papira. Pogledajte [Postavljanje granica crteža](topic:drawing-limits).

**Rad s drugim ljudima i drugim programima**

- **Pretvorite označavanje u reviziju.** {{cmd:REDLINE}} čita paket koji zapisuje MarkupCraft i navodi svaku promjenu. Prihvatite ili odbijte svaku s napomenom; prihvaćene dobijaju revizijski oblak i revizijski dnevnik u jednom koraku poništavanja, a vi spašavate datoteku odgovora koja zatvara označavanja u MarkupCraft-u. Pogledajte [Pretvaranje označavanja u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Uz {{ui:Datoteke pogodne za spajanje}} uključene u {{ui:Postavke}} › {{ui:CadCraft}}, svaki objekat dobija ključ koji se nikad ne mijenja (datoteke su oko 10 posto veće). `cadcraft merge base ours theirs` zatim spaja dvije izmjene jednog DWG ili DXF objekta po objekat i javlja samo gdje su dvije osobe promijenile istu stvar. Pogledajte [Spajanje izmjena dvije osobe na jednom crtežu](topic:merge-drawings).
- **Šta je promijenjeno, riječima.** U {{ui:Historija}}, {{ui:Uporedi}} daje običan spisak: gdje se stvari promijenile, kolike su promijenjene površine, šta je dodato, uklonjeno ili promijenjeno, i tekst koji je uređen. Pogledajte [Riječima reći šta se promijenilo](topic:changes-in-words).
- **Azimuti i uglovi.** Ukucajte pravac kao geodetski azimut, kao N45°23'30"E, ili u stepenima, minutama i sekundama, bilo gdje gdje se traži ugao; {{cmd:AUNITS}} postavlja kako se uglovi prikazuju. Pogledajte [Ukucavanje i prikaz azimuta i uglova](topic:bearings-and-angles).
- **Vaši vlastiti SHX fontovi.** Dajte CadCraft-u fasciklu SHX fontova i stilovi teksta koji ih imenuju crtaju se u njima, na ekranu i u štampi. Pogledajte [Crtanje teksta vlastitim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do i crta blokove i spojnice koje možete uređivati. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG.** {{cmd:OLELIST}} navodi OLE objekte koje DWG nosi a koje CadCraft ne može sam postaviti, i postavlja kopiju slike gdje kažete. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši proračuni ostaju uz crtež.** Listovi proračuna i razlozi dizajna čuvaju se u DWG uz tabelu klasa.

**Crtanje bez vida**

- Uključite {{ui:Crtanje bez vida}} u {{ui:Postavke}} (ili ukucajte {{cmd:ACCESS}} i odgovorite `On`). CadCraft izgovara svaku naredbu i rezultat preko vašeg čitača ekrana, opisuje crtež i ono što je blizu kursora, dozvoljava vam da pomjerate kursor i birate tačke tastaturom, i pušta zvuk za svako hvatanje i hvataljku. Tamo gdje vaš pregledač može prepoznati govor na vašem računaru, naredbe se mogu izgovarati. Pogledajte [Crtanje bez vida](topic:draft-without-sight).

**U svakoj aplikaciji**

- **Jezici.** 54 jezika; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki). Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** Trackpad, olovka, 3D miš, kontroler za igre i MIDI kontrole.
- **Redovi trake s alatima i mreža svojstava.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi trake s alatima}} nudi Prelomi, 2 reda ili 1 red u drugim aplikacijama. CadCraft zadržava vlastitu postavku u {{ui:Postavke}} › {{ui:CadCraft}} (vidi [Redovi trake s alatima](topic:settings#toolbar-rows)). Zajednička mreža svojstava je u tri druge aplikacije, ne u CadCraft-u.
- **Problemi, Uživo i dodaci.** Zajednički panel Problemi koji upozorava u svakoj aplikaciji, prikaz Uživo o tome ko je gdje u CadCraft Studio (vidi [Rad na jednom crtežu zajedno](topic:work-live)), i spisak dodataka.
- **Povežite svoj AI.** Jedna veza iz CadCraft Studio sa svih osam aplikacija, sa nivoom samo za čitanje, predlaganje ili uređivanje po aplikaciji i dnevnikom običnim riječima o tome šta je pomoćnik uradio. CadCraft nema sopstveni AI, a Pitaj u svakoj aplikaciji koristi AI koji povežete.

### Ispravljeno u 0.8.1

- **Svojstva su prikazivala 150 umjesto 12'-6"** u crtežima u stopama i inčima. Polja koja aplikacija sama čita ponovo zadržavaju svoj tekst.
- **DWG datoteke čiji je odjeljak klasa bio pročitan kao pogrešna vrsta** (GitHub cadcraft#5) sada se ispravno otvaraju.
- **Nišan se više ne prikazuje iza iskačućih prozora.**
- **Studio i spakovana izdanja mogu mijenjati jezik za vrijeme rada.** Ranije su bila samo na engleskom. Još nije isprobano na svakoj platformi: javite nam ako se jezik ne promijeni.
- **Tableti u uspravnom položaju** daju slobodnu visinu mreže platnu, a režim listova počinje na 760 px ili manje.
- **STRETCH s prozorom ukrštanja i LIMITS** prijavljeni su u Studio 0.8.0 i već su bili ispravni u 0.8 web verziji; instalater prijavljivača bio je stariji. Studio 0.8.1 ih nosi.

### Još nije u ovoj verziji

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može upozoriti (izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}); na Mac-u desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. Verzije za prodavnice su na čekanju, a verzija za iPad i iPhone nije ponovo napravljena za 0.8.1.
- **Skice olovkom i fotografije skica** isprobane su samo na izmišljenim fotografijama i mišem, još ne s pravom olovkom, ekranom osjetljivim na dodir ili skicom na papiru.
- **Crtanje bez vida** testirano je automatskim provjerama, još ne s čitačem ekrana ili slijepim testerom.
- **Dijeljenje detalja** nije provjereno od dvije osobe, a fascikla Team Cloud Plan kao fascikla Dokumenti nije napravljena.
- **Spajanje** radi za DWG i DXF datoteke CadCraft-a; isto za datoteke drugih aplikacija nije napravljeno.
- **Poništavanje preko prozora:** CadCraft javlja svaki završeni korak, ali Studio još nema jedno Poništi za sve aplikacije; svaka aplikacija poništava svoje korake.
- **OLE objekti DWG-a** se čuvaju, ali se ne crtaju na mjestu.
- **Čitanje tabela stilova štampe (CTB datoteke)** iz drugih programa je napravljeno, ali nije provjereno na datoteci iz drugog programa.
- **Povežite svoj AI:** povezivanje jednim klikom u Studiju, hostovani konektor za AI u pregledaču, vlastiti API ključ u Studiju i objavljeni MCP paket nisu obećani u ovom izdanju.

Za verziju prije ove, pogledajte [Novo u verziji 0.7](topic:whats-new-0-7).
