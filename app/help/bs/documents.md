---
title: Dokumenti: odjava, revizije i izdavanje
summary: Držite crteže projektnog foldera pod kontrolom: odjavite datoteku da je niko drugi ne mijenja, prijavite je kao novu reviziju, pošaljite na pregled i izdajte uz ime odobravatelja; historija, šta koristi šta, specifikacija materijala i naslovni blokovi koji prikazuju reviziju.
keywords: postavke projekta, odobravatelji, administratori, oznake revizija, ASME, samo za čitanje, uporedi revizije, otvori kopiju, partcraft, bimcraft, documents, DOCUMENTS, DOCS, trezor, upravljanje dokumentima, pdm, odjava, prijava, check out, check in, checkout, checkin, zaključavanje, revizija, rev, oznaka revizije, izdavanje, izdato, odobri, odobrenje, pregled, zastarjelo, gdje se koristi, bom, specifikacija materijala, naslovni blok, blok revizija, projektni folder
from: ee938722
---

## Šta ćete napraviti

Projektni folder u kome svaki crtež ima reviziju (A.1, A.2 … pa A, B …) i stanje (U radu, Za pregled, Izdato, Zastarjelo), u kome samo jedna osoba istovremeno može mijenjati datoteku i u kome se svaka odjava, prijava, odobrenje i prekinuta odjava zapisuju uz to ko ju je uradio i kada.

Sve se čuva u samom folderu, u skrivenom folderu `.ccvault` pored vaših crteža. Folder na dijeljenom disku ili sinhronizovani folder radi za cijeli tim. Nema servera i ništa se ne otprema.

## Otvorite Dokumente

Upišite `DOCUMENTS` (ili `DOCS`) i pritisnite {{key:Enter}}. Panel se otvara pored crteža.

Odaberite {{ui:Choose the project folder}} › "Odaberi projektni folder" i izaberite folder koji sadrži crteže projekta. Projektni folderi rade u CadCraft Studiju i u preglednicima koji mogu otvoriti folder (Chrome, Edge). U drugim preglednicima panel to kaže.

Prvi put upišite svoje ime (ide uz sve što radite) i naziv ovog računara. Ako ste prijavljeni, vaše ime je već tu.

## Pokrenite trezor

Folder koji još nije trezor nudi {{ui:Start a vault in this folder}} › "Pokreni trezor u ovom folderu". Upišite naziv projekta. Zatim otvorite {{ui:Files not in the vault}} i odaberite {{ui:Add}} pored svake datoteke koju želite staviti pod kontrolu. Datoteka koju dodate počinje od revizije **A.1**, U radu.

## Promjena crteža

1. Odaberite {{ui:Open}} pored crteža. Otvara se u CadCraft-u. Ako nije odjavljen na vas, samo ga pogledajte, ali ga ne mijenjajte: Spasi odbija da ga prepiše i kaže zašto (koristite Spasi kao da sačuvate vlastitu kopiju).
2. Odaberite {{ui:Check out}}. Niko drugi ga sada ne može odjaviti; panel pokazuje ko ga ima, na kom računaru i od kada.
3. Crtajte.
4. Odaberite {{ui:Check in}} i napišite šta je promijenjeno. Crtež koji imate otvoren spašava se u projektni folder u svom formatu i postaje sljedeća revizija (A.1, pa A.2). Prijava bez promjene zadržava reviziju.

{{ui:Undo check-out}} › "Poništi odjavu" vraća datoteku bez nove revizije.

## Pregled i izdavanje

- {{ui:Send for review}} › "Pošalji na pregled": datoteka je tokom pregleda samo za čitanje.
- {{ui:Approve}} › "Odobri": upišite ime odobravatelja. A.3 postaje **A**, Izdato. Izdate datoteke su samo za čitanje.
- {{ui:Send back}} › "Vrati": vraća se u U radu, uz razlog.
- {{ui:New revision}} › "Nova revizija" na izdatoj datoteci odjavljuje je za sljedeće slovo: njena prva prijava je **B.1**. {{ui:Undo check-out}} prije toga ostavlja je na A.
- {{ui:Make obsolete}} › "Označi kao zastarjelo" povlači izdatu datoteku.

Projekat može čuvati spisak onih koji smiju odobravati i može zahtijevati da odobravatelj nije osoba koja je datoteku prijavila (vidi Postavke projekta niže).

## Postavke projekta

U panelu otvorite {{ui:Project settings}} › "Postavke projekta":

