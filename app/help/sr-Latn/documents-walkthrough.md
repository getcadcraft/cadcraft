---
title: Dokumenti i revizije (trezor)
summary: Korak po korak kroz jedan pravi posao: stavi projektnu fasciklu pod kontrolu, preuzmi crtež, izmeni ga, vrati ga sa napomenom, pošalji na pregled, odobri i objavi, pogledaj istoriju i ko ga koristi, šta drugi vidi dok je zaključan i kako radi sa fasciklama u oblaku.
keywords: trezor, dokumenti, vodič, obuka, preuzmi, vrati, revizija, objavljivanje, odobravanje, zaključavanje, istorija, gde se koristi, fascikla u oblaku, projektna fascikla, upravljanje dokumentima, pdm, dvoje ljudi, deljena fascikla
from: 3829528d
---

## Šta ćeš uraditi

Ti si Ana, radiš na projektu Riverside Clinic sa kolegom Benom. Crteži projekta žive u jednoj fascikli kojoj oboje imate pristup (deljeni disk, sinhronizovana fascikla ili fascikla u oblaku). Do kraja, jedna datoteka je prešla put od prve kopije do objavljene revizije **A**, promenjena je opet kao **B.1**, videćeš ko je šta uradio, i videćeš šta Ben vidi dok ti držiš datoteku.

Sve se čuva u skrivenoj fascikli `.ccvault` pored tvojih datoteka: nema servera, ništa se ne otprema (fascikla u oblaku je izuzetak, vidi poslednji korak). Za svaki taster i pravilo na jednom mestu, vidi temu *Dokumenti: preuzimanje, revizije i objavljivanje* tamo gde je tvoja aplikacija ima.

## 1. Postavi projektnu fasciklu

1. Izaberi {{ui:Dokumenti…}} u meniju {{ui:Više}} na kartici **Pogled**, ili ukucaj `DOCUMENTS` (ili `DOCS`) i pritisni {{key:Enter}}.
2. Izaberi {{ui:Izaberi projektnu fasciklu}} i izaberi fasciklu koja sadrži crteže projekta. (Projektne fascikle rade u Studiju i u pregledačima koji mogu da otvore fasciklu, na primer Chrome i Edge. U drugim pregledačima panel to kaže.)
3. Izaberi {{ui:Promeni}} pored **Ti:** i ukucaj svoje ime, `Ana` (ako pita, i ime ovog računara). Panel sada kaže *Ti: Ana na* i tvoj računar. Tvoje ime ide uz sve što radiš.
4. Izaberi {{ui:Napravi trezor u ovoj fascikli}} i ukucaj ime projekta, `Riverside clinic`. Panel kaže *Trezor je pokrenut za Riverside clinic.*

## 2. Stavi datoteku pod kontrolu

1. Otvori **Datoteke van trezora** i izaberi {{ui:Dodaj (A)}} pored `plans/A-101.dxf`.
2. Pojavljuje se pod **Datoteke u trezoru** na reviziji **A.1**, stanje **U radu**. A.1 je njena prva kopija: trezor čuva kopiju svake revizije.

## 3. Preuzmi, izmeni, vrati

1. Izaberi {{ui:Otvori}} pored `plans/A-101.dxf`. Crtež se otvara u CadCraft-u, a panel se zatvara da možeš da ga vidiš. Panel je i dalje jedna komanda udaljen: `DOCUMENTS`.
2. Otvori panel ponovo i izaberi {{ui:Preuzmi}}. Red sada glasi **Preuzeto tebi**. Napravljena je datoteka za zaključavanje u `.ccvault/locks`; niko drugi ne može da preuzme ovu datoteku dok je ti ne vratiš.
3. Nacrtaj nešto: dodaj liniju, pomeri zid. Ništa što uradiš ne može se sačuvati preko datoteke trezora osim ako je crtež preuzet tebi; Sačuvaj kao uvek radi za kopiju tvoje sopstvene.
4. Otvori panel, izaberi {{ui:Vrati}} i ukucaj šta je promenjeno (`Moved the door`). Panel kaže *vraćeno kao A.2*. Datoteka u projektnoj fascikli je sada crtež koji si imao otvoren, a zaključavanje je nestalo. Vraćanje bez promene zadržava reviziju.

Ako si se predomislio, {{ui:Opozovi preuzimanje}} vraća datoteku bez nove revizije.

## 4. Pregled i objavljivanje

1. Izaberi {{ui:Pošalji na pregled}}. Stanje postaje **Za pregled**, a datoteka je samo za čitanje.
2. Pre odobravanja, izaberi {{ui:Podešavanja projekta}} i navedi ko može da odobri (jedno ime po redu), na primer `Ben` i `Carla`, i označi pravilo da odobravalac mora biti neko drugi, a ne autor. Izaberi {{ui:Sačuvaj podešavanja}}. Sada trezor sam odbija svakog drugog.
3. Ben (ili Carla) izabere {{ui:Odobri}} i ukuca ime odobravaoca. Stanje postaje **Objavljeno**, a revizija postaje **A**, uz *odobrio* i ime. Objavljena datoteka je samo za čitanje. {{ui:Vrati pošiljaocu}} bi je vratilo u U radu, uz razlog.

