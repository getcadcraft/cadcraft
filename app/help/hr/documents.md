---
title: Dokumenti: uzimanje na uređivanje, revizije i izdanje
summary: Držite crteže mape projekta pod kontrolom: uzmite datoteku na uređivanje da je nitko drugi ne mijenja, vratite je kao novu reviziju, pošaljite na pregled i izdajte uz ime odobravatelja; povijest, što šta koristi, sastavnica i zaglavlja koja prikazuju reviziju.
keywords: postavke projekta, odobravatelji, administratori, oznake revizija, ASME, samo za čitanje, usporedba revizija, otvori kopiju, partcraft, bimcraft, documents, DOCUMENTS, DOCS, trezor, upravljanje dokumentima, pdm, uzmi na uređivanje, vrati u trezor, checkout, checkin, zaključaj, revizija, rev, oznaka revizije, izdanje, izdano, odobri, odobrenje, pregled, zastarjelo, gdje se koristi, bom, sastavnica, zaglavlje, blok revizija, mapa projekta
from: ee938722
---

## Što ćete izraditi

Mapu projekta u kojoj svaki crtež ima reviziju (A.1, A.2 … pa A, B …) i stanje (U radu, Na pregledu, Izdano, Zastarjelo), u kojoj samo jedna osoba istodobno može mijenjati datoteku i u kojoj se svako uzimanje na uređivanje, vraćanje, odobrenje i prekinuto uzimanje bilježe s imenom osobe koja ga je izvela i vremenom.

Sve se čuva u samoj mapi, u skrivenoj mapi `.ccvault` uz vaše crteže. Mapa na zajedničkom disku ili sinkronizirana mapa radi za cijeli tim. Nema poslužitelja i ništa se ne učitava na mrežu.

## Otvorite Dokumente

Upišite `DOCUMENTS` (ili `DOCS`) i pritisnite {{key:Enter}}. Ploča se otvara pored crteža.

Odaberite {{ui:Odaberite mapu projekta}} i odaberite mapu koja sadrži crteže projekta. Mape projekta rade u CadCraft Studiju i u preglednicima koji mogu otvoriti mapu (Chrome, Edge). U drugim preglednicima ploča to navodi.

Prvi put upišite svoje ime (ono ide uz sve što radite) i naziv ovog računala. Ako ste prijavljeni, vaše je ime već upisano.

## Pokrenite trezor

Mapa koja još nije trezor nudi {{ui:Pokreni trezor u ovoj mapi}}. Upišite naziv projekta. Zatim otvorite {{ui:Datoteke koje nisu u trezoru}} i odaberite {{ui:Dodaj (A)}} pored svake datoteke koju želite staviti pod kontrolu. Datoteka koju dodate počinje s revizijom **A.1**, U radu.

## Promjena crteža

1. Odaberite {{ui:Otvori}} pored crteža. Otvara se u CadCraftu. Ako nije uzet na uređivanje na vaše ime, samo ga pogledajte i ne mijenjajte: Spremi odbija prepisati datoteku i kaže zašto (upotrijebite Spremi kao da biste zadržali vlastitu kopiju).
2. Odaberite {{ui:Uzmi na uređivanje}}. Nitko drugi sada ga ne može uzeti; ploča prikazuje tko ga ima, na kojem računalu i od kada.
3. Crtajte.
4. Odaberite {{ui:Vrati u trezor}} i opišite što je promijenjeno. Otvoreni crtež sprema se u mapu projekta u svom formatu i postaje sljedeća revizija (A.1, zatim A.2). Vraćanje bez promjene zadržava reviziju.

{{ui:Poništi uzimanje}} vraća datoteku bez nove revizije.

## Pregled i izdanje

- {{ui:Pošalji na pregled}}: datoteka je tijekom pregleda samo za čitanje.
- {{ui:Odobri}}: upišite ime odobravatelja. A.3 postaje **A**, Izdano. Izdane datoteke su samo za čitanje.
- {{ui:Vrati na doradu}}: vraća u U radu, uz razlog.
- {{ui:Nova revizija}} na izdanoj datoteci uzima je na uređivanje za sljedeće slovo: njezino prvo vraćanje je **B.1**. {{ui:Poništi uzimanje}} prije toga ostavlja je na A.
- {{ui:Označi zastarjelim}} povlači izdanu datoteku.

Projekt može voditi popis onih koji smiju odobravati i može zahtijevati da odobravatelj nije osoba koja je datoteku vratila u trezor (vidi Postavke projekta u nastavku).

