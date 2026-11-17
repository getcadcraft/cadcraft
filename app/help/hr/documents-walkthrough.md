---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan stvarni posao: stavite mapu projekta pod kontrolu, uzmite crtež na uređivanje, promijenite ga, vratite ga s napomenom, pošaljite na pregled, odobrite i izdajte, pogledajte povijest i što ga koristi, što druga osoba vidi dok je zaključan i kako radi s mapama u oblaku.
keywords: trezor, dokumenti, vodič, uzimanje na uređivanje, vraćanje u trezor, revizija, izdanje, odobravanje, zaključavanje, povijest, gdje se koristi, mapa u oblaku, mapa projekta, upravljanje dokumentima, pdm, dvije osobe, zajednička mapa
from: 3829528d
---

## Što ćete raditi

Vi ste Ana i radite na klinici Riverside s kolegom Benom. Crteži projekta nalaze se u jednoj mapi kojoj oboje pristupate (zajednički disk, sinkronizirana mapa ili mapa u oblaku). Do kraja jedna datoteka prolazi od prve kopije do izdane revizije **A**, promijenjena je ponovno kao **B.1**, vidjeli ste tko je što radio i što Ben vidi dok vi držite datoteku.

Sve se čuva u skrivenoj mapi `.ccvault` pokraj vaših datoteka: bez poslužitelja, ništa se ne učitava (mapa u oblaku je iznimka, vidi zadnji korak). Za svaki gumb i pravilo na jednom mjestu vidi temu *Dokumenti: uzimanje na uređivanje, revizije i izdanje* tamo gdje je vaša aplikacija ima.

## 1. Postavite mapu projekta

1. Odaberite {{ui:Dokumenti…}} u izborniku {{ui:Više}} kartice **Prikaz**, ili upišite `DOCUMENTS` (ili `DOCS`) i pritisnite {{key:Enter}}.
2. Odaberite {{ui:Odaberite mapu projekta}} i izaberite mapu koja sadrži crteže projekta. (Mape projekta rade u Studiju i u preglednicima koji mogu otvoriti mapu, kao Chrome i Edge. U drugim preglednicima panel to kaže.)
3. Odaberite {{ui:Promijeni}} pokraj **Vi:** i upišite svoje ime, `Ana` (ako pita, i ime ovog računala). Panel sada kaže *Vi: Ana na* i vaše računalo. Vaše ime ide uz sve što radite.
4. Odaberite {{ui:Pokreni trezor u ovoj mapi}} i upišite naziv projekta, `Riverside clinic`. Panel kaže *Trezor je pokrenut za Riverside clinic.*

## 2. Stavite datoteku pod kontrolu

1. Otvorite **Datoteke koje nisu u trezoru** i odaberite {{ui:Dodaj (A)}} pokraj `plans/A-101.dxf`.
2. Pojavljuje se pod **Datoteke u trezoru** u reviziji **A.1**, stanje **U radu**. A.1 je njezina prva kopija; trezor čuva kopiju svake revizije.

## 3. Uzmite na uređivanje, promijenite, vratite

1. Odaberite {{ui:Otvori}} pokraj `plans/A-101.dxf`. Crtež se otvara u CadCraft-u, a panel se zatvara da ga vidite. Panel je i dalje jedna naredba daleko: `DOCUMENTS`.
2. Otvorite panel ponovno i odaberite {{ui:Uzmi na uređivanje}}. Redak sada kaže **Uzeto na uređivanje vama**. Datoteka zaključavanja napravljena je u `.ccvault/locks`; nitko drugi ne može uzeti ovu datoteku na uređivanje dok je ne vratite.
3. Nacrtajte nešto: dodajte liniju, pomaknite zid. Ništa što napravite ne može se spremiti preko datoteke trezora osim ako je crtež uzet na uređivanje vama; Spremi kao uvijek radi za vašu vlastitu kopiju.
4. Otvorite panel, odaberite {{ui:Vrati u trezor}} i upišite što se promijenilo (`Pomaknuta vrata`). Panel kaže *vraćeno kao A.2*. Datoteka u mapi projekta sada je crtež koji ste imali otvoren, a zaključavanje je nestalo. Vraćanje bez promjene zadržava reviziju.

Ako se predomislite, {{ui:Poništi uzimanje}} vraća datoteku bez nove revizije.

## 4. Pregled i izdanje

