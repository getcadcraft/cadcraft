---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan pravi posao: stavite projektni folder pod kontrolu, odjavite crtež, promijenite ga, prijavite ga uz napomenu, pošaljite na pregled, odobrite i objavite, pogledajte istoriju i šta ga koristi, šta drugi vide dok je zaključan, i kako radi s folderima u oblaku.
keywords: trezor, dokumenti, vodič, tutorijal, odjava, prijava, revizija, objava, zaključavanje, istorija, gdje se koristi, folder u oblaku, projektni folder, upravljanje dokumentima, pdm, dvije osobe, zajednički folder
from: 3829528d
---

## Šta ćete raditi

Vi ste Ana, radite na Riverside klinici s kolegom, Benom. Crteži projekta žive u jednom folderu kojem oboje pristupate (zajednički disk, sinhronizovani folder ili folder u oblaku). Na kraju, jedna datoteka je prešla od prve kopije do objavljene revizije **A**, promijenjena je ponovo kao **B.1**, vidjeli ste ko je šta radio, i vidjeli ste šta Ben vidi kada vi držite datoteku.

Sve se čuva u skrivenom folderu `.ccvault` pored vaših datoteka: bez servera, ništa se ne šalje (folder u oblaku je izuzetak, vidi posljednji korak). Za svako dugme i pravilo na jednom mjestu, pogledajte temu *Dokumenti: odjava, revizije i objava* ako je vaša aplikacija ima.

## 1. Postavite projektni folder

1. Izaberite {{ui:Dokumenti…}} u meniju **Više** na kartici **Prikaz**, ili upišite `DOCUMENTS` (ili `DOCS`) i pritisnite {{key:Enter}}.
2. Izaberite {{ui:Izaberi projektni folder}} i odaberite folder koji čuva crteže projekta. (Projektni folderi rade u Studiju i u pregledačima koji mogu otvoriti folder, kao Chrome i Edge. U drugim pregledačima panel to kaže.)
3. Izaberite {{ui:Promijeni}} pored **Ti:** i upišite svoje ime, `Ana` (ako pita, i ime ovog računara). Panel sada kaže *Ti: Ana na* i vaš računar. Vaše ime ide uz sve što radite.
4. Izaberite {{ui:Pokreni trezor u ovom folderu}} i upišite naziv projekta, `Riverside clinic`. Panel kaže *Trezor pokrenut za Riverside clinic.*

## 2. Stavite datoteku pod kontrolu

1. Otvorite **Datoteke koje nisu u trezoru** i izaberite {{ui:Dodaj}} pored `plans/A-101.dxf`.
2. Pojavljuje se pod **Datoteke u trezoru** u reviziji **A.1**, stanje **U radu**. A.1 je njena prva kopija; trezor čuva kopiju svake revizije.

## 3. Odjava, izmjena, prijava

1. Izaberite {{ui:Otvori}} pored `plans/A-101.dxf`. Crtež se otvara u CadCraft-u, a panel se zatvara da vidite crtež. Panel je i dalje na jednu naredbu: `DOCUMENTS`.
2. Ponovo otvorite panel i izaberite {{ui:Odjavi}}. Red sada kaže **Odjavljeno vama**. Napravljena je datoteka zaključavanja u `.ccvault/locks`; niko drugi ne može odjaviti ovu datoteku dok je ne prijavite.
3. Nacrtajte nešto: dodajte liniju, pomjerite zid. Ništa što uradite ne može se snimiti preko datoteke trezora osim ako je crtež odjavljen vama; Spasi kao uvijek radi za vašu kopiju.
4. Otvorite panel, izaberite {{ui:Prijavi}} i upišite šta se promijenilo (`Moved the door`). Panel kaže *prijavljeno kao A.2*. Datoteka u projektnom folderu je sada crtež koji ste otvorili, a zaključavanje je nestalo. Prijava bez promjene zadržava reviziju.

Ako se predomislite, {{ui:Poništi odjavu}} vraća datoteku bez nove revizije.

## 4. Pregled i objava

1. Izaberite {{ui:Pošalji na pregled}}. Stanje postaje **Na pregledu**, a datoteka je samo za čitanje.
2. Prije odobravanja, izaberite {{ui:Postavke projekta}} i navedite ko može odobriti (jedno ime po redu), na primjer `Ben` i `Carla`, i označite pravilo da odobravalac mora biti neko drugi osim autora. Izaberite {{ui:Spasi postavke}}. Sada trezor sam odbija sve ostale.
3. Ben (ili Carla) izabere {{ui:Odobri}} i upiše ime odobravaoca. Stanje postaje **Objavljeno**, a revizija postaje **A**, uz *odobrio* i ime. Objavljena datoteka je samo za čitanje. {{ui:Vrati}} bi je vratio u stanje U radu, uz razlog.

