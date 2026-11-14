---
title: Šta je novo u 0.8 i 0.8.1
summary: Duh koji završava vaš crtež, skice olovkom i fotografije skica pretvorene u geometriju, listovi koji se sami raspoređuju, detalji ponuđeni dok crtate, GRIDMOVE i AUTODIM, oznake, datoteke pogodne za spajanje, označavanja pretvorena u revizije, crtanje bez vida, granice crteža, azimuti, SHX fontovi, dijagrami iz teksta i ispravke u 0.8.1.
keywords: šta je novo, napomene o izdanju, dnevnik promena, promene, 0.8, 0.8.1, verzija, nove funkcije, automatsko dovršavanje, autocomplete, duh, ghost, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, merge, git, fossil, pristup, crtanje bez vida, čitač ekrana, granice, azimuti, aunits, shx, dijagram, ole, istorija, poređenje, rečima, svojstva, stope i inči, istezanje, jezici, ulazni uređaji, problemi, uživo, asistenti
from: 9dd82db5
---

Ovo je šta se promenilo u CadCraft 0.8 i 0.8.1, u odnosu na 0.7. Verzija 0.8 (1. novembar 2026) dodaje pomoćna sredstva za crtanje koja rade sa vašim sopstvenim crtežom, po pravilima na vašem računaru i bez modela, a 0.8.1 (2. novembar 2026) ispravlja greške prijavljene posle nje.

## Novo

### Crtež koji završava vašu misao

- **Duh pokazuje šta sledi.** Bez pokrenute komande, sivi isprekidani duh pokazuje šta uzorci vašeg crteža kažu da sledi: sledeći stub na istom razmaku, sledeći stepenik stepeništa, nedostajući zid prostorije. Pritisnite {{key:Tab}} da ga nacrtate kao jedan korak opozivanja, ili {{key:Esc}} da ga odbacite. Gleda samo najnovije objekte, pa ostaje glatko na velikom crtežu. Isključite ga u {{ui:Podešavanja}} › {{ui:CadCraft}} ili sa {{cmd:AUTOCOMPLETE}} `Off`.
- **Sledeća tačka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je sledeća tačka: sledeći stepenik stepeništa, četvrti ugao pravougaonika ili tačka koja ga zatvara. Približite kursor i pritisnite {{key:Tab}}, kao da ste tu kliknuli.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtajte grube poteze olovkom, mišem ili prstom i svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, uhvaćena za ono što je već nacrtano. Pogledajte [Skicirajte olovkom i dobijte preciznu geometriju](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) pronalazi papir na fotografiji, ispravlja perspektivu, primenjuje format papira i razmeru koje zadate i prenosi linije olovke na sloj za svaku boju olovke. Natpisi se ne prenose.
- **Kotirajte po pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota duž strana koje izaberete, ukupnu meru, širine otvora, prečnike rupa i, uz `Grid`, razmak mreže. Nikad ne ponavlja kotu koja već postoji.
- **Pomerite liniju mreže i skup prati.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji se završavaju na liniji mreže rastežu se s njom, zidovi uz nju, stubovi, njen krug i oznaka se pomeraju, a kote na njoj mere novi razmak. Jedan korak opozivanja.

### Listovi, detalji i oznake

