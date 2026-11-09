---
title: Šta je novo u 0.8 i 0.8.1
summary: Duh koji dovršava vaš crtež, skice olovkom i fotografije skica pretvorene u geometriju, listovi koji se sami slažu, detalji ponuđeni dok crtate, GRIDMOVE i AUTODIM, oznake, datoteke pogodne za spajanje, crveni markupi pretvoreni u revizije, crtanje bez vida, granice crteža, azimuti, SHX fontovi, dijagrami iz teksta i ispravke u 0.8.1.
keywords: šta je novo, what's new, bilješke o izdanju, dnevnik promjena, promjene, 0.8, 0.8.1, verzija, nove funkcije, automatsko dovršavanje, duh, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, git, fossil, pristup, crtanje bez vida, čitač ekrana, granice, azimuti, aunits, shx, dijagram, ole, historija, uporedi, riječima, svojstva, stope i inči, istegni, jezici, ulazni uređaji, problemi, uživo, asistenti
from: 9dd82db5
---

Ovo je ono što se promijenilo u CadCraft 0.8 i 0.8.1, u odnosu na 0.7. Verzija 0.8 (1. novembar 2026) dodaje pomoćna sredstva za crtanje koja rade na osnovu vašeg crteža, pravila na vašem računaru i bez modela, a verzija 0.8.1 (2. novembar 2026) ispravlja greške prijavljene nakon nje.

## Novo

### Crtež koji dovršava vašu misao

- **Duh pokazuje šta slijedi.** Kad nijedna naredba nije pokrenuta, sivi isprekidani duh pokazuje šta uzorci vašeg crteža kažu da slijedi: sljedeći stub na istom razmaku, sljedeći korak stepenica, nedostajući zid prostorije. Pritisnite {{key:Tab}} da ga nacrtate kao jedan korak poništavanja, ili {{key:Esc}} da ga odbacite. Gleda samo najnovije objekte, pa ostaje glatko i na velikom crtežu. Isključite ga u {{ui:Postavke}} › {{ui:CadCraft}} ili naredbom {{cmd:AUTOCOMPLETE}} `Isključi (O)`.
- **Sljedeća tačka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je sljedeća tačka: sljedeći korak stepenica, četvrti ugao pravougaonika ili tačka koja ga zatvara. Približite kursor i pritisnite {{key:Tab}}, kao da ste kliknuli tu.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtajte grube poteze olovkom, mišem ili prstom i svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, pripijena uz ono što je već nacrtano. Pogledajte [Skicirajte olovkom i dobijte preciznu geometriju](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) pronalazi papir na fotografiji, ispravlja perspektivu, primjenjuje veličinu papira i razmjeru koje zadate, i prenosi linije olovke na sloj za svaku boju olovke. Natpisi se ne prenose.
- **Dimenzioniranje po pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota duž stranica koje izaberete, ukupnu veličinu, širine otvora, prečnike rupa i, uz `Grid`, razmake mreže. Nikad ne ponavlja kotu koja već postoji.
- **Pomjerite liniju mreže i ostatak prati.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji završavaju na liniji mreže istežu se s njom, zidovi uz nju, stubovi, njen krug i oznaka se pomjeraju, a kote na njoj mjere novi razmak. Jedan korak poništavanja.

### Listovi, detalji i oznake

