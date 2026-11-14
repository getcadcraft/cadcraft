---
title: Što je novo u 0.8 i 0.8.1
summary: Obris koji dovršava vaš crtež, skice olovkom i fotografije skica pretvorene u geometriju, listovi koji se sami slažu, detalji ponuđeni dok crtate, GRIDMOVE i AUTODIM, oznake, datoteke pogodne za spajanje, redline zapisi pretvoreni u revizije, crtanje bez vida, ograničenja crteža, smjerni kutovi, SHX fontovi, dijagrami iz teksta i ispravci u 0.8.1.
keywords: što je novo, novosti, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove značajke, automatsko dovršavanje, obris, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, git, fossil, pristup, crtanje bez vida, čitač zaslona, ograničenja, smjerni kutovi, aunits, shx, dijagram, ole, povijest, usporedi, riječima, svojstva, stope i palci, rastezanje, jezici, ulazni uređaji, problemi, live, pomoćnici
from: 9dd82db5
---

Ovo je što se promijenilo u CadCraftu 0.8 i 0.8.1 u odnosu na 0.7. Verzija 0.8 (1. studenoga 2026.) donosi pomoćne alate za crtanje koji rade iz vašeg vlastitog crteža, prema pravilima na vašem računalu i bez modela, a 0.8.1 (2. studenoga 2026.) ispravlja pogreške prijavljene nakon nje.

## Novo

### Crtež koji dovršava vašu misao

- **Obris pokazuje što slijedi.** Kad nijedna naredba nije pokrenuta, sivi isprekidani obris pokazuje što po obrascima vašeg crteža slijedi: sljedeći stup na istom razmaku, sljedeći korak stubišta, nedostajući zid sobe. Pritisnite {{key:Tab}} da ga nacrtate kao jedan korak poništavanja ili {{key:Esc}} da ga odbacite. Gleda samo najnovije objekte, pa ostaje gladak i na velikom crtežu. Isključite ga u {{ui:Postavke}} › {{ui:CadCraft}} ili naredbom {{cmd:AUTOCOMPLETE}} `Off`.
- **Sljedeća točka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} obris je sljedeća točka: sljedeći korak stubišta, četvrti kut pravokutnika ili točka koja ga zatvara. Približite kursor i pritisnite {{key:Tab}}, kao da ste kliknuli tamo.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtajte grube poteze olovkom, mišem ili prstom i svaki postaje čista linija, kružnica, luk, pravokutnik ili polilinija, uhvaćena za ono što je već nacrtano. Pogledajte [Skicirajte olovkom i dobijte preciznu geometriju](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) pronalazi papir na fotografiji, ispravlja perspektivu, primjenjuje veličinu papira i mjerilo koje zadate te prenosi linije olovke na sloj za svaku boju olovke. Natpisi se ne prenose.
- **Kotirajte prema pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota uz stranice koje odaberete, ukupnu veličinu, širine otvora, promjere rupa i, s `Grid`, razmak mreže. Nikad ne ponavlja kotu koja već postoji.
- **Pomaknite liniju mreže i skup slijedi.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji završavaju na liniji mreže rastežu se s njom, zidovi uz nju, stupovi, njezin krug i oznaka se pomiču, a kote na njoj mjere novi razmak. Jedan korak poništavanja.

### Listovi, detalji i oznake

