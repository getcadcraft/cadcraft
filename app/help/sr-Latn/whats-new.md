---
title: Novosti u verziji 0.9
summary: Šrafure koje prate svoju granicu, grupe slojeva, složeni spratovi, 2D pametni zidovi sa vratima i prozorima, stilovi teksta i uređivač oblikovanog teksta, plutajuća komandna linija, hvatanje za mrežu, deset načina za crtanje luka i panel Dokumenti.
keywords: novosti, 0.9, beleške o izdanju, dnevnik promena, šrafura, pridružena šrafura, hatchedit, pat datoteka, datoteka uzorka, grupe slojeva, laygroup, spratovi, složeni spratovi, floorlayers, pametni zidovi, zid, vrata, prozor, alatke za zidove, stil teksta, stil, uređivač mtext, pasusni tekst, oblikovanje, plutajuća komandna linija, komandna linija, gornji deo, sažeto, hvatanje za mrežu, grid snap, f9, luk, panel dokumenti, odjava, britanski čelični profili, draw.io, tajlandski tekst, dxf r12, novosti, what's new, izdanje, dnevnik, promene, 0.8, 0.8.1, verzija, nove funkcije, automatsko dovršavanje, duh, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, git, fossil, pristup, crtanje bez vida, granice, uglovi, aunits, shx, dijagram, ole, istorija, poređenje, rečima, svojstva, stope i inči, razvlačenje, jezici, ulazni uređaji, problemi, uživo, asistenti
from: 8b6dea0b
---

Ovo je šta se promenilo u CadCraft 0.9, u odnosu na 0.8.1. CadCraft je 2D i 3D aplikacija za crtanje u CadCraft Studiju 0.9 i njegovim osam aplikacija. Verzija 0.9 završava crtanje plana, dodaje stilove teksta i pravi uređivač teksta, i daje više prostora na ekranu.

## Novo

### Crtanje plana