Ime odobravaoca je ono upisano u panelu; ono je zapis ko je potpisao, a ne dokaz identiteta.

## 5. Nova revizija

1. Na objavljenoj datoteci izaberite {{ui:Nova revizija}}. Držite je za sljedeće slovo.
2. Izmijenite je, pa {{ui:Prijavi}}. Revizija je **B.1**, u radu. Objavite je na isti način i postaje **B**. {{ui:Poništi odjavu}} prije prve prijave ostavlja je na **A**.

Slova revizija idu A, B … Z, AA, AB. Ako vaš standard izostavlja neka slova, postavka projekta *Koristi ASME Y14.35 niz* preskače I, O, Q, S, X i Z za sljedeće revizije.

## 6. Pogledajte šta se dogodilo

Izaberite ime datoteke da otvorite njene detalje:

- **{{ui:Istorija}}**: svaki događaj, najnoviji prvi, sa tim ko, koji računar i kada: *Prijavljeno A.2*, Ana; *Objavljeno*, Ben; i tako dalje.
- **{{ui:Revizije}}**: tabela revizija. {{ui:Otvori kopiju}} otvara reviziju kao običnu kopiju koja ne može prepisati datoteku trezora; {{ui:Uporedi sa}} navodi šta je dodato, uklonjeno i promijenjeno u odnosu na reviziju prije, ili na bilo koju drugu.
- **{{ui:Koristi}}**: crteže na koje se povezuje (xref-ovi).
- **{{ui:Koristi ga}}**: navodi svaki drugi crtež u trezoru koji se povezuje na ovaj: promijenite osnovni plan i znate koje listove treba provjeriti.

## Revizija na listu

Kada je crtež otvoren (i sadrži raspored), izaberite {{ui:Blok revizija}}: tabela objavljenih revizija crta se u gornjem desnom uglu lista. Izaberite {{ui:Popuni naslovne blokove}} da popunite atribute naslovnog bloka označene `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ili `APPROVED_BY` revizijom, stanjem, datumom i odobravaocem datoteke. Kada odobrite sljedeću objavu, blok revizije se ažurira.

## 7. Šta Ben vidi dok vi držite datoteku

Sada ponovo odjavite datoteku, pa zamolite Bena da otvori isti projektni folder na svom računaru i otvori panel. U redu datoteke vidi **Odjavljeno: Ana** na vašem računaru **od** tog vremena, i nema dugmeta {{ui:Odjavi}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sistem neće napraviti dvaput, pa dvije osobe ne mogu istovremeno držati datoteku, čak ni u istoj sekundi, kada je folder na disku u Studiju. (U pregledaču folder dopušta samo najbolji mogući pokušaj, a panel to kaže pod **Folder**.)

Ako Ana nije tu, a Benu treba datoteka, {{ui:Prekini odjavu}} je oslobađa. On mora upisati razlog; ide u dnevnik uz to čija je bila odjava. Kada projekat navodi administratore, samo oni mogu. Odjava starija od granice zastarjelosti (podrazumijevano 14 dana) označava se kao *dugo*. Nakon prekida, Anina zakašnjela prijava se odbija, pa ne možete prepisati jedno drugo.

## 8. Folderi u oblaku

Folder u oblaku je projektni folder čuvan u oblačnom skladištu vašeg tima, pa timu ne treba zajednički disk. U Studiju, prijavljeni na vaš CadCraft račun, panel prikazuje {{ui:Otvori cloud folder}} pored {{ui:Izaberi projektni folder}}. Izaberite ga i odaberite folder, naveden kao radni prostor / folder. Vlasnik radnog prostora prvo pravi folder, a oblačno skladište tima mora biti aktivno. Sve gore radi isto; server pravi zaključavanje, koje je strogo među ljudima. Ako niste prijavljeni, panel traži da se prijavite. U običnoj kartici pregledača dugme za oblak se ne nudi; koristite Studio.

## Probajte

Uradite osam koraka iznad s kopijom pravog fajla. Za korake s dvije osobe trebate drugu osobu, ili dva prozora s dva imena. Ako to probate sa pravim zajedničkim folderom, stranica Community testing navodi provjeru koja traži upravo ovo, i prihvata rezultate.