- **Listovi koji se sami raspoređuju.** {{cmd:AUTOSHEET}} uzima vaše imenovane poglede (ili zasebne delove modela), bira format papira i standardnu razmeru i stavlja poglede na nove listove sa naslovnim blokom i natpisom s imenom i razmerom. Sve ostaje izmenljivo. Pogledajte [Rasporedi listove umesto mene](topic:lay-out-sheets-for-me).
- **Detalji vaše firme, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše sopstvene blokove detalja. Kad se izabrano poklapa s jednim po rečima na njegovim slojevima, imenima blokova i napomenama, statusna traka to kaže; izaberite ga i postavite. {{cmd:DETAILS}} › Deli stavlja vaš spisak u fasciklu Dokumenti i donosi ono što je vaš tim dodao. Podešavanja isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definiše oznaku (njenu vrstu, vrednosti koje sme da ima, blokove na koje se primenjuje), postavlja je na reference blokova koje izaberete i navodi ih kao specifikaciju koju možete sačuvati kao CSV. Definicije se čuvaju u DWG. Pogledajte [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravougaonik za crtež: mreža ga popunjava, a zoom All ga prikazuje. Granice se prikazuju kao kontura i čuvaju se u DWG i DXF, zajedno s granicama papira. Pogledajte [Postavi granice crteža](topic:drawing-limits).

### Rad s drugim ljudima i drugim programima

- **Pretvorite označavanje u reviziju.** {{cmd:REDLINE}} čita paket koji piše MarkupCraft i navodi svaku promenu. Prihvatite ili odbacite svaku uz napomenu; prihvaćene dobijaju oblak revizije i dnevnik revizija u jednom koraku opozivanja, a vi sačuvate datoteku odgovora koja zatvara označavanja u MarkupCraft. Pogledajte [Pretvori označavanje u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Uz {{ui:Datoteke pogodne za spajanje}} uključeno u {{ui:Podešavanja}} › {{ui:CadCraft}}, svaki objekat dobija ključ koji se nikad ne menja (datoteke su oko 10 procenata veće). `cadcraft merge base ours theirs` zatim spaja izmene dvoje ljudi nad jednim DWG ili DXF objektom po objektu i prijavljuje samo mesta na kojima su dvoje ljudi menjali istu stvar. Pogledajte [Spojite izmene dvoje ljudi nad jednim crtežom](topic:merge-drawings).
- **Šta se promenilo, rečima.** U Istoriji, Poređenje daje jednostavan spisak: gde su se stvari promenile, kolike su te površine, šta je dodato, uklonjeno ili izmenjeno i tekst koji je izmenjen. Pogledajte [Opišite rečima šta se promenilo](topic:changes-in-words).
- **Pravci i uglovi.** Unesite pravac kao geodetski azimut, na primer N45°23'30"E, ili u stepenima, minutima i sekundama, bilo gde gde se traži ugao; AUNITS podešava kako se uglovi prikazuju. Pogledajte [Unesite i prikažite pravce i uglove](topic:bearings-and-angles).
- **Vaši SHX fontovi.** Dajte CadCraft fasciklu SHX fontova i stilovi teksta koji ih imenuju crtaju se njima, na ekranu i u štampi. Pogledajte [Crtajte tekst u sopstvenim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do i crta blokove i veze koje možete menjati. Pogledajte [Nacrtajte dijagram iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG.** {{cmd:OLELIST}} navodi OLE objekte koje DWG nosi, a koje CadCraft sam ne može da postavi, i postavlja kopiju slike tamo gde kažete. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši proračuni ostaju uz crtež.** Listovi proračuna i razlozi projektovanja čuvaju se u DWG uz tabelu klasa.

### Crtanje bez vida

- Uključite {{ui:Crtanje bez vida}} u {{ui:Podešavanja}} (ili ukucajte {{cmd:ACCESS}} i odgovorite `On`). CadCraft čita preko čitača ekrana svaku komandu i rezultat, opisuje crtež i ono što je blizu kursora, dozvoljava vam da pomerate kursor i birate tačke tastaturom, i pušta zvuk za svaki uhvat i ručicu. Tamo gde vaš pregledač može da prepozna govor na vašem računaru, komande se mogu izgovarati. Pogledajte [Crtajte bez vida](topic:draft-without-sight).

### U svakoj aplikaciji

- **Jezici.** 54 jezika; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikanski, filipinski, svahili, uzbečki). Jezici osim engleskog su mašinski prevodi dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** Tačpedovi, olovka, 3D miš, kontroler za igre i MIDI kontrole.
- **Redovi alatne trake i tabela svojstava.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi Prelomi, 2 reda ili 1 red u drugim aplikacijama. CadCraft ima sopstveno podešavanje u {{ui:Podešavanja}} › {{ui:CadCraft}} (pogledajte [Redovi alatne trake](topic:settings#toolbar-rows)). Zajednička tabela svojstava nalazi se u tri druge aplikacije, a ne u CadCraft.
- **Problemi, Uživo i dodaci.** Zajednički panel Problemi upozorava u svakoj aplikaciji, prikaz Uživo pokazuje ko je gde u CadCraft Studio (pogledajte [Radite na jednom crtežu zajedno](topic:work-live)), i spisak dodataka.
- **Poveži svoju AI.** Jedna veza iz CadCraft Studio sa svih osam aplikacija, sa nivoom samo za čitanje, predlaganje ili izmenu za svaku aplikaciju i dnevnikom običnim rečima o tome šta je asistent uradio. CadCraft nema sopstveni AI, a Pitaj u svakoj aplikaciji koristi AI koji povežete.

## Ispravljeno u 0.8.1

- **Svojstva su pokazivala 150 umesto 12'-6"** u crtežima u stopama i inčima. Polja koja aplikacija sama čita ponovo zadržavaju svoj tekst.
- **DWG datoteke čiji je odeljak klasa bio pročitan kao pogrešan tip** (GitHub cadcraft#5) sada se ispravno otvaraju.
- **Ukršteni kursor više ne prikazuje iza iskačućih prozora.**
- **Studio i spakovana izdanja mogu da promene jezik za vreme rada.** Ranije su bila samo na engleskom. Još nije testirano na svim platformama: javite nam ako se jezik ne menja.
- **Tableti u uspravnom položaju** daju slobodnu visinu mreže platnu, a režim listova počinje na 760 px ili manje.
- **STRETCH sa ukrštenim prozorom i LIMITS** prijavljeni su u Studio 0.8.0 i već su bili ispravni u veb izdanju 0.8; instalater onoga ko je prijavio bio je stariji. Studio 0.8.1 ih sadrži.

## Još nije u ovoj verziji

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može da upozori (izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}); na Mac-u kliknite desnim tasterom na CadCraft Studio i izaberite {{ui:Otvori}}. Izdanja za Store su na čekanju, a izdanje za iPad i iPhone nije ponovo napravljeno za 0.8.1.
- **Skice olovkom i fotografije skica** isprobane su samo na izmišljenim fotografijama i mišu, još ne sa pravom olovkom, ekranom osetljivim na dodir ili ručnom skicom na papiru.
- **Crtanje bez vida** je testirano automatskim proverama, još ne čitačem ekrana ili slepim testerom.
- **Deljenje detalja** nije proverio dvoje ljudi, a fascikla plana Team Cloud kao fascikla Dokumenti nije napravljena.
- **Spajanje** radi za DWG i DXF datoteke CadCraft; isto za datoteke drugih aplikacija nije napravljeno.
- **Opozivanje preko prozora:** CadCraft prijavljuje svaki završeni korak, ali Studio još nema jedinstveno opozivanje za sve aplikacije; svaka aplikacija opoziva svoje korake.
- **OLE objekti DWG** se čuvaju, ali se ne crtaju na mestu.
- **Čitanje tabela stilova štampe (CTB datoteke)** iz drugih programa je napravljeno, ali nije provereno na datoteci iz drugog programa.
- **Poveži svoju AI:** povezivanje jednim klikom u Studio, hostovani konektor za AI u pregledaču, sopstveni API ključ u Studio i objavljeni MCP paket nisu obećani u ovom izdanju.

Za prethodnu verziju pogledajte [Šta je novo u 0.7](topic:whats-new-0-7).