## Postavke projekta

Otvorite {{ui:Postavke projekta}} u ploči:

- **Odobravatelji**: jedno ime po retku. Kad ih ima, samo oni mogu odobriti izdanje.
- **Odobravatelj mora biti netko drugi, a ne autor**: pravilo „četiri oka“.
- **Administratori**: jedno ime po retku. Kad ih ima, samo oni mogu prekinuti tuđe uzimanje na uređivanje ili mijenjati ove postavke.
- **Oznake revizija koje se izostavljaju**: {{ui:Koristi niz ASME Y14.35}} preskače I, O, Q, S, X i Z, ili upišite vlastita slova. Već dodijeljena slova ostaju; izbor se primjenjuje na sljedeće revizije.
- **Uzimanje na uređivanje smatra se zastarjelim nakon**: broj dana (prema zadanom 14).

Odaberite {{ui:Spremi postavke}}. Promjena se upisuje u dnevnik s imenom osobe koja ju je napravila.

## Datoteku je netko ostavio uzetu na uređivanje

{{ui:Prekini uzimanje}} oslobađa datoteku koju je netko drugi uzeo na uređivanje (odsutan je ili mu se računalo pokvarilo). Morate upisati razlog: upisuje se u dnevnik uz ime osobe čije je uzimanje bilo. Kad projekt ima administratore, samo oni to mogu učiniti. Uzimanje starije od 14 dana označava se kao dugotrajno.

## Povijest, revizije, korištenja, koristi ga

Odaberite naziv datoteke da biste vidjeli:

- {{ui:Povijest}}: svaki događaj, najnoviji prvi, s osobom, računalom i vremenom.
- {{ui:Revizije}}: svaka sačuvana revizija. Kopija svake revizije nalazi se u trezoru (isti sadržaj čuva se jednom). {{ui:Otvori kopiju}} otvara tu reviziju kao običnu kopiju koja ne može prepisati datoteku u trezoru. {{ui:Usporedi s}} navodi što je dodano, uklonjeno i promijenjeno između te revizije i prethodne (ili bilo koje druge koju odaberete) i boji to na crtežu.
- {{ui:Koristi}}: crteži na koje se povezuje (Xref), dokumenti na koje pokazuje IFC model, dijelovi PartCraft sklopa.
- {{ui:Koristi ga}}: svaka datoteka u trezoru koja koristi ovu.

{{ui:Sastavnica (CSV)}} sprema popis svega što datoteka koristi, po razinama, s količinama, revizijama i stanjima, za proračunsku tablicu.

## Blok revizija na listu

Otvorite crtež koji ima layout i odaberite {{ui:Blok revizija}}. Tablica izdanih revizija (revizija, datum, tko, odobreno, opis) crta se u gornjem desnom kutu lista koji gledate. Kad odobrite izdanje, tablica se ažurira.

## Revizija u zaglavlju crteža

Dodijelite atributima svog zaglavlja jednu od ovih oznaka i odaberite {{ui:Ispuni zaglavlja}} na otvorenom crtežu:

| Oznaka | Ispunjava se |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revizijom (B, ili B.2 dok se radi na njoj) |
| `VAULT.STATE` | stanjem (Izdano …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datumom posljednje revizije |
| `VAULT.APPROVER`, `APPROVED_BY` | tko je odobrio posljednje izdanje |

## PartCraft i BimCraft

PartCraft i BimCraft imaju istu ploču Dokumenti za svoje datoteke: dijelove i sklopove u PartCraftu, IFC modele u BimCraftu. Vraćanje u trezor sprema otvoreni model u mapu projekta, a sklop pokazuje koje dijelove koristi i sastavnicu.

## Dobro je znati

- Dvije osobe na istoj zajedničkoj mapi ne mogu obje uzeti datoteku na uređivanje: uzimanje je datoteka koju sustav odbija napraviti dvaput. U pregledniku i u Studiju čija je ljuska starija od ove značajke, to je koliko mapa dopušta: dva uzimanja u istoj djelić sekunde mogla bi oba uspjeti. Ploča navodi koje se primjenjuje.
- Nemojte ručno uređivati ili brisati mapu `.ccvault`. Dnevnik u njoj je zapis; trezor po potrebi ponovno gradi svoj popis iz njega.
- Promjena datoteke u mapi bez uzimanja na uređivanje prikazuje se kao {{ui:Promijenjeno u mapi bez uzimanja na uređivanje}}.
