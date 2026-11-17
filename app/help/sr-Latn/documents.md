---
title: Dokumenti: preuzimanje, revizije i izdavanje
summary: Držite crteže projektne fascikle pod kontrolom: preuzmite datoteku da je niko drugi ne menja, vratite je kao novu reviziju, pošaljite na pregled i izdajte uz ime odobravaoca; istorija, šta koristi šta, specifikacija materijala i naslovni blokovi koji prikazuju reviziju.
keywords: podešavanja projekta, odobravaoci, administratori, slova revizija, ASME, samo za čitanje, uporedi revizije, otvori kopiju, partcraft, bimcraft, dokumenti, DOCUMENTS, DOCS, trezor, upravljanje dokumentima, pdm, preuzimanje, vraćanje, checkout, checkin, zaključavanje, revizija, rev, slovo revizije, izdanje, izdato, odobravanje, odobrenje, pregled, zastarelo, gde se koristi, bom, specifikacija materijala, naslovni blok, blok revizije, projektna fascikla
from: ee938722
---

## Šta ćete napraviti

Projektna fascikla u kojoj svaki crtež ima reviziju (A.1, A.2 … pa A, B …) i stanje (U radu, Za pregled, Izdato, Zastarelo), u kojoj samo jedna osoba istovremeno može da menja datoteku i u kojoj se svako preuzimanje, vraćanje, odobrenje i prekinuto preuzimanje zapisuje sa tim ko ga je uradio i kada.

Sve se čuva u samoj fascikli, u skrivenoj fascikli `.ccvault` pored vaših crteža. Fascikla na deljenom disku ili sinhronizovana fascikla radi za ceo tim. Nema servera i ništa se ne otprema.

## Otvorite Dokumente

Otkucajte `DOCUMENTS` (ili `DOCS`) i pritisnite {{key:Enter}}. Panel se otvara pored crteža.

Izaberite {{ui:Choose the project folder}} i izaberite fasciklu koja sadrži crteže projekta. Projektne fascikle rade u CadCraft Studiu i u pregledačima koji mogu da otvore fasciklu (Chrome, Edge). U drugim pregledačima panel to kaže.

Prvi put otkucajte svoje ime (ide uz sve što uradite) i ime ovog računara. Ako ste prijavljeni, vaše ime je već tu.

## Napravite trezor

Fascikla koja još nije trezor nudi {{ui:Start a vault in this folder}}. Otkucajte ime projekta. Zatim otvorite {{ui:Datoteke koje nisu u trezoru}} i izaberite {{ui:Add}} pored svake datoteke koju želite da stavite pod kontrolu. Datoteka koju dodate kreće od revizije **A.1**, U radu.

## Izmenite crtež

1. Izaberite {{ui:Open}} pored crteža. Otvara se u CadCraft-u. Ako nije preuzet na vaše ime, samo ga pogledajte i ne menjajte: Sačuvaj odbija da prepiše preko njega i kaže zašto (koristite Sačuvaj kao da biste sačuvali sopstvenu kopiju).
2. Izaberite {{ui:Check out}}. Niko drugi sada ne može da ga preuzme; panel pokazuje ko ga ima, na kom računaru i od kada.
3. Crtajte.
4. Izaberite {{ui:Check in}} i opišite šta je promenjeno. Crtež koji imate otvoren sačuva se u projektnu fasciklu u sopstvenom formatu i postaje sledeća revizija (A.1, pa A.2). Vraćanje bez promene zadržava reviziju.

{{ui:Undo check-out}} vraća datoteku bez nove revizije.

## Pregled i izdavanje

- {{ui:Send for review}}: datoteka je samo za čitanje dok se pregleda.
- {{ui:Approve}}: otkucajte ime odobravaoca. A.3 postaje **A**, Izdato. Izdate datoteke su samo za čitanje.
- {{ui:Send back}}: vraća u U radu, uz razlog.
- {{ui:New revision}} nad izdatom datotekom preuzima je za sledeće slovo: njeno prvo vraćanje je **B.1**. {{ui:Undo check-out}} pre toga ostavlja je na A.
- {{ui:Make obsolete}} povlači izdatu datoteku.

Projekat može da vodi spisak onih koji smeju da odobravaju i može da zahteva da odobravalac nije osoba koja je datoteku vratila (vidi Podešavanja projekta niže).

