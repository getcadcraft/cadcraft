---
title: Izaberi objekte
summary: Izaberi objekte jedan po jedan, prozorom ili ukrštanjem, pre ili za vreme komande, i izbaci objekte iz izbora.
keywords: izbor, selekcija, prozor, ukrštanje, imenica-glagol, izaberi, sve, poslednji, prethodni, ograda, ukloni, dodaj, tab, ciklus, preklapanje, brzi izbor, filter, slični izbor, selectsimilar, shift, poništi izbor, ctrl+a, pickfirst
from: 676508c7
---

## Šta ćete naučiti

Kako izabrati objekte nad kojima komanda radi. CadCraft ima dva načina rada, i oba su dobra:

- **Prvo izaberi, pa komanda** (imenica-glagol). Izaberite objekte, zatim ukucajte `M` za Premesti. Komanda preuzima vaš izbor i odmah ide na sledeće pitanje.
- **Prvo komanda, pa izbor** (glagol-imenica). Ukucajte `M`; komanda pita `Izaberi objekte:`; izaberite, pa pritisnite {{key:Enter}}.

## Biraj jedan po jedan objekat

1. Kada nijedna komanda ne radi, kliknite liniju. Ona se označi i pojave se njeni hvatači (mali kvadrati). Desni panel prikazuje njena svojstva.
2. Kliknite drugi objekat. On se dodaje izboru.
3. Držite {{key:Shift}} i kliknite izabrani objekat. Izbacuje se iz izbora.
4. Pritisnite {{key:Esc}}. Ništa nije izabrano.

## Prozor i ukrštanje

Kliknite jednom na prazno mesto, pomerite se i kliknite ponovo: dobijate pravougaonik. Pritisak i prevlačenje crta slobodni lazo, sa ta dva ista tipa (vidi [Izbor lazom](topic:lasso-selection); Podešavanja mogu da naprave da prevlačenje crta pravougaonik). Koje objekte dobijate zavisi od smera:

| Pomerate se | Okvir | Bira |
|---|---|---|
| Sleva udesno | Prozor | Samo objekte **potpuno unutar** okvira |
| Zdesna ulevo | Ukrštanje | Objekte unutar okvira **i** objekte koje on dodiruje |

1. Nacrtajte nekoliko preklapajućih linija i krugova.
2. Kliknite prazno mesto levo od nekih objekata, pomerite se udesno i kliknite ponovo. Biraju se samo objekti koji su potpuno unutar.
3. Pritisnite {{key:Esc}}.
4. Kliknite prazno mesto desno, pomerite se ulevo preko nekih objekata i kliknite ponovo. Biraju se svi objekti koje okvir dodiruje.
5. Držite {{key:Shift}} i nacrtajte okvir ili lazo preko nekih izabranih objekata. Oni izlaze iz izbora.

## Izaberi, pa pokreni komandu

1. Izaberite dva kruga.
2. Ukucajte `M` i pritisnite {{key:Enter}}.

Istorija kaže `2 pronađeno`, a prompt odmah prelazi na `Zadaj osnovnu tačku`. Završite pomeranje (vidi [Pomeranje, kopiranje, rotiranje, skaliranje i ogledanje](topic:modify-objects)).

Kada se komanda završi, izbor se briše, pa sledeća komanda počinje iznova.

Komande koje na ovaj način uzimaju izbor: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} i {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} i {{cmd:CHAMFER}} uvek traže da birate objekte jedan po jedan; {{cmd:TRIM}} i {{cmd:EXTEND}} uzimaju klik ili putanju koju prevlačite kroz delove (vidi [Skraćivanje i produžavanje](topic:trim-and-extend)).

## Pokreni komandu, pa izaberi

1. Proverite da ništa nije izabrano ({{key:Esc}}).
2. Ukucajte `E` i pritisnite {{key:Enter}}. Prompt glasi `Izaberi objekte:`.
3. Kliknite objekte ili prevlačite prozore i ukrštanja. Istorija broji svaki izbor (`1 pronađen`, `3 pronađena`).
4. Pritisnite {{key:Enter}}, {{key:Space}} ili desni taster miša da završite izbor.

Objekti se brišu, a istorija kaže koliko ih je.

Na promptu `Izaberi objekte:` možete i da ukucate:

- `ALL`, zatim {{key:Enter}}: svaki objekat koji možete menjati na otvorenoj kartici.
- `L` (ili `LAST`), zatim {{key:Enter}}: poslednje nacrtani objekat.
- `P` (Prethodni): objekte nad kojima je radila poslednja komanda, ako su još tu.
- `F` (Ograda): kliknite ili ukucajte tačke duž linije; svaki objekat koji linija preseca se dodaje. Pritisnite {{key:Enter}} da završite ogradu; `U` vraća poslednju tačku.
- `W` (Prozor) ili `C` (Ukrštanje): dva ugla, bilo kojim smerom prevlačenja.
- `R` (Ukloni): od tog trenutka, klikovi, prozori i ograde izbacuju objekte. Prompt glasi `Ukloni objekte:`. `A` (Dodaj) vraća na prvobitno.
- `?`: spisak ovih opcija u istoriji.

Ove opcije se ne prikazuju u promptu, kao u AutoCAD-u.

## Izaberi jedan od više objekata na vrhu jedan drugog

Gde se objekti preklapaju ili dodiruju, klik uzima najbliži. Da dobijete drugi:

1. Držite pokazivač mirno nad mestom.
2. Pritisnite {{key:Tab}}. Sledeći objekat na tom mestu se označi, a statusna traka kaže koji je ("2 od 3: Linija na sloju Zidovi").
3. Pritisnite {{key:Tab}} ponovo dok se ne označi onaj koji želite, pa kliknite bez pomeranja.

