---
title: Odabir objekata
summary: Odaberite objekte jedan po jedan, prozorom ili križanjem, prije ili tijekom naredbe, i uklonite objekte iz odabira.
keywords: odabir, odabir, prozor, križanje, imenica-glagol, odaberi, sve, zadnji, prethodni, ograda, ukloni, dodaj, tab, kruženje, preklapanje, qselect, brzi odabir, filter, odaberi slične, selectsimilar, shift, poništi odabir, ctrl+a, pickfirst
from: 676508c7
---

## Što ćete naučiti

Kako odabrati objekte na koje naredba djeluje. CadCraft ima dva načina rada, oba su dobra:

- **Prvo odaberite, zatim naredbu** (imenica-glagol). Odaberite objekte, zatim upišite `M` za naredbu Pomakni. Naredba preuzima vaš odabir i odmah prelazi na sljedeće pitanje.
- **Prvo naredbu, zatim odabir** (glagol-imenica). Upišite `M`; naredba pita `Odaberite objekte:`; vi odaberete, zatim pritisnete {{key:Enter}}.

## Odaberite jedan po jedan objekt

1. Bez pokrenute naredbe kliknite liniju. Ona se označi i pojave se njezine ručke (mali kvadratići). Desna ploča prikazuje njezina svojstva.
2. Kliknite drugi objekt. Dodaje se u odabir.
3. Držite {{key:Shift}} i kliknite odabrani objekt. Uklanja se iz odabira.
4. Pritisnite {{key:Esc}}. Ništa nije odabrano.

## Prozor i križanje

Kliknite jednom na prazan prostor, pomaknite se i kliknite opet: dobijete pravokutnik. Pritisak i povlačenje umjesto toga crtaju slobodni laso, s istim dvjema vrstama (vidi [Laso odabir](topic:lasso-selection); Postavke mogu učiniti da povlačenje crta pravokutnik). Koje objekte dobijete ovisi o smjeru:

| Pomičete se | Okvir | Odabire |
|---|---|---|
| Slijeva nadesno | Prozor | Samo objekte **potpuno unutar** okvira |
| Zdesna nalijevo | Križanje | Objekte unutar okvira **i** objekte koje on dotakne |

1. Nacrtajte nekoliko preklapajućih linija i kružnica.
2. Kliknite prazan prostor lijevo od nekih objekata, pomaknite se udesno i kliknite opet. Odabiru se samo objekti potpuno unutar okvira.
3. Pritisnite {{key:Esc}}.
4. Kliknite prazan prostor desno, pomaknite se ulijevo preko nekih objekata i kliknite opet. Odabire se sve što okvir dotakne.
5. Držite {{key:Shift}} i povucite okvir ili laso preko nekih odabranih objekata. Oni izlaze iz odabira.

## Odaberite, zatim pokrenite naredbu

1. Odaberite dvije kružnice.
2. Upišite `M` i pritisnite {{key:Enter}}.

Povijest kaže `Pronađeno: 2`, a upit odmah prelazi na `Odredite baznu točku`. Dovršite pomicanje (vidi [Pomakni, kopiraj, zakreni, skaliraj i zrcali](topic:modify-objects)).

Kad naredba završi, odabir se briše, pa sljedeća naredba kreće ispočetka.

Naredbe koje uzimaju odabir na ovaj način: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} i {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} i {{cmd:CHAMFER}} uvijek traže da objekte birate jedan po jedan; {{cmd:TRIM}} i {{cmd:EXTEND}} uzimaju odabir ili put koji povlačite kroz dijelove (vidi [Skrati i produži](topic:trim-and-extend)).

## Pokrenite naredbu, zatim odaberite

1. Uvjerite se da ništa nije odabrano ({{key:Esc}}).
2. Upišite `E` i pritisnite {{key:Enter}}. Upit glasi `Odaberite objekte:`.
3. Kliknite objekte ili povucite prozore i križanja. Povijest broji svaki odabir (`Pronađeno: 1`, `Pronađeno: 3`).
4. Pritisnite {{key:Enter}}, {{key:Space}} ili desni klik za završetak odabira.

Objekti se brišu, a povijest kaže koliko ih je.

Na upitu `Odaberite objekte:` možete također upisati:

- `ALL`, zatim {{key:Enter}}: svaki objekt koji možete uređivati u otvorenoj kartici.
- `L` (Zadnji) ili `LAST`, zatim {{key:Enter}}: posljednje nacrtani objekt.
- `P` (Prethodni): objekti na kojima je zadnja naredba radila, ako su još tu.
- `F` (Ograda): kliknite ili upišite točke duž linije; dodaje se svaki objekt koji linija presijeca. Pritisnite {{key:Enter}} za kraj ograde; `U` uzima natrag njezinu zadnju točku.
- `W` (Prozor) ili `C` (Križanje): dva kuta, bilo kojim smjerom povlačenja.
- `R` (Ukloni (R)): od sada klikovi, prozori i ograde uzimaju objekte **van**. Upit glasi `Odaberite objekte za uklanjanje:`. `A` (Dodaj) vraća na dodavanje.
- `?`: popis ovih opcija u povijesti.

Ove opcije nisu prikazane u upitu, kao u AutoCADu.

## Odaberite jedan od nekoliko objekata jedan na drugom

Gdje se objekti preklapaju ili dodiruju, klik uzima najbliži. Za drugi:

1. Držite pokazivač nepomično nad mjestom.
2. Pritisnite {{key:Tab}}. Sljedeći objekt na tom mjestu se označi, a statusna traka kaže koji je („2 od 3: Linija na sloju Walls“).
3. Pritisnite {{key:Tab}} ponovno dok ne označite onaj koji želite, zatim kliknite bez pomicanja.

