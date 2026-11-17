---
title: Odabir objekata
summary: Odaberi objekte jedan po jedan, prozorom ili presjekom, prije ili tokom komande, i izvadi objekte iz odabira.
keywords: odabir, izbor, prozor, presjek, imenica-glagol, odaberi, sve, zadnji, prethodni, ograda, ukloni, dodaj, tab, ciklus, preklapanje, brzi odabir, filter, slični odabir, qselect, selectsimilar, shift, poništi odabir, ctrl+a, pickfirst
from: 676508c7
---

## Šta ćete naučiti

Kako odabrati objekte na koje komanda djeluje. CadCraft ima dva načina rada, i oba su dobra:

- **Prvo odaberite, pa komanda** (imenica-glagol). Odaberite objekte, zatim upišite `M` za Premjesti. Komanda preuzima vaš odabir i odmah ide na sljedeće pitanje.
- **Prvo komanda, pa odabir** (glagol-imenica). Upišite `M`; komanda pita `Select objects:`; odaberite, zatim pritisnite {{key:Enter}}.

## Biranje jednog po jednog objekta

1. Bez pokrenute komande kliknite liniju. Ona se označi i pojave se njeni hvatači (mali kvadratići). Desni panel prikazuje njena svojstva.
2. Kliknite drugi objekat. Dodaje se u odabir.
3. Držite {{key:Shift}} i kliknite odabrani objekat. Izvadi se iz odabira.
4. Pritisnite {{key:Esc}}. Ništa nije odabrano.

## Prozor i presjek

Kliknite jednom na prazan prostor, pomjerite se i kliknite ponovo: dobijate pravougaonik. Pritisak i prevlačenje crta slobodni lasso, sa istim dvjema vrstama (vidi [Lasso odabir](topic:lasso-selection); Postavke mogu učiniti da prevlačenje crta pravougaonik). Koji objekti se dobijaju zavisi od smjera:

| Pomjerate | Okvir | Odabire |
|---|---|---|
| Lijevo na desno | Prozor | Samo objekte **potpuno unutar** okvira |
| Desno na lijevo | Presjek | Objekte unutar okvira **i** objekte koje dodiruje |

1. Nacrtajte nekoliko preklapajućih linija i krugova.
2. Kliknite prazan prostor lijevo od nekih objekata, pomjerite se udesno i kliknite ponovo. Odabiru se samo objekti koji su potpuno unutar.
3. Pritisnite {{key:Esc}}.
4. Kliknite prazan prostor desno, pomjerite se ulijevo preko nekih objekata i kliknite ponovo. Odabire se sve što okvir dodirne.
5. Držite {{key:Shift}} i nacrtajte okvir ili lasso preko nekih odabranih objekata. Oni izlaze iz odabira.

## Odaberi, pa pokreni komandu

1. Odaberite dva kruga.
2. Upišite `M` i pritisnite {{key:Enter}}.

Istorija kaže `2 found`, a upit odmah ide na `Specify base point`. Završite pomjeranje (vidi [Pomjeri, kopiraj, rotiraj, skaliraj i zrcali](topic:modify-objects)).

Kada se komanda završi, odabir se briše, pa sljedeća komanda počinje iznova.

Komande koje na ovaj način uzimaju odabir: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} i {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} i {{cmd:CHAMFER}} uvijek traže da birate objekte jedan po jedan; {{cmd:TRIM}} i {{cmd:EXTEND}} prihvataju biranje ili put koji prevlačite kroz dijelove (vidi [Skrati i produži](topic:trim-and-extend)).

## Pokrenite komandu, pa odaberite

1. Uvjerite se da ništa nije odabrano ({{key:Esc}}).
2. Upišite `E` i pritisnite {{key:Enter}}. Upit glasi `Select objects:`.
3. Kliknite objekte ili prevucite prozore i presjeke. Istorija broji svako biranje (`1 found`, `3 found`).
4. Pritisnite {{key:Enter}}, pritisnite {{key:Space}} ili kliknite desnim dugmetom da završite odabir.

Objekti se brišu, a istorija kaže koliko ih je.

U upitu `Select objects:` možete također upisati:

- `ALL`, zatim {{key:Enter}}: svaki objekat koji možete mijenjati u otvorenoj kartici.
- `L` (ili `LAST`), zatim {{key:Enter}}: posljednje nacrtani objekat.
- `P` (Prethodni): objekti na kojima je radila zadnja komanda, ako su još tu.
- `F` (Ograda): kliknite ili upišite tačke duž linije; dodaje se svaki objekat koji linija presijeca. Pritisnite {{key:Enter}} da završite ogradu; `U` (Poništi) uzima njenu zadnju tačku.
- `W` (Prozor) ili `C` (Presjek): dva ugla, bilo kojim smjerom da prevučete.
- `R` (Ukloni): od sada klikovi, prozori i ograde izvlače objekte **iz** odabira. Upit glasi `Remove objects:`. `A` (Dodaj) vraća na dodavanje.
- `?`: spisak ovih opcija u istoriji.

Ove opcije se ne prikazuju u upitu, kao u AutoCAD-u.

## Odaberite jedan od više objekata naslaganih jedan na drugi

Gdje se objekti preklapaju ili dodiruju, klik uzima najbliži. Da dobijete drugi:

1. Držite pokazivač mirno nad mjestom.
2. Pritisnite {{key:Tab}}. Sljedeći objekat tamo se označava, a statusna traka kaže koji je ("2 od 3: Linija na sloju Walls").
3. Pritisnite {{key:Tab}} ponovo dok ne bude označen onaj koji želite, zatim kliknite bez pomjeranja.