- **Approvers** › "Odobravatelji": jedno ime po redu. Kada ih ima, samo oni mogu odobriti izdavanje.
- **The approver must be someone other than the author**: pravilo "četiri oka". Odobravatelj mora biti neko drugi, a ne autor.
- **Admins** › "Administratori": jedno ime po redu. Kada ih ima, samo oni mogu prekinuti tuđu odjavu ili mijenjati ove postavke.
- **Revision letters to leave out** › "Slova revizija koja se izostavljaju": {{ui:Use the ASME Y14.35 sequence}} › "Koristi ASME Y14.35 niz" preskače I, O, Q, S, X i Z, ili upišite svoja slova. Već data slova ostaju; izbor važi za sljedeće revizije.
- **A check-out counts as stale after** › "Odjava se smatra zastarjelom poslije": broj dana (podrazumijevano 14).

Odaberite {{ui:Save settings}} › "Spasi postavke". Promjena se upisuje u dnevnik uz to ko ju je napravio.

## Neko je ostavio datoteku odjavljenu

{{ui:Break check-out}} › "Prekini odjavu" oslobađa datoteku koju je neko drugi odjavio (odsutan je ili mu se računar pokvario). Morate upisati razlog: upisuje se u dnevnik uz to čija je bila odjava. Kada projekat ima administratore, to mogu samo oni. Odjava starija od 14 dana označava se kao dugo vremena.

## Historija, revizije, upotreba, korišteno u

Odaberite naziv datoteke da vidite:

- {{ui:History}} › "Historija": svaki događaj, najnoviji prvi, uz to ko, na kom računaru i kada.
- {{ui:Revisions}} › "Revizije": svaka sačuvana revizija. Kopija svake revizije nalazi se u trezoru (isti sadržaj se čuva jednom). {{ui:Open copy}} › "Otvori kopiju" otvara tu reviziju kao običnu kopiju koja ne može prepisati datoteku u trezoru. {{ui:Compare with}} › "Uporedi sa" navodi šta je dodano, uklonjeno i promijenjeno između te revizije i prethodne (ili bilo koje druge koju izaberete) i boji to na crtežu.
- {{ui:Uses}} › "Koristi": crteži na koje se povezuje (xref-ovi), dokumenti na koje pokazuje IFC model, dijelovi PartCraft sklopa.
- {{ui:Used by}} › "Koristi ga": svaka datoteka u trezoru koja koristi ovu.

{{ui:Bill of materials (CSV)}} › "Specifikacija materijala (CSV)" čuva spisak svega što datoteka koristi, nivo po nivo, s količinama, revizijama i stanjima, za tabelarni program.

## Blok revizija na listu

Kada je otvoren crtež koji ima raspored, odaberite {{ui:Revision block}} › "Blok revizija". Tabela izdatih revizija (revizija, datum, ko, odobreno, opis) crta se u gornjem desnom uglu lista koji gledate. Kada odobrite izdavanje, tabela se ažurira.

## Revizija u naslovnom bloku

Dajte atributima svog naslovnog bloka jednu od ovih oznaka i odaberite {{ui:Fill title blocks}} › "Popuni naslovne blokove" na otvorenom crtežu:

| Oznaka | Popunjava se sa |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revizijom (B, ili B.2 dok se radi na njoj) |
| `VAULT.STATE` | stanjem (Izdato …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datumom posljednje revizije |
| `VAULT.APPROVER`, `APPROVED_BY` | ko je odobrio posljednje izdavanje |

## PartCraft i BimCraft

PartCraft i BimCraft imaju isti panel Dokumenti za svoje datoteke: dijelovi i sklopovi u PartCraftu, IFC modeli u BimCraftu. Prijava čuva model koji je otvoren u projektni folder, a sklop pokazuje koje dijelove koristi i specifikaciju materijala.

## Dobro je znati

- Dvije osobe na istom dijeljenom folderu ne mogu obje odjaviti istu datoteku: odjava je datoteka koju sistem odbija napraviti dvaput. U preglednicu, i u Studiju čija je ljuska starija od ove funkcije, ovo je onoliko strogo koliko folder dopušta: dvije odjave u istoj djeliću sekunde mogle bi obje uspjeti. Panel kaže koja se primjenjuje.
- Ne mijenjajte i ne brišite folder `.ccvault` ručno. Dnevnik u njemu je zapis; trezor sam ponovo gradi svoj spisak iz njega ako treba.
- Promjena datoteke u folderu bez odjave prikazuje se kao {{ui:Changed in the folder without a check-out}} › "Promijenjeno u folderu bez odjave".
