---
title: "Kotiranje tlorisa"
summary: "Dodajte linearne, poravnane, kotne, polmerne in premerne kote, jih nizajte z nadaljevalnimi in osnovničnimi kotami ter prepišite besedilo."
keywords: kota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, veriga, niz, označi, orodje za kotiranje, meri, mm, cm, m, km, enote, kje, najdi, orodna vrstica
from: 9ee65123
---

## Kaj boste naredili

Kotirano sobo: skupno širino in višino, niz kot vzdolž ene stene, poševno steno, zaokroženo vogal in kot.

Preden začnete, preberite [Nastavitev velikosti kot](topic:dimension-settings), če je vaša risba velika: besedilo kote je privzeto visoko 2.5 enote risbe, kar je v risbi, merjeni v milimetrih, zelo majhno. Za spodnje korake najprej vnesite `DIMSCALE`, pritisnite {{key:Enter}}, vnesite `50` in pritisnite {{key:Enter}}.

## Kje so orodja za kotiranje

Z slogom menija CadCraft (tistim, s katerim se CadCraft začne) so orodja za kotiranje v orodni vrstici nad risbo, v skupini {{ui:Opombe}}: {{ui:Linearna}}, {{ui:Poravnana}}, {{ui:Kot}}, {{ui:Polmer}} in {{ui:Premer}}. Meni {{ui:Več}} skupine ima {{ui:Nadaljevalna kota}} in {{ui:Osnovnična kota}}. Pustite kazalec nad gumbom, da vidite, kaj naredi.

- Z slogom menija {{ui:Klasični risarski slog}} ali {{ui:Trak}} odprite zavihek {{ui:Opombe}}: orodja so v njegovi plošči {{ui:Kote}}. {{ui:Klasični risarski slog}} ima tudi {{ui:Linearna}} na zavihku {{ui:Domov}}, pod {{ui:Označevanje}}. Glejte [Meniji, tipke in miška](topic:menus-keys-and-mouse).
- Ali vnesite ukaz v ukazno vrstico pod risbo in pritisnite {{key:Enter}}: `DLI` (linearna), `DAL` (poravnana), `DAN` (kotna), `DRA` (polmerna), `DDI` (premerna), `DCO` (nadaljevalna), `DBA` (osnovnična).
- Na ozkem zaslonu je orodna vrstica v eni vrsti: povlecite jo vstran, da pridete do {{ui:Opombe}}.

Če želite dolžine prikazati v milimetrih, centimetrih, metrih ali kilometrih, glejte [Kote v mm, cm, m ali km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Narišite nekaj za kotiranje

1. Vnesite `PL` in pritisnite {{key:Enter}}.
2. Vnesite `0,0` in pritisnite {{key:Enter}}.
3. Vnesite `@6000,0` in pritisnite {{key:Enter}}.
4. Vnesite `@1500<60` in pritisnite {{key:Enter}}.
5. Vnesite `@0,2700` in pritisnite {{key:Enter}}.
6. Vnesite `@-6750,0` in pritisnite {{key:Enter}}.
7. Vnesite `C` in pritisnite {{key:Enter}}. Obris se zaključi.
8. Vnesite `C` in pritisnite {{key:Enter}}, da začnete krog.
9. Kliknite v sobo, stran od sten, za središče.
10. Vnesite `600` in pritisnite {{key:Enter}}. To je steber.
11. Kliknite {{ui:Obseg}}.

## Linearna: vodoravna ali navpična

1. Vnesite `DLI` in pritisnite {{key:Enter}}.
2. Pri `Specify first extension line origin` zaskočite na spodnje levo oglišče (krajišče) in kliknite.
3. Pri `Specify second extension line origin` zaskočite na spodnje desno oglišče in kliknite.
4. Premaknite križec pod sobo. Kota sledi, vodoravna.
5. Kliknite, da postavite merilno črto.

Zgodovina pravi `Dimension text = 6000`.

Kam postavite črto, določi smer: spodaj ali zgoraj da vodoravno koto, levo ali desno da navpično. Da jo vsilite, pred postavitvijo vnesite `H` (vodoravno), `V` (navpično) ali `R` (zasukano, nato kot).

:::tip
Pri prvem pozivu pritisnite {{key:Enter}} namesto izbire točke, nato kliknite črto, lok, krog ali odsek polilinije. CadCraft vzame oba krajišča zanj.
:::

## Nadaljevalna: niz kot

{{cmd:DIMCONTINUE}} ({{ui:Opombe}} › {{ui:Več}} › {{ui:Nadaljevalna kota}}, ali `DCO`) nadaljuje od zadnje linearne ali poravnane kote, ki ste jo naredili; vsaka nova se začne tam, kjer se je končala zadnja.

1. Vnesite `DLI` in pritisnite {{key:Enter}}.
2. Vnesite `0,0` in pritisnite {{key:Enter}} za prvo izhodišče.
3. Vnesite `2000,0` in pritisnite {{key:Enter}} za drugo izhodišče.
4. Kliknite pod sobo, da jo postavite.
5. Vnesite `DCO` in pritisnite {{key:Enter}}.
6. Vnesite `4500,0` in pritisnite {{key:Enter}}. Druga kota sledi prvi, na isti črti.
7. Zaskočite na spodnje desno oglišče in kliknite. Tretja kota niz zaključi.
8. Za konec ukaza pritisnite {{key:Enter}}.

:::note
Tu so točke namenoma vnesene kot absolutne koordinate. Točka z `@` šteje od zadnje točke, ki ste jo dali, zadnja točka pa je mesto, kjer ste postavili prejšnjo merilno črto, ne konec kote. Absolutne točke, zaskoki ali goli razdalja z vklopljenim {{ui:Orto}} so v nizu kot varnejši.
:::

Vnesite `U` in pritisnite {{key:Enter}}, da odstranite zadnjo koto v nizu, ne da bi zapustili ukaz.

## Osnovnična: kote zložene od ene črte

{{cmd:DIMBASELINE}} ({{ui:Opombe}} › {{ui:Več}} › {{ui:Osnovnična kota}}, ali `DBA`) meri vsako novo koto od prvega izhodišča zadnje in jo zloži korak dlje.

1. Vnesite `DLI` in pritisnite {{key:Enter}}.
2. Zaskočite na spodnje levo oglišče in kliknite.
3. Zaskočite na zgornje levo oglišče in kliknite.
4. Premaknite križec levo od sobe in kliknite. Pojavi se navpična kota.
5. Vnesite `DBA` in pritisnite {{key:Enter}}.
6. Zaskočite na zgornji konec 60-stopinjske stene (krajišče) in kliknite. Pojavi se druga navpična kota, en korak dlje od prve.
7. Za konec pritisnite {{key:Enter}}.

## Poravnana: prava dolžina nagnjene črte

1. Vnesite `DAL` in pritisnite {{key:Enter}}.
2. Pritisnite {{key:Enter}}, da izberete objekt.
3. Kliknite 60-stopinjsko steno.
4. Premaknite navzven in kliknite, da postavite.

Besedilo pravi 1500: prava dolžina, izmerjena vzdolž stene.

## Polmer in premer

1. Vnesite `DRA` in pritisnite {{key:Enter}}.
2. Kliknite krog stebra.
3. Premaknite križec. Vodilka kaže od središča proti križcu.
4. Kliknite, da postavite besedilo.

Besedilo pravi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) naredi enako z znakom ⌀ in premerom.

