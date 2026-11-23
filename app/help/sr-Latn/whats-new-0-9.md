---
title: Šta je novo u 0.9 (ranije)
summary: Šrafure koje prate svoju granicu, grupe slojeva, složeni spratovi, pametni 2D zidovi sa vratima i prozorima, stilovi teksta i uređivač formatiranog teksta, plutajuća komandna linija, hvatanje za mrežu, deset načina crtanja luka i panel Dokumenti.
keywords: šta je novo 0.9, raniji izdanje, šta je novo, 0.9, beleške o izdanju, dnevnik promena, šrafura, šrafura koja prati granicu, hatchedit, datoteka šablona, pat, grupe slojeva, laygroup, spratovi, složeni spratovi, floorlayers, pametni zidovi, zid, vrata, prozor, alati za zidove, stil teksta, style, mtext, formatiran pasus, plutajuća komandna linija, komandna linija, gornja oblast, kompaktno, hvatanje za mrežu, grid snap, f9, luk, panel dokumenti, provera, čelični profili, draw.io, tajski tekst, dxf r12, šta je novo, promene, 0.8, 0.8.1, verzija, nove funkcije, automatsko dovršavanje, duh, tab, sketchfix, photosketch, autosheet, detalji, gridmove, autodim, oznake, redline, spajanje, git, fossil, access, crtanje bez vida, čitač ekrana, granice, uglovi, aunits, shx, dijagram, ole, istorija, poređenje, rečima, svojstva, stope i inči, rastezanje, jezici, ulazni uređaji, problemi, uživo, pomoćnici
from: 3451e64c
---

Ovo je šta se promenilo u CadCraft-u 0.9 u odnosu na 0.8.1. CadCraft je aplikacija za 2D i 3D crtanje paketa CadCraft Studio 0.9 i njegovih osam aplikacija. Verzija 0.9 završava crtanje plana, dodaje stilove teksta i pravi uređivač teksta, i daje više prostora na ekranu.

## Novo

### Crtanje plana