- **Šrafure koje prate svoju granicu.** {{cmd:HATCH}} se vezuje za ono što je ograničava. Pomerite, rotirajte ili razmerite granicu, pa šrafura i njen uzorak prate; preoblikujte je, pa se šrafura ponovo računa. {{cmd:HATCHEDIT}} (`HE`) menja šrafuru posle, i pravi ili prekida tu vezu. Pogledajte [Šrafura i ispunjene oblasti](topic:hatch).
- **Datoteke uzoraka za šrafuru.** Na pitanje {{cmd:HATCH}} `Pick internal point`, ukucajte `F` (Pattern file) i izaberite `.pat` datoteku. Probane su samo datoteke napisane u uobičajenom formatu.
- **Grupe slojeva.** U {{ui:Alatke}} na panelu {{ui:Slojevi}}: {{ui:Nova grupa}}, {{ui:Dodaj gotove grupe}}, {{ui:Grupiši po imenu}} i {{ui:Pronađi sloj}}; ili ukucajte {{cmd:LAYGROUP}} (`LG`). Pogledajte [Organizovanje crteža slojevima](topic:layers#group-layers).
- **Složeni spratovi.** {{cmd:FLOORS}} (`FLR`), ili {{ui:Spratovi…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}. Prozor pogleda na listu može da prikaže jedan sprat pod {{ui:Prikazani sprat}} u Svojstvima. {{cmd:FLOORLAYERS}} pretvara spratove u slojeve za datoteku koja ide nekome drugom. Pogledajte [Slaganje spratova u jednom crtežu](topic:floors).
- **2D pametni zidovi, vrata i prozori.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Uglovi, T spojevi i preseci se računaju za vas. Zidovi čuvaju zapis o tome kako se spajaju, a Svojstva dobijaju {{ui:Ne dozvoli spajanje na početku / na kraju}}, {{ui:Linija lokacije}} i izmenjivu {{ui:Dužinu}}. Pogledajte [Crtanje 2D zidova, vrata i prozora](topic:walls-2d).
- **Alatke za zidove na zidovima plana.** Ukucajte {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i ostale. Još nemaju dugmad na traci sa alatkama. Pogledajte [Oblici zidova, rezovi, ofseti i zaključavanja za 2D zidove](topic:wall-tools-2d).

### Tekst

- **Stilovi teksta.** {{cmd:STYLE}} (`ST`), ili {{ui:Stil teksta}} na traci {{ui:Crtanje}}: imenovani stilovi sa fontom, visinom, faktorom širine i kosinom. Pogledajte [Podešavanje fonta i veličine teksta stilovima teksta](topic:text-styles).
- **Uređivač oblikovanog pasusnog teksta.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ili dvostruki klik na tekst otvara kutiju sa fontom, veličinom, podebljanjem, kurzivom, podvlačenjem, precrtavanjem, bojom, poravnanjem i znakovima za stepen, plus-minus i prečnik, plus {{ui:U redu}} i {{ui:Otkaži}}. Pogledajte [Oblikovanje pasusnog teksta](topic:format-paragraph-text).
- **Dijagram iz draw.io XML-a.** {{cmd:DIAGRAM}} (`T2D`) takođe čita nalepljeni draw.io XML. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **Tajlandski tekst u PDF štampi.** Ranije se štampao kao upitnici.

### Više prostora i pomoć pri crtanju

- **Plutajuća, tanja komandna linija i sažeta gornja oblast.** Prevucite hvatač komandne linije da je otkačite, prevucite njenu gornju ivicu za manje redova, a {{key:F2}} otvara istoriju. {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Komandna linija}} i izbori gornje oblasti imaju ista podešavanja. Pogledajte [Podešavanja](topic:settings#command-line).
- **Meni hvatanja objekata.** Desni klik na {{ui:Hvatanje}} u statusnoj traci, ili ukucajte {{cmd:OSNAP}}.
- **Hvatanje za mrežu.** Dugme {{ui:Hvatanje za mrežu}} u statusnoj traci, ili {{key:F9}}: izabrane tačke idu na najbližu tačku mreže kada nijedno hvatanje objekta nije uhvatilo tačku.
- **Luk na deset načina, i nastavak.** {{ui:Luk}} na traci {{ui:Crtanje}} ili {{cmd:ARC}}: 3 tačke, porodica Početak/Centar/Kraj i porodica Centar/Početak/Kraj, i nastavak (pritisnite {{key:Enter}} u početnoj tački) od poslednje linije, luka ili polilinije.
- **Panel Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ili {{ui:Dokumenti…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}: revizija, stanje i preuzimanje za svaki crtež u fascikli projekta. Otvara se kao centriran dijalog. Pogledajte [Dokumenti](topic:documents).

### Datoteke

- **Britanski čelični profili.** 976 preseka u panelu Standard, upisanih kao na crtežima (na primer `305x165x40 UB`).
- **Južnoafrički paketi** (praksa crtanja i građevinski propisi) kao paketi dodatka Građevinski propisi. Brojke nisu proverene.
- **Dodaci za CadCraft,** dodaju se na zahtev i isključeni su podrazumevano: dizajn unutrašnjeg osvetljenja, dizajn čipova (HDL u raspored), rezbarenje na ruteru, simulacija kola, lančanici valjkastih lanaca i paketi propisa za zemlje za Građevinske propise.

## Ispravljeno

- Pomeranje, rotiranje ili razmera šrafure ostavljalo je njen uzorak iza.
- {{cmd:GRIDMOVE}} je nosio ceo zid plana koji počinje samo na liniji mreže. Sada se zid procenjuje po svojim krajevima.
- Mreža se prikazivala samo unutar granica crteža čak i kad su granice isključene.
- Lista blokova u bočnom panelu se pomera, a ime koje nije blok navodi blokove koji počinju tim imenom („Did you mean”).
- DXF R12 datoteke koje je AutoCAD odbijao („Unknown group 1001 for table”) sada se tamo otvaraju.
- Vrlo velike datoteke (oko 70.000 entiteta i više) nisu se otvarale uz „Maximum call stack size exceeded”.
- DWG datoteke iz AutoCAD-a 2018 i novijeg sa visokom verzijom održavanja nisu se otvarale uz „bad BITLONG code 11”.
- U kutiji za pasusni tekst, nova veličina ukucana za izabrani deo zadržava izbor.

## U svim aplikacijama

Bootstrap opisi na svakoj kontroli sa savetom, savet pri pokretanju koji možete zatvoriti, trake kartica koje se pomeraju kada ne staju, i naslov kartice pregledača koji prati otvoreni crtež (`<drawing> - CadCraft | CadCraft`). {{ui:Podešavanja}} › {{ui:Raspored}} je sada padajuća lista izbora u dva reda. Lista jezika u {{ui:Podešavanja}} je duža nego u 0.8. Zajedničko uređivanje uživo, zbirke biblioteke i težinske i temperaturne jedinice opisani su u beleškama za Studio.

## Iskreno o ograničenjima

- Pasusni tekst nema liste sa tačkama ili brojevima, lenjir tabulatora ni poravnanje po širini. Štampani PDF-ovi postavljaju tekst u Helvetica fontu.
- Zidovi plana su pravi, pa se luk crta kao kratki zidovi. Provera alatke za zidove od strane zajednice je u toku.
- Slojevi grupa nisu zapisani u AutoCAD-ovom formatu, pa AutoCAD prikazuje običan spisak. Drugi programi prikazuju sve spratove zajedno, osim ako ne pokrenete {{cmd:FLOORLAYERS}}.
- Panel Dokumenti nije probalo dvoje ljudi na pravoj mreži deljenja. Rezbarenje na ruteru nije pokrenuto ni na jednoj pravoj mašini. Procena osvetljenja je proverena prema praćenju fotona, a ne prema drugom programu. Dodaci za inženjerstvo su pomoćna sredstva za proveru, a ne zamena za pregled inženjera.
- Jezici osim engleskog su mašinski nacrti, a neke nove reči su samo na engleskom.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u CadCraft 0.8 i 0.8.1, u odnosu na 0.7. Verzija 0.8 (1. novembar 2026) dodaje pomoćna sredstva za crtanje koja rade iz vašeg crteža, pravilima na vašem računaru i bez modela, a 0.8.1 (2. novembar 2026) ispravlja greške prijavljene posle nje.

### Novo

**Crtež koji dovršava vašu misao**

- **Duh pokazuje šta dolazi posle.** Bez komande u toku, sivi isprekidani duh pokazuje šta uzorci vašeg crteža kažu da dolazi: sledeći stub na istom razmaku, sledeći korak stepeništa, nedostajući zid sobe. Pritisnite {{key:Tab}} da ga nacrtate kao jedan korak opoziva, ili {{key:Esc}} da ga odbacite. Gleda samo najnovije objekte, pa ostaje glatko na velikom crtežu. Isključite ga u {{ui:Podešavanja}} › {{ui:CadCraft}} ili sa {{cmd:AUTOCOMPLETE}} `Off`.
- **Sledeća tačka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je sledeća tačka: sledeći korak stepeništa, četvrti ugao pravougaonika, ili tačka koja ga zatvara. Približite kursor i pritisnite {{key:Tab}}, kao da ste kliknuli tamo.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtajte grube poteze olovkom, mišem ili prstom i svaki postaje čista linija, krug, luk, pravougaonik ili polilinija, uhvaćena za ono što je već nacrtano. Pogledajte [Skicirajte olovkom i dobijte preciznu geometriju](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) pronalazi papir na fotografiji, ispravlja perspektivu, primenjuje veličinu papira i razmeru koje date, i prati linije olovke na sloj za svaku boju olovke. Ispisani tekst se ne prati.
- **Kotirajte pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota duž strana koje izaberete, ukupnu veličinu, širine otvora, prečnike rupa i, sa `Grid`, razmak mreže. Nikada ne ponavlja kotu koja već postoji.
- **Pomerite liniju mreže i set prati.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji se završavaju na liniji mreže razvlače se s njom, zidovi duž nje, stubovi, njen balon i oznaka se pomeraju, a kote na njoj mere novi razmak. Jedan korak opoziva.

**Listovi, detalji i oznake**

- **Listovi koji se sami raspoređuju.** {{cmd:AUTOSHEET}} uzima vaše imenovane poglede (ili zasebne delove modela), bira veličinu papira i standardnu razmeru, i stavlja poglede na nove listove sa naslovnim blokom i natpisom sa imenom i razmerom. Sve ostaje izmenjivo. Pogledajte [Neka vam listove rasporedi sam program](topic:lay-out-sheets-for-me).
- **Detalji vaše firme, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše sopstvene blokove detalja. Kada se ono što izaberete poklopi sa nekim po rečima na njegovim slojevima, imenima blokova i napomenama, statusna traka to kaže; izaberite ga i postavite. {{cmd:DETAILS}} › Share stavlja vaš spisak u fasciklu Dokumenti i donosi ono što je vaš tim dodao. Podešavanja isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definiše oznaku (njenu vrstu, vrednosti koje sme da uzme, blokove na koje se primenjuje), postavlja je na reference blokova koje izaberete, i navodi ih kao raspored koji možete sačuvati kao CSV. Definicije se čuvaju u DWG-u. Pogledajte [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravougaonik za crtež: mreža ga popunjava, a zum Sve ga prikazuje. Granice se prikazuju kao obrub i čuvaju se u DWG i DXF, zajedno sa granicama papira. Pogledajte [Postavljanje granica crteža](topic:drawing-limits).

**Rad sa drugim ljudima i drugim programima**

- **Pretvorite označavanje u reviziju.** {{cmd:REDLINE}} čita paket koji piše MarkupCraft i navodi svaku promenu. Prihvatite ili odbacite svaku uz napomenu; prihvaćene dobijaju oblak revizije i dnevnik revizija u jednom koraku opoziva, a vi sačuvate datoteku odgovora koja zatvara označavanja u MarkupCraft-u. Pogledajte [Pretvaranje označavanja u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu da spoje.** Sa uključenim {{ui:Datoteke pogodne za spajanje}} u {{ui:Podešavanja}} › {{ui:CadCraft}}, svaki objekat dobija ključ koji se nikada ne menja (datoteke su oko 10 procenata veće). `cadcraft merge base ours theirs` zatim spaja izmene dvoje ljudi nad jednim DWG ili DXF objektom po objekat i prijavljuje samo tamo gde su dvoje menjali istu stvar. Pogledajte [Spajanje izmena dvoje ljudi na jednom crtežu](topic:merge-drawings).
- **Šta se promenilo, rečima.** U {{ui:Istorija}}, Poređenje daje prost spisak: gde su se stvari promenile, koliko su velika mesta, šta je dodato, uklonjeno ili izmenjeno, i tekst koji je izmenjen. Pogledajte [Reći rečima šta se promenilo](topic:changes-in-words).
- **Uglovi i pravci.** Ukucajte pravac kao geodetski azimut, kao N45°23'30"E, ili u stepenima, minutima i sekundama, bilo gde gde se traži ugao; AUNITS određuje kako se uglovi prikazuju. Pogledajte [Ukucavanje i prikaz azimuta i uglova](topic:bearings-and-angles).
- **Vaši sopstveni SHX fontovi.** Dajte CadCraft-u fasciklu SHX fontova i stilovi teksta koji ih imenuju crtaju se njima, na ekranu i u štampi. Pogledajte [Crtanje teksta u vašim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do, i crta blokove i konektore koje možete menjati. Pogledajte [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG-u.** {{cmd:OLELIST}} navodi OLE objekte koje DWG nosi a koje CadCraft ne može sam da postavi, i postavlja kopiju slike tamo gde kažete. Pogledajte [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaša izračunavanja ostaju uz crtež.** Listovi proračuna i razlozi dizajna čuvaju se u DWG-u uz tabelu klasa.

**Crtanje bez vida**

- Uključite {{ui:Crtanje bez vida}} u {{ui:Podešavanja}} (ili ukucajte {{cmd:ACCESS}} i odgovorite `On`). CadCraft izgovara svaku komandu i rezultat preko vašeg čitača ekrana, opisuje crtež i ono što je blizu kursora, dozvoljava vam da pomerate kursor i birate tačke tastaturom, i pušta zvuk za svako hvatanje i ručicu. Tamo gde vaš pregledač prepoznaje govor na vašem računaru, komande se mogu izgovarati. Pogledajte [Crtanje bez vida](topic:draft-without-sight).

**U svim aplikacijama**

- **Jezici.** 54 jezika; deset su novi (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbekistanski). Jezici osim engleskog su mašinski nacrti dok ih ne pregleda izvorni govornik.
- **Ulazni uređaji.** Kontrole za tačped, olovku, 3D miš, kontroler za igre i MIDI.
- **Redovi trake sa alatkama i mreža svojstava.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi alatne trake}} nudi Prelomi, 2 reda ili 1 red u drugim aplikacijama. CadCraft ima sopstveno podešavanje u {{ui:Podešavanja}} › {{ui:CadCraft}} (pogledajte [Redovi trake sa alatkama](topic:settings#toolbar-rows)). Zajednička mreža svojstava je u tri druge aplikacije, a ne u CadCraft-u.
- **Problemi, Uživo i dodaci.** Zajednički panel Problemi koji upozorava u svakoj aplikaciji, prikaz Uživo o tome ko je gde u CadCraft Studiju (pogledajte [Rad na jednom crtežu zajedno](topic:work-live)), i spisak dodataka.
- **Povežite svog AI.** Jedna veza iz CadCraft Studija sa svih osam aplikacija, sa nivoom samo za čitanje, predlaganje ili uređivanje za svaku aplikaciju i dnevnikom radnji asistenta prostim rečima. CadCraft nema sopstveni AI, a Pitaj u svakoj aplikaciji koristi AI koji vi povežete.

### Ispravljeno u 0.8.1

- **Svojstva su prikazivala 150 umesto 12'-6"** u crtežima u stopama i inčima. Polja koja aplikacija sama čita ponovo zadržavaju svoj tekst.
- **DWG datoteke čiji je odeljak klasa pročitan kao pogrešan tip** (GitHub cadcraft#5) sada se ispravno otvaraju.
- **Ukršteni kursor se više ne prikazuje iza iskačućih prozora.**
- **Studio i upakovana izdanja mogu da promene jezik za vreme rada.** Ranije su bila samo na engleskom. Još nije probano na svim platformama: javite nam ako se jezik ne menja.
- **Tableti u uspravnom položaju** daju prazan prostor mreže platnu, a režim listova počinje na 760 px ili manje.
- **STRETCH sa ukrštenim prozorom, i LIMITS,** prijavljeni su na Studiju 0.8.0 i već su bili ispravni u veb izdanju 0.8; instalater prijavioca je bio stariji. Studio 0.8.1 ih sadrži.

### Još nije u ovoj verziji

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može upozoriti (izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}); na Mac-u, desni klik na CadCraft Studio i izaberite {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a iPad i iPhone izdanje nije ponovo napravljeno za 0.8.1.
- **Skice olovkom i fotografije skica** su probane samo na izmišljenim fotografijama i mišu, još ne sa pravom olovkom, ekranom osetljivim na dodir ili rukom nacrtanom skicom na papiru.
- **Crtanje bez vida** je testirano automatskim proverama, još ne sa čitačem ekrana ili slepim testerom.
- **Deljenje detalja** nije imalo proveru od dvoje ljudi, a fascikla Team Cloud Plan kao fascikla Dokumenti nije izgrađena.
- **Spajanje** radi za DWG i DXF datoteke CadCraft-a; za datoteke drugih aplikacija nije izgrađeno.
- **Poništavanje preko prozora:** CadCraft prijavljuje svaki završen korak, ali Studio još nema jedno Poništi za sve aplikacije; svaka aplikacija poništava sopstvene korake.
- **OLE objekti DWG-a** se čuvaju ali se ne crtaju na mestu.
- **Čitanje tabela stilova štampe (CTB datoteke)** iz drugih programa je izgrađeno, ali nije proveravano na datoteci iz drugog programa.
- **Povežite svog AI:** jednoklikovna veza u Studiju, hostovani konektor za AI u pregledaču, sopstveni API ključ u Studiju i objavljeni MCP paket nisu obećani u ovom izdanju.

Za prethodnu verziju pogledajte [Novosti u verziji 0.7](topic:whats-new-0-7).