1. Odaberite {{ui:Pošalji na pregled}}. Stanje postaje **Na pregledu** i datoteka je samo za čitanje.
2. Prije odobravanja odaberite {{ui:Postavke projekta}} i navedite tko smije odobriti (jedno ime po retku), na primjer `Ben` i `Carla`, te označite pravilo da odobravatelj mora biti netko drugi od autora. Odaberite {{ui:Spremi postavke}}. Sada sam trezor odbija svakoga drugog.
3. Ben (ili Carla) odabire {{ui:Odobri}} i upisuje ime odobravatelja. Stanje postaje **Izdano**, a revizija **A**, uz *odobrio* i ime. Izdana datoteka je samo za čitanje. {{ui:Vrati na doradu}} bi je vratilo u U radu, s razlogom.

Ime odobravatelja je ime upisano u panelu; ono je zapis tko je potpisao, a ne dokaz identiteta.

## 5. Nova revizija

1. Na izdanoj datoteci odaberite {{ui:Nova revizija}}. Držite je za sljedeće slovo.
2. Promijenite je, zatim {{ui:Vrati u trezor}}. Revizija je **B.1**, u radu. Izdajte je na isti način i postaje **B**. {{ui:Poništi uzimanje}} prije prvog vraćanja ostavlja je na **A**.

Revizijska slova idu A, B … Z, AA, AB. Ako vaš standard izostavlja neka slova, postavka projekta *Koristi slijed ASME Y14.35* preskače I, O, Q, S, X i Z za sljedeće revizije.

## 6. Pogledajte što se dogodilo

Odaberite ime datoteke da otvorite njezine pojedinosti:

- **{{ui:Povijest}}**: svaki događaj, najnoviji prvi, s tim tko, na kojem računalu i kada: *Vraćeno kao A.2* od Ane, *Izdano* od Bena, i tako dalje.
- **{{ui:Revizije}}**: tablica revizija. {{ui:Otvori kopiju}} otvara reviziju kao običnu kopiju koja ne može prepisati datoteku trezora; {{ui:Usporedi s}} navodi što je dodano, uklonjeno i promijenjeno u odnosu na prethodnu reviziju ili bilo koju drugu.
- **{{ui:Koristi}}**: crteži na koje ona povezuje (vanjske reference).
- **{{ui:Koristi ga}}**: navodi svaki drugi crtež u trezoru koji povezuje na ovaj: promijenite osnovni plan i znate koje listove treba provjeriti.

## Revizija na listu

S otvorenim crtežom (i uz raspored u njemu) odaberite {{ui:Blok revizija}}: tablica izdanih revizija crta se u gornjem desnom kutu lista. Odaberite {{ui:Ispuni zaglavlja}} da ispunite atribute zaglavlja označene `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ili `APPROVED_BY` revizijom datoteke, stanjem, datumom i odobravateljem. Kad odobrite sljedeće izdanje, blok revizija se ažurira.

## 7. Što Ben vidi dok vi držite datoteku

Sada ponovno uzmite datoteku na uređivanje i zamolite Bena da otvori istu mapu projekta na svom računalu i otvori panel. U retku datoteke vidi **Na uređivanju kod: Ana** na vašem računalu **od** vremena, i nema gumba {{ui:Uzmi na uređivanje}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sustav neće napraviti dvaput, pa dvije osobe ne mogu obje držati datoteku, čak ni u istoj sekundi, kad je mapa na disku u Studiju. (U pregledniku mapa dopušta samo najbolje moguće, a panel to kaže pod **Mapa**.)

Ako je Ana odsutna i Benu treba datoteka, {{ui:Prekini uzimanje}} je oslobađa. Mora upisati razlog; ide u dnevnik uz to čije je uzimanje bilo. Kad projekt navodi administratore, samo oni to mogu. Uzimanje starije od ograničenja zastarjelosti (zadano 14 dana) označava se kao *dugo*. Nakon prekida, Anino kasno vraćanje se odbija, pa se vas dvoje ne možete prepisati.

## 8. Mape u oblaku

Mapa u oblaku je mapa projekta pohranjena u pohrani oblaka vašeg tima, pa timu ne treba zajednički disk. U Studiju, prijavljeni na svoj CadCraft račun, panel pokazuje {{ui:Otvori mapu u oblaku}} pokraj {{ui:Odaberite mapu projekta}}. Odaberite je i izaberite mapu, navedenu kao radni prostor / mapa. Vlasnik radnog prostora prvo pravi mapu, a pohrana oblaka tima mora biti aktivna. Sve gore radi jednako; poslužitelj pravi zaključavanje, koje je strogo među ljudima. Ako niste prijavljeni, panel kaže da se prijavite. U običnoj kartici preglednika gumb za oblak se ne nudi; koristite Studio.

## Isprobajte

Napravite osam koraka gore s kopijom stvarne datoteke. Za korake s dvije osobe trebate drugu osobu ili dva prozora s dva imena. Ako to isprobate sa stvarnom zajedničkom mapom, stranica za testiranje zajednice ima provjeru koja traži upravo to i prima rezultate.