- **Listovi koji se sami slažu.** {{cmd:AUTOSHEET}} uzima vaše imenovane poglede (ili zasebne dijelove modela), odabire veličinu papira i standardno mjerilo te postavlja poglede na nove listove sa zaglavljem i natpisom imena i mjerila. Sve ostaje moguće uređivati. Pogledajte [Složi listove za mene](topic:lay-out-sheets-for-me).
- **Detalji vaše tvrtke, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše vlastite blokove detalja. Kad se odabrano podudara s nekim prema riječima na njegovim slojevima, nazivima blokova i bilješkama, statusna traka to prikazuje; odaberite ga i postavite. {{cmd:DETAILS}} › Podijeli stavlja vaš popis u mapu Dokumenti i uvodi ono što je vaš tim dodao. Postavke isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definira oznaku (njezinu vrstu, vrijednosti koje može poprimiti, blokove na koje se primjenjuje), postavlja je na reference blokova koje odaberete i navodi ih kao tablicu koju možete spremiti kao CSV. Definicije se čuvaju u DWG-u. Pogledajte [Oznake](topic:tags).
- **Ograničenja crteža.** {{cmd:LIMITS}} postavlja pravokutnik za crtež: mreža ga ispunjava, a zumiranje (Sve) ga prikazuje. Ograničenja se prikazuju kao obris i spremaju se u DWG i DXF, zajedno s ograničenjima papira. Pogledajte [Postavite ograničenja crteža](topic:drawing-limits).

### Rad s drugim ljudima i drugim programima