Pomeranje pokazivača počinje sve ispočetka. Ovo radi kada nijedna komanda ne radi, na promptu `Izaberi objekte:` i svuda gde komanda traži da izaberete jedan objekat.

## Izaberi po pravilu: Brzi izbor

{{cmd:QSELECT}} (`QS`, ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Brzi izbor}}) bira svaki objekat koji odgovara pravilu, na primer svaki krug sa poluprečnikom manjim od 50 ili svaku referencu bloka po imenu DOOR-900.

1. Otvorite {{ui:Brzi izbor}}.
2. Izaberite {{ui:Vrsta objekta}} (spisak broji svaku vrstu), zatim {{ui:Svojstvo}}: {{ui:Sloj}}, {{ui:Boja}}, a za neke vrste {{ui:Dužina}}, {{ui:Poluprečnik}}, {{ui:Površina}}, {{ui:Visina teksta}}, {{ui:Sadržaj teksta}}, {{ui:Naziv bloka}} ili {{ui:Šablon šrafure}}.
3. Izaberite {{ui:Operator}} i {{ui:Vrednost}}. `*` odgovara džokerima (`DOOR-*`); {{ui:Izaberi sve}} uzima svaki objekat te vrste. Broj na dnu pokazuje koliko odgovara dok birate.
4. {{ui:Način primene}}: uključi odgovarajuće ili sve ostale. {{ui:Primeni na}} {{ui:Trenutni izbor}} sužava ono što ste izabrali; {{ui:Dodaj trenutnom izboru}} dodaje tome.
5. Kliknite {{ui:Izaberi}}. Zatim pokrenite komandu koju želite: koristi izbor.

## Slični izbor

Izaberite jedan ili više objekata i ukucajte {{cmd:SELECTSIMILAR}} (`SIM`), ili izaberite {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Izaberi slične}}. Svaki objekat iste vrste, na istom sloju i iste boje se bira; reference blokova takođe traže isti blok, a šrafure istu šablon. Ukucajte `SE` na promptu `Izaberi objekte` da izaberete šta mora da se poklapa.

## Izaberi sada, koristi kasnije

Ukucajte `SELECT` i pritisnite {{key:Enter}}, izaberite objekte nekim od gore navedenih načina i pritisnite {{key:Enter}}. Ostaju izabrani za sledeću komandu, a `P` ih ponovo bira na kasnijem promptu `Izaberi objekte:`.

## Izaberi sve

Kada nijedna komanda ne radi, pritisnite {{key:Mod+A}}, ili izaberite {{ui:Izaberi sve}} u meniju {{ui:Uređivanje}} › {{ui:Više}} na traci sa alatima, da izaberete svaki objekat koji možete menjati na otvorenoj kartici. Ako ste nešto ukucali u komandnu liniju, {{key:Mod+A}} bira taj tekst: prvo pritisnite {{key:Esc}} da ga obrišete. Na promptu `Izaberi objekte:` ukucajte `ALL`. {{ui:Ukloni izbor}} u istom meniju, ili {{key:Esc}}, briše izbor.

:::tip
Ako želite da svaki klik zamenjuje izbor (a {{key:Shift}} dodaje), postavite {{ui:Klikanje na objekte}} na {{ui:Zamenjuje izbor}} u [podešavanjima CadCraft-a](topic:settings).
:::

## Šta ne može da se izabere

- Objekti na sloju koji je **isključen**, **zamrznut** ili **zaključan**. Zaključani objekti ostaju vidljivi, i na njih se može hvatati, ali ne mogu da se biraju ni menjaju.
- Na kartici lista, model prikazan unutar prozora pogleda. Birate sopstvene objekte lista (tabelu naslova, beleške, okvire prozora pogleda). Da menjate model, idite na karticu {{ui:Model}}.

## Brzo brisanje

Izaberite objekte, zatim pritisnite {{key:Delete}} (ili {{key:Backspace}} kada komandna linija nema kursor). Na Mac tastaturi, taster označen kao delete radi kada kliknete u crtež; dok komandna linija ima kursor, pritisnite fn i delete zajedno. Ovo pokreće {{cmd:ERASE}} nad izborom. Ako se ništa ne dešava, nešto ste ukucali u komandnu liniju: pritisnite {{key:Esc}}, ili ukucajte `E` i pritisnite {{key:Enter}}.

## Česte greške

- **Prozor je uzeo premalo.** Prevukli ste sleva udesno, što bira samo ono što je potpuno unutra. Prevucite zdesna ulevo za ukrštanje.
- **Klik na prazno mesto je započeo okvir.** Jedan klik na prazno mesto počinje prozor; drugi klik ga završava. Pritisnite {{key:Esc}} ili kliknite desnim tasterom da ga odbacite.
- **Klik na prazno mesto je pustio izbor.** Tako je, osim ako držite {{key:Shift}}. Da zadržite izbor pri takvom kliku i da ga brišete samo sa {{key:Esc}}, postavite {{ui:Klikanje na prazno mesto}} na {{ui:Zadržava izbor}} u [podešavanjima CadCraft-a](topic:settings#clicking-an-empty-spot).
- **Komanda je koristila objekte koje niste mislili.** Nešto je još bilo izabrano kada ste je pokrenuli. Pritisnite {{key:Esc}} pre komande da počnete bez izbora.
- **Nakon komande ništa nije izabrano.** To je namerno: završena komanda briše izbor.