## Podešavanja projekta

Otvorite {{ui:Project settings}} u panelu:

- **Odobravaoci**: jedno ime po redu. Kad ih ima, samo oni mogu da odobre izdanje.
- **Odobravalac mora biti neko drugi, a ne autor**: pravilo „četiri oka".
- **Administratori**: jedno ime po redu. Kad ih ima, samo oni mogu da prekinu tuđe preuzimanje ili da menjaju ova podešavanja.
- **Slova revizija koja se preskaču**: {{ui:Use the ASME Y14.35 sequence}} preskače I, O, Q, S, X i Z, ili upišite sopstvena slova. Slova koja su već data ostaju; izbor važi za sledeće revizije.
- **Preuzimanje se smatra zastarelim posle**: broj dana (podrazumevano 14).

Izaberite {{ui:Save settings}}. Promena se upisuje u dnevnik sa imenom onoga ko ju je napravio.

## Neko je ostavio datoteku preuzetu

{{ui:Break check-out}} oslobađa datoteku koju je neko drugi preuzeo (odsutan je ili mu je računar otkazao). Morate da otkucate razlog: upisuje se u dnevnik zajedno sa tim čije je preuzimanje bilo. Kad projekat ima administratore, samo oni to mogu. Preuzimanje starije od 14 dana označeno je kao dugotrajno.

## Istorija, revizije, upotreba, korišćeno od

Izaberite ime datoteke da vidite:

- {{ui:History}}: svaki događaj, najnoviji prvi, sa tim ko, na kom računaru i kada.
- {{ui:Revisions}}: svaka sačuvana revizija. Kopija svake revizije nalazi se u trezoru (isti sadržaj se čuva jednom). {{ui:Open copy}} otvara tu reviziju kao običnu kopiju koja ne može da prepiše datoteku u trezoru. {{ui:Compare with}} navodi šta je dodato, uklonjeno i promenjeno između te revizije i prethodne (ili bilo koje druge koju izaberete), i boji to na crtežu.
- {{ui:Uses}}: crteži na koje se povezuje (xref-ovi), dokumenti na koje pokazuje IFC model, delovi PartCraft sklopa.
- {{ui:Used by}}: svaka datoteka u trezoru koja koristi ovu.

{{ui:Bill of materials (CSV)}} čuva spisak svega što datoteka koristi, nivo po nivo, sa količinama, revizijama i stanjima, za tabelarni program.

## Blok revizije na listu

Sa otvorenim crtežom koji ima raspored, izaberite {{ui:Revision block}}. Tabela izdatih revizija (revizija, datum, ko, odobreno, opis) crta se u gornjem desnom uglu lista koji gledate. Kad odobrite izdanje, tabela se ažurira.

## Revizija u naslovnom bloku

Dajte atributima svog naslovnog bloka jednu od ovih oznaka i izaberite {{ui:Fill title blocks}} na otvorenom crtežu:

| Oznaka | Popunjava se |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revizijom (B, ili B.2 dok se radi) |
| `VAULT.STATE` | stanjem (Izdato …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datumom poslednje revizije |
| `VAULT.APPROVER`, `APPROVED_BY` | imenom onoga ko je odobrio poslednje izdanje |

## PartCraft i BimCraft

PartCraft i BimCraft imaju isti panel Dokumenti za svoje datoteke: delovi i sklopovi u PartCraft-u, IFC modeli u BimCraft-u. Vraćanje čuva model koji je otvoren u projektnu fasciklu, a sklop pokazuje koje delove koristi i specifikaciju materijala.

## Dobro je znati

- Dvoje ljudi na istoj deljenoj fascikli ne mogu oboje da preuzmu datoteku: preuzimanje je datoteka koju sistem ne dozvoljava da napravi dvaput. U pregledaču, i u Studiju čija je ljuska starija od ove funkcije, ovo je onoliko strogo koliko fascikla dozvoljava: dva preuzimanja u istoj deliću sekunde mogla bi oba da uspeju. Panel kaže koje se primenjuje.
- Nemojte ručno menjati ni brisati fasciklu `.ccvault`. Dnevnik u njoj je zapis; trezor sam obnavlja svoj spisak iz njega ako treba.
- Promena datoteke u fascikli bez preuzimanja prikazuje se kao {{ui:Changed in the folder without a check-out}}.
