---
title: Panel Svojstva
summary: Pregledajte i promijenite sve o odabranim objektima, mnogo odjednom: koordinate sa Z, veličine, tekst, postavke kota, prozirnost i više. Polja primaju izraze i duljine s jedinicama.
keywords: zbrojevi, ukupna duljina, ukupna površina, zbroj, duljina odabira, svojstva, paleta svojstava, ctrl+1, pr, ch, mo, ddmodify, varira, brzi odabir, pickadd, koordinate, z, kota, debljina, prozirnost, materijal, hiperveza, izraz, quickcalc, vrh, stil kote, tolerancija, decimale
from: 10d6a829
---

## Što ćete naučiti

Kako otvoriti panel Svojstva, promijeniti jedan objekt ili sto u jednom koraku, upisati točne koordinate (sa Z), koristiti izraze i jedinice u svakom numeričkom polju, i što svaka vrsta objekta prikazuje.

## Otvorite ga

Panel je s desne strane. Da ga dovedete naprijed:

- Pritisnite {{key:Mod+1}}, ili upišite {{cmd:PROPERTIES}} (ili `PR`, `CH`, `MO`).
- Dvaput kliknite objekt (tekst i višestruke vodilice otvaraju svoj uređivač teksta).

Panel je pomičan kao i ostali: povucite njegov hvatač da ga usidrite lijevo, desno ili pri dnu, ili ga ispustite preko crteža da ga odvojite (vidi [Raspored panela i drugi monitor](common:arrange-panels)).

### Sklopite ga

Gumb pribadače u gornjem desnom kutu panela uključuje **automatsko skrivanje**: panel se sklapa u traku uz desni rub i crtež dobiva prostor. Pokažite na traku (ili pritisnite {{key:Mod+1}}) i otvori se preko crteža; maknite se i ponovno se sklopi. Kliknite pribadaču ponovno da ostane otvoren. {{cmd:PROPERTIESCLOSE}} ga također sklapa.

## Odjeljci

Svojstva su grupirana u odjeljke koje možete sklopiti: **Općenito**, **Geometrija**, **Tekst**, **Linije i strelice**, **Uklapanje**, **Primarne jedinice**, **Alternativne jedinice**, **Tolerancije**, **Uzorak**, **Razno**, a za blokove **Atributi** i **Stavka knjižnice**. Kliknite naziv odjeljka da ga sklopite ili otvorite; CadCraft pamti koje ste sklopili.

Povucite tanku liniju između naziva i vrijednosti da nazive proširite ili suzite. Dvaput kliknite je da se vrati. Tipkovnicom je fokusirajte i koristite tipke sa strelicama.

## Promijenite vrijednost

1. Kliknite redak. Naslov glasi „Linija“.
2. Kliknite u {{ui:Duljina}}. Dok uređujete, polje prikazuje punu vrijednost, a ne zaokruženu.
3. Upišite `2500` i pritisnite {{key:Enter}}. Linija je sada duga 2500, a zadržava početnu točku i kut.

{{key:Enter}} ili klik drugdje primjenjuje vrijednost; {{key:Esc}} vraća staru vrijednost. Svaka promjena je jedan korak poništavanja.

### Izrazi i jedinice

Svako numeričko polje prima više od običnog broja:

| Upišete | Dobijete |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inča, u crtežu u stopama i inčima) |
| `900mm`, `3.5m`, `2ft` | Pretvoreno u jedinice crteža |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (polja kuta) |
| `0.5r`, `100g` | Radijani i gradi, kao stupnjevi |

Duljina s jedinicom traži da crtež ima jedinice: prvo postavite {{ui:Jedinice}} pod {{ui:Novi objekti}} (bez odabira). Neispravan unos se odbija s napomenom ispod panela i ništa se ne mijenja; nikad se ne sprema kao 0. Funkcije: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; kutovi u stupnjevima.

## Promijenite više objekata odjednom

1. Odaberite nekoliko objekata, na primjer 8 linija i 4 kote.
2. Naslov kaže „12 objekata“, a popis na vrhu nudi **Sve (12)**, **Linija (8)** i **Kota (4)**.
3. **Sve** prikazuje što svaki objekt ima (sloj, boja, tip linije…). Odaberite **Kota (4)** da vidite postavke kota.
4. Promijenite vrijednost, na primjer {{ui:Decimale}} u `1`.