Pomicanje pokazivača počinje ispočetka. Ovo radi bez pokrenute naredbe, na upitu `Odaberite objekte:` i gdje god naredba traži da odaberete jedan objekt.

## Odaberite prema pravilu: Brzi odabir

{{cmd:QSELECT}} (`QS`, ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Brzi odabir}}) odabire svaki objekt koji odgovara pravilu, primjerice svaku kružnicu s radijusom manjim od 50 ili svaku referencu bloka nazvanu DOOR-900.

1. Otvorite {{ui:Brzi odabir}}.
2. Odaberite {{ui:Vrsta objekta}} (popis broji svaku vrstu), zatim {{ui:Svojstvo}}: {{ui:Sloj}}, {{ui:Boja}}, a za neke vrste {{ui:Duljina}}, {{ui:Radijus}}, {{ui:Površina}}, {{ui:Visina teksta}}, {{ui:Sadržaj teksta}}, {{ui:Naziv bloka}} ili {{ui:Uzorak šrafure}}.
3. Odaberite {{ui:Operator}} i {{ui:Vrijednost}}. `*` odgovara uz zamjenske znakove (`DOOR-*`); {{ui:Odaberi sve (ALL)}} uzima svaki objekt te vrste. Brojač na dnu pokazuje koliko odgovara dok birate.
4. {{ui:Kako primijeniti}}: uključite odgovarajuće ili sve ostalo. {{ui:Primijeni na}} {{ui:Trenutni odabir}} sužava ono što ste odabrali; {{ui:Dodaj trenutnom odabiru}} dodaje tome.
5. Kliknite {{ui:Odaberi}}. Zatim pokrenite naredbu koju želite: ona koristi odabir.

## Odaberi slične

Odaberite jedan ili više objekata i upišite {{cmd:SELECTSIMILAR}} (`SIM`), ili odaberite {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Odaberi slične}}. Odabiru se svi objekti iste vrste, na istom sloju i iste boje; reference blokova također traže isti blok, a šrafure isti uzorak. Upišite `SE` na upitu `Odaberite objekte` da odaberete što mora odgovarati.

## Odaberi sada, koristi kasnije

Upišite `SELECT` i pritisnite {{key:Enter}}, odaberite objekte bilo kojim od gore navedenih načina i pritisnite {{key:Enter}}. Ostaju odabrani za sljedeću naredbu, a `P` ih ponovno bira na kasnijem upitu `Odaberite objekte:`.

## Odaberi sve

Bez pokrenute naredbe pritisnite {{key:Mod+A}} ili odaberite {{ui:Odaberi sve (ALL)}} u izborniku {{ui:Uređivanje}} › {{ui:Više}} na alatnoj traci da odaberete svaki objekt koji možete uređivati u otvorenoj kartici. Ako ste nešto upisali u naredbeni redak, {{key:Mod+A}} odabire taj tekst: prvo pritisnite {{key:Esc}} da ga očistite. Na upitu `Odaberite objekte:` upišite `ALL`. {{ui:Poništi odabir}} u istom izborniku, ili {{key:Esc}}, briše odabir.

:::tip
Ako radije želite da svaki klik zamjenjuje odabir (a {{key:Shift}} ga dodaje), postavite {{ui:Klik na objekte}} na {{ui:Zamjenjuje odabir}} u [postavkama za CadCraft](topic:settings).
:::

## Što se ne može odabrati

- Objekti na sloju koji je **isključen**, **zamrznut** ili **zaključan**. Zaključani objekti ostaju vidljivi i možete se hvatati za njih, ali ih ne možete odabrati ni mijenjati.
- Na kartici lista, model prikazan unutar viewporta. Odabirete vlastite objekte lista (zaglavlje, bilješke, okvire viewporta). Da uređujete model, idite na karticu {{ui:Model}}.

## Brzo brisanje

Odaberite objekte, zatim pritisnite {{key:Delete}} (ili {{key:Backspace}} kad naredbeni redak nema kursor). Na Mac tipkovnici tipka označena delete radi kad ste kliknuli u crtež; dok naredbeni redak ima kursor, pritisnite fn i delete zajedno. Ovo pokreće {{cmd:ERASE}} nad odabirom. Ako se ništa ne dogodi, nešto ste upisali u naredbeni redak: pritisnite {{key:Esc}} ili upišite `E` i pritisnite {{key:Enter}}.

## Česte pogreške

- **Prozor je uhvatio premalo.** Povukli ste slijeva nadesno, što uzima samo ono što je potpuno unutra. Povucite zdesna nalijevo za križanje.
- **Klik na prazan prostor pokrenuo je okvir.** Jedan klik na prazan prostor pokreće prozor; drugi klik ga dovršava. Pritisnite {{key:Esc}} ili desni klik da ga odbacite.
- **Klik na prazan prostor pustio je odabir.** Tako je, osim ako držite {{key:Shift}}. Da zadržite odabir na takvom kliku i da ga brišete samo s {{key:Esc}}, postavite {{ui:Klik na prazno mjesto}} na {{ui:Zadržava odabir}} u [postavkama za CadCraft](topic:settings#clicking-an-empty-spot).
- **Naredba je koristila objekte koje niste mislili.** Nešto je još bilo odabrano kad ste je pokrenuli. Pritisnite {{key:Esc}} prije naredbe da počnete bez odabira.
- **Nakon naredbe ništa nije odabrano.** To je namjerno: završena naredba briše odabir.