Ime odobravaoca je ime upisano u panel; to je zapis o tome ko je potpisao, a ne dokaz identiteta.

## 5. Nova revizija

1. Na objavljenoj datoteci izaberi {{ui:Nova revizija}}. Držiš je za sledeće slovo.
2. Izmeni je, pa {{ui:Vrati}}. Revizija je **B.1**, u radu. Objavi je na isti način i postaje **B**. {{ui:Opozovi preuzimanje}} pre prvog vraćanja ostavlja je na **A**.

Slova revizija idu A, B … Z, AA, AB. Ako tvoj standard preskače neka slova, podešavanje projekta *Koristi ASME Y14.35 niz* preskače I, O, Q, S, X i Z za sledeće revizije.

## 6. Pogledaj šta se desilo

Izaberi ime datoteke da otvoriš njene detalje:

- **{{ui:Istorija}}**: svaki događaj, najnoviji prvi, sa tim ko, na kom računaru i kada: *Vraćeno kao A.2* od Ane, *Objavljeno* od Bena, i tako dalje.
- **{{ui:Revizije}}**: tabela revizija. {{ui:Otvori kopiju}} otvara reviziju kao običnu kopiju koja ne može da prepiše datoteku trezora; {{ui:Uporedi sa}} navodi šta je dodato, uklonjeno i promenjeno u odnosu na prethodnu reviziju ili bilo koju drugu.
- **{{ui:Koristi}}**: crteži na koje se povezuje (xref-ovi).
- **{{ui:Koristi ga}}**: navodi svaki drugi crtež u trezoru koji se povezuje sa ovim: promeni osnovni plan i znaš koje listove treba proveriti.

## Revizija na listu

Sa otvorenim crtežom (i sa rasporedom u njemu), izaberi {{ui:Blok revizije}}: tabela objavljenih revizija crta se u gornjem desnom uglu lista. Izaberi {{ui:Popuni naslovne blokove}} da popuniš atribute naslovnog bloka označene sa `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ili `APPROVED_BY` revizijom, stanjem, datumom i odobravaocem datoteke. Kada odobriš sledeće objavljivanje, blok revizije se ažurira.

## 7. Šta Ben vidi dok ti držiš datoteku

Sada ponovo preuzmi datoteku, pa zamoli Bena da otvori istu projektnu fasciklu na svom računaru i otvori panel. U redu te datoteke on vidi **Preuzeo Ana na** tvoj računar **od** vremena, i nema dugmeta {{ui:Preuzmi}}. Ako ipak pokuša, trezor odbija: zaključavanje je datoteka koju sistem neće napraviti dvaput, pa dvoje ljudi ne mogu oboje držati datoteku, čak ni u istom delu sekunde, kada je fascikla na disku u Studiju. (U pregledaču fascikla pruža samo najbolji pokušaj, a panel to kaže pod **Fascikla**.)

Ako je Ana odsutna, a Benu treba datoteka, {{ui:Prekini preuzimanje}} je oslobađa. On mora ukucati razlog; ide u dnevnik uz to čije je bilo preuzimanje. Kada projekat navodi administratore, samo oni mogu. Preuzimanje starije od roka zastarevanja (podrazumevano 14 dana) označava se kao *dugo*. Posle prekida, Anino kasno vraćanje se odbija, pa vas dvoje ne možete prepisati jedno drugo.

## 8. Fascikle u oblaku

Fascikla u oblaku je projektna fascikla koja se čuva u skladištu oblaka tvog tima, pa tim ne treba deljeni disk. U Studiju, prijavljen na svoj CadCraft nalog, panel pored {{ui:Izaberi projektnu fasciklu}} prikazuje {{ui:Otvori fasciklu u oblaku}}. Izaberi je i izaberi fasciklu, navedenu kao radni prostor / fascikla. Vlasnik radnog prostora prvo pravi fasciklu, a skladište oblaka tima mora biti aktivno. Sve gore radi isto; server pravi zaključavanje, koje je strogo među ljudima. Ako nisi prijavljen, panel to kaže i traži prijavu. U običnim karticama pregledača dugme za oblak se ne nudi; koristi Studio.

## Probaj

Uradi osam koraka iznad sa kopijom pravog fajla. Za korake sa dvoje ljudi potrebna ti je druga osoba, ili dva prozora sa dva imena. Ako to probaš sa pravom deljenom fasciklom, stranica Community testiranje navodi proveru koja traži upravo ovo i prima rezultate.