- **Šrafure koje prate svoju granicu.** {{cmd:HATCH}} se povezuje sa onim što je omeđuje. Pomerite, okrenite ili razmerite granicu, i šrafura i njen šablon idu s njom; preoblikujte je i šrafura se ponovo izračunava. {{cmd:HATCHEDIT}} (`HE`) menja šrafuru posle, i pravi ili prekida vezu. Vidi [Šrafura i ispuna površina](topic:hatch).
- **Datoteke šablona šrafure.** Na pitanju {{cmd:HATCH}} `Pick internal point` ukucajte `F` (Datoteka šablona) i izaberite datoteku `.pat`. Isprobane su samo datoteke napisane u uobičajenom formatu.
- **Grupe slojeva.** U {{ui:Alatke}} na panelu {{ui:Slojevi}}: {{ui:Nova grupa}}, {{ui:Dodaj gotove grupe}}, {{ui:Grupiši po imenu}} i {{ui:Pronađi sloj}}; ili ukucajte {{cmd:LAYGROUP}} (`LG`). Vidi [Organizacija crteža slojevima](topic:layers#group-layers).
- **Složeni spratovi.** {{cmd:FLOORS}} (`FLR`), ili {{ui:Spratovi…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}. Prikaz na listu može pokazati jedan sprat pod {{ui:Prikazani sprat}} u Svojstvima. {{cmd:FLOORLAYERS}} pretvara spratove u slojeve za datoteku koja ide nekome drugome. Vidi [Složeni spratovi u jednom crtežu](topic:floors).
- **Pametni 2D zidovi, vrata i prozori.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Uglovi, T spojevi i ukrštanja se računaju za vas. Zidovi čuvaju zapis o tome kako se spajaju, a u Svojstvima dobijaju Zabrani spajanje na početku / na kraju, Liniju lokacije i izmenljivu Dužinu. Vidi [Crtanje 2D pametnih zidova, vrata i prozora](topic:walls-2d).
- **Zidni alat na zidovima u planu.** Upišite {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i ostale. Još nemaju dugmad na alatnoj traci. Vidi [Oblici zidova, preseci, ofseti i zaključavanja za 2D zidove](topic:wall-tools-2d).

### Tekst

- **Stilovi teksta.** {{cmd:STYLE}} (`ST`), ili {{ui:Stil teksta}} na traci {{ui:Crtanje}}: imenovani stilovi sa fontom, visinom, faktorom širine i nagibom. Vidi [Postavljanje fonta i veličine teksta stilovima teksta](topic:text-styles).
- **Uređivač formatiranog pasusnog teksta.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} ili dvostruki klik na tekst otvara polje sa fontom, veličinom, podebljanjem, kurzivom, podvlačenjem, precrtavanjem, bojom, poravnanjem i znacima stepena, plus-minus i prečnika, plus {{ui:U redu}} i {{ui:Otkaži}}. Vidi [Formatiranje pasusnog teksta](topic:format-paragraph-text).
- **Dijagram iz draw.io XML-a.** {{cmd:DIAGRAM}} (`T2D`) takođe čita nalepljeni draw.io XML. Vidi [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **Tajski tekst u PDF štampi.** Ranije se štampao kao upitnici.

### Više prostora i pomagala za crtanje

- **Plutajuća, tanja komandna linija i kompaktna gornja oblast.** Prevucite hvatač komandne linije da je učinite lebdećom, prevucite njenu gornju ivicu za manje redova, {{key:F2}} otvara istoriju. {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Komandna linija}} i izbori gornje oblasti imaju iste postavke. Vidi [Podešavanja](topic:settings#command-line).
- **Meni hvatanja objekata.** Desni klik na {{ui:Hvatanje}} u statusnoj traci, ili ukucajte {{cmd:OSNAP}}.
- **Hvatanje za mrežu.** Dugme {{ui:Hvatanje za mrežu}} u statusnoj traci, ili {{key:F9}}: izabrane tačke idu na najbližu tačku mreže kada nijedno hvatanje objekta nije uzelo tačku.
- **Luk na deset načina i Nastavi.** {{ui:Luk}} na traci {{ui:Crtanje}} ili {{cmd:ARC}}: 3 tačke, porodica Početak/Centar/Kraj i porodica Centar/Početak/Kraj, i Nastavi (pritisnite {{key:Enter}} na početnoj tački) od poslednje linije, luka ili polilinije.
- **Panel Dokumenti.** {{cmd:DOCUMENTS}} (`DOCS`) ili {{ui:Dokumenti…}} u meniju {{ui:Više}} grupe {{ui:Pogled}}: revizija, stanje i odjava za svaki crtež u fascikli projekta. Otvara se kao centriran dijalog. Vidi [Dokumenti](topic:documents).

### Datoteke

- **Čelični profili iz Velike Britanije.** 976 preseka u panelu Standardni, ukucanih kao na crtežima (na primer `305x165x40 UB`).
- **Južnoafrički paketi** (praksa crtanja i građevinski propisi) kao paketi dodatka Građevinski propisi. Brojevi nisu provereni.
- **Dodaci za CadCraft,** dodaju se na zahtev i na početku su isključeni: dizajn unutrašnjeg osvetljenja, dizajn čipova (HDL u raspored), rezanje rutera, simulacija kola, lančanici za valjkaste lance i paketi zemalja za dodatak Građevinski propisi.

## Ispravljeno

- Pomeranje, okretanje ili razmera šrafure ostavljali su iza sebe njen šablon.
- {{cmd:GRIDMOVE}} je nosio ceo zid u planu koji samo počinje na liniji mreže. Zid se sada procenjuje po svojim krajevima.
- Mreža se prikazivala samo unutar granica crteža čak i kada su granice isključene.
- Spisak blokova u bočnom panelu se pomera, a naziv koji nije blok navodi blokove koji počinju tim nazivom („Da li ste mislili“).
- DXF R12 datoteke koje je AutoCAD odbijao („Nepoznata grupa 1001 za tabelu“) sada se tamo otvaraju.
- Vrlo velike datoteke (oko 70.000 entiteta i više) nisu se otvarale uz „Prekoračena maksimalna veličina steka poziva“.
- DWG datoteke iz AutoCAD-a 2018 i novijeg sa visokom verzijom održavanja nisu se otvarale uz „loš BITLONG kod 11“.
- U polju pasusnog teksta, nova veličina unesena za izabrani deo zadržava izbor.

## U svakoj aplikaciji

Bootstrap opisi na svakoj kontroli sa savetom, početni savet koji možete zatvoriti, trake kartica koje se pomeraju kada ne staju, i naslov kartice pregledača koji prati otvoreni crtež (`<drawing> - CadCraft | CadCraft`). {{ui:Podešavanja}} › {{ui:Raspored}} je sada padajuća lista izbora od dva reda. Spisak jezika u {{ui:Podešavanja}} je duži nego u 0.8. Živo zajedničko uređivanje, zbirke biblioteke i jedinice težine i temperature opisani su u beleškama o Studiju.

## Iskrene granice

- Pasusni tekst nema liste sa tačkama ili brojevima, ravnalo za tabulatore ni poravnanje. Štampani PDF-ovi postavljaju tekst u Helvetica.
- Zidovi u planu su pravi, pa se luk crta kao kratki zidovi. Proveru zidnog alata od strane zajednice još čeka.
- Grupe slojeva nisu zapisane u AutoCAD-ovom formatu, pa AutoCAD prikazuje ravan spisak. Drugi programi prikazuju sve spratove zajedno osim ako ne pokrenete {{cmd:FLOORLAYERS}}.
- Panel Dokumenti nije isproban na pravoj deljenoj fascikli od strane dvoje ljudi. Rezanje rutera nije isprobano ni na jednom pravom računaru. Procena osvetljenja je proverena naspram praćenja fotona, a ne drugim programom. Inženjerski dodaci su pomoćna sredstva za proveru, a ne zamena za pregled inženjera.
- Jezici osim engleskog su mašinski nacrti, a neke nove reči su samo na engleskom.

## Ranije: 0.8 i 0.8.1

Ovo je šta se promenilo u CadCraft-u 0.8 i 0.8.1 u odnosu na 0.7. Verzija 0.8 (1. novembra 2026) dodaje pomagala za crtanje koja rade iz vašeg crteža, pravilima na vašem računaru i bez modela, a 0.8.1 (2. novembra 2026) ispravlja greške prijavljene posle nje.

### Novo

**Crtež koji dovršava vašu misao**

- **Duh pokazuje šta dolazi.** Kada nijedna komanda nije pokrenuta, sivi isprekidani duh pokazuje šta uzorci vašeg crteža kažu da dolazi: sledeći stub na istom razmaku, sledeći korak stepenica, nedostajući zid sobe. Pritisnite {{key:Tab}} da ga nacrtate kao jedan korak opozivanja, ili {{key:Esc}} da ga odbacite. Gleda samo najnovije objekte, pa ostaje glatko na velikom crtežu. Isključite ga u {{ui:Podešavanja}} › {{ui:CadCraft}} ili sa {{cmd:AUTOCOMPLETE}} `Off`.
- **Sledeća tačka dok crtate liniju.** Usred {{cmd:LINE}} ili {{cmd:PLINE}} duh je sledeća tačka: sledeći korak stepenica, četvrti ugao pravougaonika, ili tačka koja ga zatvara. Približite kursor i pritisnite {{key:Tab}}, kao da ste kliknuli tamo.
- **Skice olovkom postaju precizna geometrija.** {{cmd:SKETCHFIX}}: nacrtajte grube linije olovkom, mišem ili prstom i svaka postaje čista linija, krug, luk, pravougaonik ili polilinija, poravnata i spojena sa drugima. Vidi [Skicirajte olovkom i dobijte preciznu geometriju](topic:sketch-with-a-pen).
- **Fotografija skice postaje crtež.** {{cmd:PHOTOSKETCH}} (`PSK`) nalazi papir na fotografiji, ispravlja perspektivu, primenjuje veličinu papira i razmeru koju date, i prati linije olovke u linije, lukove i krugove, sa slojem za svaku boju olovke. Slova se ne prate.
- **Kotirajte pravilima.** {{cmd:AUTODIM}} (`ADIM`) pravi lance kota duž strana koje izaberete, ukupnu veličinu, širine otvora, prečnike rupa i, sa `Grid`, razmak mreže. Nikada ne ponavlja kotu koja već postoji.
- **Pomerite liniju mreže i skup je prati.** {{cmd:GRIDMOVE}} (`GM`): zidovi koji se završavaju na liniji mreže rastežu se s njom, zidovi duž nje, stubovi, njen mehur i oznaka se pomeraju, a kote na njoj mere novi razmak. Jedan korak opozivanja.

**Listovi, detalji i oznake**

- **Listovi koji se sami slažu.** {{cmd:AUTOSHEET}} uzima vaše imenovane prikaze (ili odvojene delove modela), bira veličinu papira i standardnu razmeru, i stavlja prikaze na nove listove sa naslovnim blokom i natpisom naziva i razmere. Sve ostaje izmenljivo. Vidi [Automatski slažem listove](topic:lay-out-sheets-for-me).
- **Detalji vaše firme, ponuđeni dok crtate.** {{cmd:DETAILS}} (`DET`) čuva vaše sopstvene blokove detalja. Kada se ono što izaberete poklapa sa jednim po rečima na njegovim slojevima, nazivima blokova i napomenama, statusna traka to kaže; izaberite ga i postavite. {{cmd:DETAILS}} › Share stavlja vaš spisak u fasciklu Dokumenti i donosi ono što je vaš tim dodao. Podešavanja isključuju ponude.
- **Oznake na blokovima.** {{cmd:TAGS}} definiše oznaku (njenu vrstu, vrednosti koje sme da ima, blokove na koje se odnosi), postavlja je na izabrane reference blokova, i navodi ih kao raspored koji možete sačuvati kao CSV. Definicije se čuvaju u DWG. Vidi [Oznake](topic:tags).
- **Granice crteža.** {{cmd:LIMITS}} postavlja pravougaonik za crtež: mreža ga ispunjava, a zum Sve ga prikazuje. Granice se prikazuju kao obris i čuvaju se u DWG i DXF, zajedno sa granicama papira. Vidi [Postavljanje granica crteža](topic:drawing-limits).

**Rad sa drugim ljudima i drugim programima**

- **Pretvorite izmenu u reviziju.** {{cmd:REDLINE}} čita paket koji piše MarkupCraft i navodi svaku promenu. Prihvatite ili odbacite svaku uz belešku; prihvaćene dobijaju oblak revizije i dnevnik revizija u jednom koraku opozivanja, a vi čuvate datoteku odgovora koja zatvara izmene u MarkupCraft-u. Vidi [Pretvaranje izmene u reviziju](topic:redline-to-revision).
- **Crteži koje git i Fossil mogu spojiti.** Sa uključenim {{ui:Datoteke pogodne za spajanje}} u {{ui:Podešavanja}} › {{ui:CadCraft}}, svaki objekat dobija ključ koji se nikada ne menja (datoteke su oko 10 odsto veće). `cadcraft merge base ours theirs` zatim spaja izmene dvoje ljudi nad jednim DWG ili DXF objektom po objekat, i javlja samo tamo gde su dvoje menjali istu stvar. Vidi [Spajanje izmena dvoje ljudi nad jednim crtežom](topic:merge-drawings).
- **Šta se promenilo, rečima.** U Istoriji, Poređenje daje običan spisak: gde su se stvari promenile, koliko su velika mesta, šta je dodato, uklonjeno ili promenjeno, i tekst koji je izmenjen. Vidi [Kažite rečima šta se promenilo](topic:changes-in-words).
- **Pravci i uglovi.** Ukucajte pravac kao geodetski azimut, kao što je N45°23'30"E, ili u stepenima, minutima i sekundama, bilo gde gde se traži ugao; AUNITS postavlja kako se uglovi prikazuju. Vidi [Unos i prikaz pravaca i uglova](topic:bearings-and-angles).
- **Vaši sopstveni SHX fontovi.** Dajte CadCraft-u fasciklu SHX fontova i stilovi teksta koji ih navode crtaju se njima, na ekranu i u štampi. Vidi [Crtanje teksta vašim SHX fontovima](topic:shx-fonts).
- **Dijagram iz teksta.** {{cmd:DIAGRAM}} čita Mermaid dijagram toka, PlantUML dijagram komponenti, D2 ili spisak od-do i crta blokove i veze koje možete menjati. Vidi [Crtanje dijagrama iz teksta](topic:text-to-diagram).
- **OLE objekti u DWG-u.** {{cmd:OLELIST}} navodi OLE objekte koje DWG nosi a koje CadCraft sam ne može da postavi, i postavlja kopiju slike gde kažete. Vidi [Slike](topic:pictures#objects-from-other-programs-ole).
- **Vaši proračuni ostaju uz crtež.** Listovi proračuna i razlozi za dizajn čuvaju se u DWG uz tabelu klasa.

**Crtanje bez vida**

- Uključite {{ui:Crtanje bez vida}} u {{ui:Podešavanja}} (ili ukucajte {{cmd:ACCESS}} i odgovorite `On`). CadCraft izgovara svaku komandu i rezultat preko čitača ekrana, opisuje crtež i ono što je blizu kursora, dozvoljava vam da pomerate kursor i birate tačke tastaturom, i pušta zvuk za svako hvatanje i hvatač. Tamo gde vaš pregledač može da prepozna govor na vašem računaru, komande se mogu izgovarati. Vidi [Crtanje bez vida](topic:draft-without-sight).

**U svakoj aplikaciji**

- **Jezici.** 54 jezika; deset je novo (litvanski, letonski, bosanski, marati, telugu, albanski, afrikaans, filipinski, svahili, uzbečki). Jezici osim engleskog su mašinski nacrti dok ih ne pročita izvorni govornik.
- **Ulazni uređaji.** Trackpad, olovka, 3D miš, kontroler za igre i MIDI kontrole.
- **Redovi trake sa alatkama i tabela svojstava.** {{ui:Podešavanja}} › {{ui:Opšte}} › {{ui:Redovi trake sa alatkama}} nudi Prelomi, 2 reda ili 1 red u drugim aplikacijama. CadCraft zadržava svoje podešavanje u {{ui:Podešavanja}} › {{ui:CadCraft}} (vidi [Redovi trake sa alatkama](topic:settings#toolbar-rows)). Zajednička tabela svojstava je u tri druge aplikacije, a ne u CadCraft-u.
- **Problemi, Uživo i dodaci.** Zajednički panel Problemi koji upozorava u svakoj aplikaciji, prikaz Uživo u CadCraft Studio-u koji pokazuje ko je gde (vidi [Radite na jednom crtežu zajedno](topic:work-live)), i spisak dodataka.
- **Povežite svoj AI.** Jedna veza iz CadCraft Studio-a sa svih osam aplikacija, sa nivoom samo za čitanje, predlaganje ili izmenu po aplikaciji, i dnevnik radnji asistenta u jednostavnim rečima. CadCraft nema sopstveni AI, a Pitajte u svakoj aplikaciji koristi AI koji povežete.

### Ispravljeno u 0.8.1

- **Svojstva su pokazivala 150 umesto 12'-6"** u crtežima u stopama i inčima. Polja koja aplikacija sama čita ponovo zadržavaju svoj tekst.
- **DWG datoteke čiji je odeljak klasa pročitan kao pogrešan tip** (GitHub cadcraft#5) se sada ispravno otvaraju.
- **Ukršteni kursor se više ne prikazuje iza iskačućih prozora.**
- **Studio i upakovana izdanja mogu da promene jezik u toku rada.** Ranije su bila samo na engleskom. Još nije isprobano na svakoj platformi: javite nam ako se jezik ne menja.
- **Tableti u uspravnom položaju** daju slobodnu visinu mreže platnu, a režim listova počinje na 760 px ili manje.
- **STRETCH sa ukrštenim prozorom, i LIMITS,** prijavljeni su na Studiju 0.8.0 i već su bili ispravni u veb izdanju 0.8; instalater prijavioca je bio stariji. Studio 0.8.1 ih sadrži.

### Još nije u ovoj verziji

- **0.8 i 0.8.1 nisu potpisani kodom.** Windows može upozoriti (izaberite {{ui:Više informacija}}, pa {{ui:Ipak pokreni}}); na Mac-u desnim klikom na CadCraft Studio izaberite {{ui:Otvori}}. Izdanja za prodavnice su na čekanju, a izdanje za iPad i iPhone nije ponovo napravljeno za 0.8.1.
- **Skice olovkom i fotografije skica** isprobane su samo na izmišljenim fotografijama i mišem, još ne sa pravom olovkom, ekranom osetljivim na dodir ili ručnom skicom na papiru.
- **Crtanje bez vida** je testirano automatskim proverama, još ne sa čitačem ekrana ili slepim testerom.
- **Deljenje detalja** nije imalo proveru od strane dvoje ljudi, a fascikla Team Cloud Plan kao fascikla Dokumenti nije napravljena.
- **Spajanje** radi za DWG i DXF datoteke CadCraft-a; isto za datoteke drugih aplikacija nije napravljeno.
- **Poništavanje preko prozora:** CadCraft javlja svaki završen korak, ali Studio još nema jedno Opozovi za sve aplikacije; svaka aplikacija opoziva svoje korake.
- **OLE objekti DWG-a** se čuvaju, ali se ne crtaju na svom mestu.
- **Čitanje tabela stilova štampanja (CTB datoteke)** iz drugih programa je napravljeno, ali nije proveren naspram datoteke iz drugog programa.
- **Povežite svoj AI:** povezivanje jednim klikom u Studiju, hostovani konektor za AI u pregledaču, vaš sopstveni API ključ u Studiju i objavljeni MCP paket nisu obećani u ovom izdanju.

Za verziju pre ove, vidi [Šta je novo u 0.7](topic:whats-new-0-7).