- **Pretvorite markup u reviziju.** {{cmd:REDLINE}} čita paket koji zapisuje MarkupCraft i navodi svaku promjenu. Prihvatite ili odbijte svaku uz bilješku; prihvaćene dobivaju revizijski oblak i revizijski dnevnik u jednom koraku poništavanja, a vi spremate datoteku s odgovorima koja zatvara oznake u MarkupCraftu. Pogledajte [Pretvorite markup u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Uz {{ui:Datoteke pogodne za spajanje}} uključene u {{ui:Postavke}} › {{ui:CadCraft}}, svaki objekt dobiva ključ koji se nikad ne mijenja (datoteke su oko 10 posto veće). `cadcraft merge base ours theirs` zatim spaja izmjene dviju osoba na jednom DWG-u ili DXF-u objekt po objekt i prijavljuje samo mjesta gdje su dvije osobe promijenile istu stvar. Pogledajte [Spojite izmjene dviju osoba na jednom crtežu](topic:merge-drawings).
- **Što se promijenilo, riječima.** U Povijesti, Usporedi daje jednostavan popis: gdje su se stvari promijenile, koliko su velika ta mjesta, što je dodano, uklonjeno ili promijenjeno te tekst koji je uređen. Pogledajte [Recite riječima što se promijenilo](topic:changes-in-words).
- **Smjerni kutovi i kutovi.** Upišite smjer kao geodetski smjerni kut, poput N45°23'30"E, ili u stupnjevima, minutama i sekundama, bilo gdje se traži kut; AUNITS određuje kako se kutovi prikazuju. Pogledajte [Upišite i prikažite smjerne kutove](topic:bearings-and-angles).
- **Vaši vlastiti SHX fontovi.** Dajte CadCraftu mapu sa SHX fontovima, a stilovi teksta koji ih navode crtaju se njima, na zaslonu i u ispisima. Pogledajte [Crtajte tekst vlastitim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili popis od-do i crta blokove i spojnice koje možete uređivati. Pogledajte [Nacrtajte dijagram iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG-u.** {{cmd:OLELIST}} navodi OLE objekte koje DWG nosi, a CadCraft ih sam ne može postaviti, i postavlja kopiju slike gdje kažete. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši proračuni ostaju uz crtež.** Tablice proračuna i obrazloženja dizajna čuvaju se u DWG-u uz tablicu klasa.

### Crtanje bez vida

- Uključite {{ui:Crtanje bez vida}} u {{ui:Postavke}} (ili upišite {{cmd:ACCESS}} i odgovorite `On`). CadCraft čita svaku naredbu i rezultat preko vašeg čitača zaslona, opisuje crtež i što je blizu kursora, omogućuje pomicanje kursora i odabir točaka tipkovnicom te svira zvuk za svako hvatanje i ručku. Gdje vaš preglednik može prepoznati govor na vašem računalu, naredbe se mogu izgovarati. Pogledajte [Crtanje bez vida](topic:draft-without-sight).

### U svim aplikacijama

- **Jezici.** 54 jezika; deset ih je novo (litvanski, latvijski, bosanski, marathi, telugu, albanski, afrikaans, filipinski, svahili, uzbečki). Jezici osim engleskog su strojni prijevodi dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** Dodirna ploča, olovka, 3D miš, kontroler za igre i MIDI upravljanje.
- **Retci alatne trake i tablica svojstava.** {{ui:Postavke}} › {{ui:Općenito}} › {{ui:Retci alatne trake}} nudi Wrap, 2 retka ili 1 redak u ostalim aplikacijama. CadCraft ima vlastitu postavku u {{ui:Postavke}} › {{ui:CadCraft}} (pogledajte [Retci alatne trake](topic:settings#toolbar-rows)). Zajednička tablica svojstava nalazi se u tri druge aplikacije, a ne u CadCraftu.
- **Problemi, Live i dodaci.** Zajednički panel Problemi upozorava u svakoj aplikaciji, prikaz Live pokazuje tko je gdje u CadCraft Studiju (pogledajte [Radite zajedno na jednom crtežu](topic:work-live)) i popis dodataka.
- **Povežite svoju AI.** Jedna veza iz CadCraft Studija sa svih osam aplikacija, s razinom samo čitanje, predlaganje ili uređivanje za svaku aplikaciju i dnevnikom riječima o tome što je pomoćnik učinio. CadCraft nema vlastitu AI, a Pitaj u svakoj aplikaciji koristi AI koju povežete.

## Ispravljeno u 0.8.1

- **Svojstva su pokazivala 150 umjesto 12'-6"** u crtežima u stopama i palcima. Polja koja aplikacija sama čita ponovno zadržavaju tekst.
- **DWG datoteke čiji je odjeljak klasa bio pročitan kao pogrešan tip** (GitHub cadcraft#5) sada se ispravno otvaraju.
- **Križić više ne prikazuje iza skočnih prozora.**
- **Studio i spakirana izdanja mogu mijenjati jezik tijekom rada.** Prije su bila samo na engleskom. Još nije provjereno na svim platformama: javite nam ako se jezik ne mijenja.
- **Tableti u uspravnom položaju** daju višak visine mreže crtaćoj površini, a način listova počinje na 760 px ili manje.
- **STRETCH s prozorom križanja i LIMITS** prijavljeni su u Studiju 0.8.0, a u web verziji 0.8 već su bili ispravni; instalacijski paket prijavitelja bio je stariji. Studio 0.8.1 ih sadrži.

## Nije još u ovoj verziji

- **0.8 i 0.8.1 nisu digitalno potpisane.** Windows može upozoriti (odaberite {{ui:Više informacija}}, zatim {{ui:Ipak pokreni}}); na Macu desnom tipkom kliknite CadCraft Studio i odaberite {{ui:Otvori}}. Izrada verzija za trgovine je na čekanju, a verzija za iPad i iPhone za 0.8.1 još nije izrađena.
- **Skice olovkom i fotografije skica** isprobani su samo na izmišljenim fotografijama i mišem, još ne s pravom olovkom, zaslonom osjetljivim na dodir ili ručnom skicom na papiru.
- **Crtanje bez vida** provjereno je automatskim provjerama, još ne s čitačem zaslona ili slijepim ispitivačem.
- **Dijeljenje detalja** nije prošlo provjeru s dvije osobe, a mapa Team Cloud Plan kao mapa Dokumenti još nije izrađena.
- **Spajanje** radi za DWG i DXF datoteke CadCraft; za datoteke ostalih aplikacija još nije izrađeno.
- **Poništavanje preko prozora:** CadCraft prijavljuje svaki završeni korak, ali Studio još nema jedno Poništi za sve aplikacije; svaka aplikacija poništava vlastite korake.
- **OLE objekti DWG-a** se čuvaju, ali se ne crtaju na mjestu.
- **Čitanje tablica stilova plotanja** (CTB datoteke) iz drugih programa je izrađeno, ali nije provjereno na datoteci iz drugog programa.
- **Povežite svoju AI:** povezivanje jednim klikom u Studiju, poslužiteljski konektor za AI u pregledniku, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovom izdanju.

Za prethodnu verziju pogledajte [Što je novo u 0.7](topic:whats-new-0-7).