Sve četiri kote se mijenjaju, u jednom koraku poništavanja. Polje koje glasi **Varira** znači da se objekti razlikuju; upisivanje vrijednosti postavlja je na sve njih. Objekti na zaključanim slojevima ostaju kakvi jesu, a napomena kaže koliko ih je.

## Zbrojevi odabira

Kad je odabrano nekoliko objekata, odjeljak {{ui:Zbrojevi}} na vrhu kaže:

- **Objekti**: koliko ih je svake vrste, na primjer „8 linija, 2 polilinije, 1 kružnica“.
- **Ukupna duljina**: linije, lukovi i polilinije zbrojeni (zbrajaju se i splajnovi), i koliko je to objekata.
- **Ukupna površina**: zatvoreni zbrojeni: kružnice, cijele elipse, zatvorene polilinije i šrafure (rupe šrafure se oduzimaju).

Oni su u formatu duljine crteža (stope i inči kad ga koristi; površine tada u kvadratnim inčima i kvadratnim stopama). Statusna traka pokazuje istu duljinu i površinu kad god su objekti odabrani; {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Duljina i površina odabira}} › {{ui:Sakriveno}} to isključuje. Za jedan objekt, {{ui:Geometrija}} pokazuje vlastitu duljinu i površinu, kao i prije.

## Koordinate

Svaka točka pokazuje **X**, **Y** i **Z**: početak i kraj linije, središta, točke umetanja, položaje teksta, trenutni vrh polilinije. Linije također pokazuju **Delta X**, **Delta Y** i **Delta Z** (samo za čitanje). Polilinije i šrafure imaju **Kotu** (jedan Z za cijeli objekt).

Gumb nišana pored naziva točke omogućuje da je odaberete u crtežu: kliknite ga, zatim kliknite novi položaj (hvatanja rade). Vrijednosti su svjetske koordinate.

## Općenito