Pomjeranje pokazivača počinje iznova. Ovo radi bez pokrenute komande, na `Select objects:` i gdje god komanda traži da izaberete jedan objekat.

## Odabir po pravilu: Brzi odabir

{{cmd:QSELECT}} (`QS`, ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Brzi odabir}}) odabire svaki objekat koji odgovara pravilu, na primjer svaki krug s poluprečnikom manjim od 50, ili svaku referencu bloka po imenu DOOR-900.

1. Otvorite {{ui:Brzi odabir}}.
2. Izaberite {{ui:Tip objekta}} (lista broji svaki tip), zatim {{ui:Svojstvo}}: {{ui:Sloj}}, {{ui:Boja}}, a za neke tipove {{ui:Dužina}}, {{ui:Poluprečnik}}, {{ui:Površina}}, {{ui:Visina teksta}}, {{ui:Sadržaj teksta}}, {{ui:Naziv bloka}} ili {{ui:Uzorak šrafure}}.
3. Izaberite {{ui:Operator}} i {{ui:Vrijednost}}. `*` daje podudaranje sa zamjenskim znakovima (`DOOR-*`); {{ui:Odaberi sve}} uzima svaki objekat tog tipa. Brojač na dnu pokazuje koliko se podudara dok birate.
4. {{ui:Način primjene}}: uključi podudarajuće ili sve ostalo. {{ui:Primijeni na}} {{ui:Trenutni odabir}} sužava ono što ste odabrali; {{ui:Dodaj trenutnom odabiru}} dodaje tome.
5. Kliknite {{ui:Odaberi}}. Zatim pokrenite komandu koju želite: ona koristi odabir.

## Slični odabir

Odaberite jedan ili više objekata i upišite {{cmd:SELECTSIMILAR}} (`SIM`), ili izaberite {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Odaberi slične}}. Odabire se svaki objekat istog tipa, na istom sloju i iste boje; reference blokova također traže isti blok, a šrafure isti uzorak. Upišite `SE` na njegovom upitu `Select objects`, da izaberete šta mora da se podudara.

## Odaberi sada, koristi kasnije

Upišite `SELECT` i pritisnite {{key:Enter}}, izaberite objekte bilo kojim od gore navedenih načina, i pritisnite {{key:Enter}}. Ostaju odabrani za sljedeću komandu, a `P` ih ponovo bira na kasnijem upitu `Select objects:`.

## Odaberi sve

Bez pokrenute komande pritisnite {{key:Mod+A}}, ili izaberite {{ui:Odaberi sve}} u meniju {{ui:Uređivanje}} › {{ui:Više}} na traci s alatima, da odaberete svaki objekat koji možete mijenjati na otvorenoj kartici. Ako ste nešto upisali u komandnu liniju, {{key:Mod+A}} odabire taj tekst: prvo pritisnite {{key:Esc}} da ga obrišete. Na upitu `Select objects:` upišite `ALL`. {{ui:Poništi odabir}} u istom meniju, ili {{key:Esc}}, briše odabir.

:::tip
Ako želite da svaki klik zamijeni odabir (a {{key:Shift}} dodaje), postavite {{ui:Klikanje na objekte}} na {{ui:Zamjenjuje odabir}} u [postavkama CadCraft-a](topic:settings).
:::

## Šta se ne može odabrati

- Objekti na sloju koji je **isključen**, **zamrznut** ili **zaključan**. Zaključani objekti ostaju vidljivi, i još možete hvatati za njih, ali ih ne možete odabrati ili mijenjati.
- Na kartici lista, model prikazan unutar prozora pregleda. Odabirete vlastite objekte lista (blok naslova, bilješke, okvire prozora pregleda). Da mijenjate model, idite na karticu {{ui:Model}}.

## Brzo brisanje

Odaberite objekte, zatim pritisnite {{key:Delete}} (ili {{key:Backspace}} kada komandna linija nema kursor). Na Mac tastaturi, taster označen sa delete radi kada kliknete u crtež; dok komandna linija ima kursor, pritisnite fn i delete zajedno. Ovo pokreće {{cmd:ERASE}} nad odabirom. Ako se ništa ne desi, nešto ste upisali u komandnu liniju: pritisnite {{key:Esc}}, ili upišite `E` i pritisnite {{key:Enter}}.

## Česte greške

- **Prozor je uzeo premalo.** Prevukli ste lijevo na desno, što uzima samo ono što je potpuno unutra. Prevucite desno na lijevo za presjek.
- **Klik na prazan prostor započeo je okvir.** Jedan klik na prazan prostor započinje prozor; drugi klik ga završava. Pritisnite {{key:Esc}} ili kliknite desnim dugmetom da ga odbacite.
- **Klik na prazan prostor pustio je odabir.** Tako je, osim ako držite {{key:Shift}}. Da zadržite odabir na takvom kliku i brišete ga samo sa {{key:Esc}}, postavite {{ui:Klik na prazno mjesto}} na {{ui:Zadržava odabir}} u [postavkama CadCraft-a](topic:settings#clicking-an-empty-spot).
- **Komanda je koristila objekte koje niste mislili.** Nešto je još bilo odabrano kada ste je pokrenuli. Pritisnite {{key:Esc}} prije komande da počnete bez ičega odabranog.
- **Nakon komande ništa nije odabrano.** To je namjerno: završena komanda briše odabir.