## Kotna

Stene tu so ena polilinija, zato kot izmerite po njenem oglišču. (Med dvema ločenima črtama lahko namesto tega kliknete črti.)

1. Vnesite `DAN` in pritisnite {{key:Enter}}.
2. Pri `Select arc, circle or line, or Enter for a vertex` pritisnite {{key:Enter}}.
3. Pri `Specify angle vertex` zaskočite na spodnje desno oglišče in kliknite.
4. Pri `Specify first angle endpoint` zaskočite na spodnje levo oglišče in kliknite.
5. Pri `Specify second angle endpoint` zaskočite na zgornji konec 60-stopinjske stene in kliknite.
6. Premaknite križec v sobo, blizu oglišča, in kliknite.

Besedilo pravi `120°`, notranji kot oglišča. Če je postavljena na drugo stran oglišča, kota izmeri kot na tisti strani. Kliknite lok pri prvem pozivu, da kotirate kot, ki ga lok obsega, ali kliknite dve črti, da kotirate kot med njima.

## Spremenite besedilo

Za lastno besedilo vnesite `T` in pritisnite {{key:Enter}}, preden postavite kot, nato vnesite besedilo. V besedilu `<>` pomeni izmerjeno vrednost: `<> TYP.` da `6000 TYP.`. Pritisnite {{key:Enter}} na prazni vrstici, da ohranite izmerjeno vrednost.

Za spremembo obstoječe kote:

1. Kliknite nanjo.
2. V desnem podoknu vnesite v {{ui:Besedilo}}. Pustite prazno za izmerjeno vrednost.
3. Pritisnite {{key:Enter}}.

## Kote sledijo geometriji

Kota si zapomni svoje točke. Povlecite eno od njenih ročic ali premaknite, zasučite ali spremenite merilo z objekti, ki jih meri, in se ponovno izmeri. Če raztegnete geometrijo, ne da bi premaknili koto, kota ne sledi: ohrani svoje točke.

## Pogoste napake

- **Besedilo in puščice so mikroskopske ali ogromne.** Nastavite skupno merilo: glejte [Nastavitev velikosti kot](topic:dimension-settings).
- **„Izberite točko znotraj kota, ki ga želite izmeriti.“** Točka, ki ste jo kliknili za kotno koto, leži na enem od krakov. Premaknite jo v kot.
- **Nadaljevalna se je začela pri napačni koti.** Vedno nadaljuje od zadnje linearne ali poravnane kote, narejene v tej seji. Najprej naredite (ali znova naredite) tisto, od katere naj nadaljuje.
- **Kota je vzešla navpično.** Postavili ste jo ob stran. Pred postavitvijo vnesite `H`.
- **Čevlji in palci.** Najprej nastavite format dolžin risbe na {{ui:Arhitekturni}} ali {{ui:Format}} kote v {{ui:Lastnosti}}: glejte [Čevlji in palci pri kotah](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Številke niso v enoti, ki jo želite.** Izberite {{ui:Enote v besedilu}}: glejte [Kote v mm, cm, m ali km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