- **Listovi koji se sami slažu.** {{cmd:AUTOSHEET}} uzima vaše imenovane poglede (ili zasebne dijelove modela), bira veličinu papira i standardnu razmjeru, i postavlja poglede na nove listove s naslovnim blokom i natpisom s imenom i razmjerom. Sve ostaje izmjenjivo. Pogledajte [Slaganje listova umjesto mene](topic:lay-out-sheets-for-me).
- **Detalji vaše firme, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše blokove detalja. Kad se ono što izaberete poklapa s jednim po riječima na njegovim slojevima, nazivima blokova i bilješkama, statusna traka to kaže; izaberite ga i postavite. {{cmd:DETAILS}} › Podijeli stavlja vašu listu u fasciklu Dokumenti i donosi ono što je vaš tim dodao. Postavke isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definiše oznaku (njenu vrstu, vrijednosti koje može imati, blokove na koje se odnosi), postavlja je na reference blokova koje izaberete i ih ispisuje kao specifikaciju koju možete sačuvati kao CSV. Definicije se čuvaju u DWG datoteci. Pogledajte [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravougaonik za crtež: mreža ga popunjava, a zumiranje Sve ga prikazuje. Granice se prikazuju kao obris i čuvaju se u DWG i DXF datotekama, zajedno s granicama papira. Pogledajte [Postavite granice crteža](topic:drawing-limits).

### Rad s drugim ljudima i drugim programima

- **Pretvorite markup u reviziju.** {{cmd:REDLINE}} čita paket koji piše MarkupCraft i nabraja svaku promjenu. Prihvatite ili odbacite svaku uz bilješku; prihvaćene dobijaju oblak revizije i dnevnik revizija u jednom koraku poništavanja, a vi sačuvate datoteku odgovora koja zatvara markupe u MarkupCraft. Pogledajte [Pretvorite markup u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Uz {{ui:Datoteke pogodne za spajanje}} uključeno u {{ui:Postavke}} › {{ui:CadCraft}}, svaki objekat dobija ključ koji se nikad ne mijenja (datoteke su oko 10 posto veće). `cadcraft merge base ours theirs` zatim spaja izmjene dvoje ljudi na jednom DWG ili DXF crtežu objekat po objekat i prijavljuje samo mjesta na kojima su dvoje ljudi promijenili istu stvar. Pogledajte [Spojite izmjene dvoje ljudi na jednom crtežu](topic:merge-drawings).
- **Šta se promijenilo, riječima.** U {{ui:Historija}}, Uporedi daje običan spisak: gdje su stvari promijenjene, koliko su velika ta mjesta, šta je dodano, uklonjeno ili promijenjeno, i tekst koji je uređen. Pogledajte [Recite riječima šta se promijenilo](topic:changes-in-words).
- **Azimuti i uglovi.** Upišite smjer kao geodetski azimut, na primjer N45°23'30"E, ili u stepenima, minutama i sekundama, bilo gdje gdje se traži ugao; AUNITS određuje kako se uglovi prikazuju. Pogledajte [Unesite i prikažite azimute i uglove](topic:bearings-and-angles).
- **Vaši SHX fontovi.** Dajte CadCraft fasciklu SHX fontova i stilovi teksta koji ih imenuju crtaju se njima, na ekranu i u štampi. Pogledajte [Crtajte tekst vlastitim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do i crta blokove i konektore koje možete uređivati. Pogledajte [Nacrtajte dijagram iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG datoteci.** {{cmd:OLELIST}} nabraja OLE objekte koje DWG nosi, a CadCraft ih ne može sam postaviti, i postavlja kopiju slike gdje kažete. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši proračuni ostaju uz crtež.** Listovi proračuna i razlozi za projekat čuvaju se u DWG datoteci zajedno s tabelom klasa.

### Crtanje bez vida

- Uključite {{ui:Crtanje bez vida}} u {{ui:Postavke}} (ili upišite {{cmd:ACCESS}} i odgovorite `Uključi (O)`). CadCraft izgovara svaku naredbu i rezultat preko vašeg čitača ekrana, opisuje crtež i ono što je blizu kursora, omogućava vam da pomjerate kursor i birate tačke tastaturom, i pušta zvuk za svaki snap i grip. Tamo gdje vaš pregledač može prepoznati govor na vašem računaru, naredbe se mogu izgovarati. Pogledajte [Crtajte bez vida](topic:draft-without-sight).

### U svim aplikacijama

- **Jezici.** 54 jezika; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki). Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** Trackpad, olovka, 3D miš, kontroler za igre i MIDI kontrole.
- **Redovi alatne trake i tabela svojstava.** {{ui:Postavke}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi Prelom, 2 reda ili 1 red u ostalim aplikacijama. CadCraft ima svoju postavku u {{ui:Postavke}} › {{ui:CadCraft}} (pogledajte [Redovi alatne trake](topic:settings#toolbar-rows)). Zajednička tabela svojstava nalazi se u tri druge aplikacije, a ne u CadCraft.
- **Problemi, Uživo i dodaci.** Zajednički panel Problemi koji upozorava u svakoj aplikaciji, prikaz Uživo koji pokazuje ko je gdje u CadCraft Studiju (pogledajte [Radite zajedno na jednom crtežu](topic:work-live)), i popis dodataka.
- **Povežite svoj AI.** Jedna veza od CadCraft Studija do svih osam aplikacija, sa nivoom samo za čitanje, predlaganje ili uređivanje po aplikaciji, i dnevnikom običnim riječima o tome šta je asistent radio. CadCraft nema vlastiti AI, a Pitaj u svakoj aplikaciji koristi AI koji povežete.

## Ispravljeno u 0.8.1

- **Svojstva su prikazivala 150 umjesto 12'-6"** u crtežima u stopama i inčima. Polja koja aplikacija sama čita ponovo zadržavaju svoj tekst.
- **DWG datoteke čiji je dio klasa pročitan kao pogrešan tip** (GitHub cadcraft#5) sada se ispravno otvaraju.
- **Nišan se više ne prikazuje iza iskačućih prozora.**
- **Studio i zapakovana izdanja mogu promijeniti jezik u toku rada.** Ranije su bila samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne mijenja.
- **Tableti u uspravnom položaju** daju prostor mreže platnu, a režim listova počinje na 760 px ili manje.
- **STRETCH s ukrštenim prozorom i LIMITS** prijavljeni su na Studiju 0.8.0, a u web verziji 0.8 su već bili ispravni; instalater korisnika bio je stariji. Studio 0.8.1 ih sadrži.

## Još nije u ovoj verziji

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može upozoriti (izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}); na Mac-u kliknite desnim tasterom na CadCraft Studio i izaberite {{ui:Otvori}}. Verzije za prodavnice aplikacija su na čekanju, a verzija za iPad i iPhone nije ponovo izgrađena za 0.8.1.
- **Skice olovkom i fotografije skica** isprobane su samo na izmišljenim fotografijama i mišem, još ne sa pravom olovkom, ekranom osjetljivim na dodir ili ručnom skicom na papiru.
- **Crtanje bez vida** testirano je automatskim provjerama, još ne sa čitačem ekrana ili slijepim testerom.
- **Dijeljenje detalja** nije provjereno od dvije osobe, a fascikla Team Cloud Plan kao fascikla Dokumenti nije izgrađena.
- **Spajanje** radi za DWG i DXF datoteke CadCraft; za datoteke drugih aplikacija nije izgrađeno.
- **Poništavanje preko prozora:** CadCraft prijavljuje svaki završeni korak, ali Studio još nema jedinstveno Poništi za sve aplikacije; svaka aplikacija poništava svoje korake.
- **OLE objekti DWG datoteke** se čuvaju, ali se ne crtaju na mjestu.
- **Čitanje tabela stilova štampe (CTB datoteke)** iz drugih programa je izgrađeno, ali nije provjereno na datoteci iz drugog programa.
- **Povežite svoj AI:** povezivanje jednim klikom u Studiju, hostovani konektor za AI u pregledaču, vlastiti API ključ unutar Studija i objavljeni MCP paket nisu obećani u ovom izdanju.

Za verziju prije ove, pogledajte [Šta je novo u 0.7](topic:whats-new-0-7).