| Polje | Što je |
|---|---|
| {{ui:Sloj}}, {{ui:Boja}}, {{ui:Tip linije}}, {{ui:Mjerilo tipa linije}}, {{ui:Debljina linije}} | Kao u panelu slojeva; {{ui:Po sloju}} slijedi sloj |
| {{ui:Prozirnost}} | Po sloju, po bloku, ili 0 do 90 % |
| {{ui:Debljina}} | Koliko se linije, kružnice, lukovi, polilinije, točke i tekst protežu u Z |
| {{ui:Materijal}} | Po sloju, po bloku, Globalno ili naziv koji je donio crtež |
| {{ui:Stil ispisa}} | Samo za čitanje: crteži se ispisuju po boji, kroz [tablicu stilova ispisa](topic:plot-pdf#plot-style-tables) lista |
| {{ui:Hiperveza}} | Web adresa pohranjena uz objekt |

## Što prikazuje svaka vrsta

| Odabrano | Možete promijeniti |
|---|---|
| Linija | Početni i krajnji X, Y, Z; duljina; kut |
| Kružnica | Središte; radijus; promjer; opseg; površina (svako postavlja radijus) |
| Luk | Središte; radijus; početni i krajnji kut; ukupni kut; tetiva (prikazuje duljinu luka i površinu) |
| Elipsa | Središte; velika i mala poluos; omjer radijusa; kut velike osi; početni i krajnji kut |
| Polilinija | Preglednik vrhova (dolje); globalna širina; kota; zatvorena; površina kad je zatvorena (skalira je oko središta) |
| Tekst | Sadržaj; stil; poravnanje; visina; zakret; faktor širine; kut kosine; definirana širina; razmak redaka; anotativno; položaj |
| Referenca bloka | Točka umetanja; zakret; skala X, Y, Z i jednolika skala; vrijednosti atributa |
| Šrafura | Uzorak; skala; kut; ishodište; asocijativno; detekcija otoka; boja pozadine; kota |
| Kota | Vidi dolje |
| Višestruka vodilica | Tekst; visina; širina; strana teksta; veličina strelice; razmak slijetanja; točka strelice |
| Viewport | Skala; središte i veličina na listu; središte pogleda u modelu; uključeno; zaključan prikaz |

### Vrhovi polilinije

{{ui:Trenutni vrh}} pokazuje kojem vrhu pripadaju polja ispod. Koristite strelice ili upišite broj da pređete na drugi vrh; nema ograničenja koliko ih ima. Svaki vrh ima X, Y, širinu početnog i krajnjeg segmenta, te ispupčenje segmenta koji tu počinje (0 = ravno).

## Kote

Kota pokazuje svoj **Stil kote**, što mjeri, svoje točke i sve postavke:

- **Linije i strelice:** strelica za svaki kraj, veličina strelice, veličina oznake, boje i debljine kotne i pomoćne linije, skrivanje bilo koje polovice ili bilo koje pomoćne linije, odmak pomoćne linije i njezino produženje.
- **Tekst:** nadjačavanje (ostavite prazno za izmjerenu vrijednost; `<>` označava nju unutar vašeg teksta), stil, boja, visina, odmak, okomiti i vodoravni položaj, uvijek vodoravno, zakret, ispuna pozadine.
- **Uklapanje:** ukupno mjerilo, razmak osnovnice, što se pomiče kad je prostora malo, pomicanje teksta.
- **Primarne jedinice:** format, decimale, zaokruživanje, prefiks, sufiks, mjerilo mjere, decimalni separator, potiskivanje vodećih i završnih nula; za kuteve format kuta i decimale.
- **Alternativne jedinice:** uključeno ili isključeno, format, decimale, množitelj (25.4 pretvara inče u milimetre), zaokruživanje, prefiks i sufiks.
- **Tolerancije:** nema, simetrične, odstupanje, granice ili osnovne, s gornjim i donjim vrijednostima, decimalama, visinom i položajem.

Promjena bilo koje od njih na otvorenoj koti odbacuje crtež koji je drugi program napravio od nje, a CadCraft je ponovno crta.

:::note
Vodoravni položaj teksta (uz prvu ili drugu pomoćnu liniju) i tekst ispod linije crtaju se na linearnim i poravnatim kotama; na ostalim kotama čuvaju se i spremaju, ali se još ne crtaju. Izbori uklapanja čuvaju se i spremaju, ali se još ne crtaju: CadCraft smješta tekst prema vlastitom pravilu (iznad linije, izvan kad ne stane).
:::

## Nema odabira

Kad ništa nije odabrano, panel prikazuje:

- **Novi objekti:** sloj, boju, tip linije, debljinu linije i visinu teksta koje novi objekti dobivaju; jedinice crteža i format duljine; tip linije i debljinu trenutnog sloja; veličine za nove kote. Na listu prvo dolaze naziv lista, papir i orijentacija.
- **Pogled:** središte, visina i širina onoga što je na zaslonu. Upišite vrijednost da pomaknete pogled tamo.
- **Razno:** ikona UCS-a uključena ili isključena, UCS (uvijek svjetski: CadCraft još nema korisničke koordinatne sustave) i mjerilo anotacije.

## Gumbi na vrhu

| Gumb | Radi |
|---|---|
| Lijevak | {{cmd:QSELECT}}: odabir po vrsti i svojstvu |
| Pokazivač | {{cmd:SELECT}}: odabir objekata u naredbenom retku |
| Plus ili 1 | Hoće li klik dodati u odabir (plus) ili ga zamijeniti (1); ista postavka kao u Postavke › {{ui:CadCraft}} |
| Pribadača | Automatsko skrivanje, gore |

## Česte greške

- **Upisivanje u polje nije ništa napravilo.** Pritisnite {{key:Enter}} ili kliknite drugdje da primijenite. Crveno polje i napomena znače da je unos odbijen.
- **Duljina s jedinicom je odbijena.** Crtež nema jedinica. Postavite {{ui:Jedinice}} bez odabira.
- **Vide se samo Sloj i Boja.** Odabrano je nekoliko vrsta objekata i odabrano je **Sve**. Odaberite jednu vrstu na popisu na vrhu.
- **Neki objekti se nisu promijenili.** Na zaključanom su sloju. Otključajte sloj u panelu slojeva.
- **Upisana slova su ušla u polje.** Dok polje ima kursor, tipke upisuju tamo. Pritisnite {{key:Enter}} ili {{key:Esc}}, zatim upišite naredbu.
