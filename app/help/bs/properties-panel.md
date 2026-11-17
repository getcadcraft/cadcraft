---
title: Panel Svojstva
summary: Vidi i mijenjaj sve o odabranim objektima, mnogo odjednom: koordinate sa Z, veličine, tekst, postavke kota, providnost i više. Polja primaju izraze i dužine sa jedinicama.
keywords: totali, ukupna dužina, ukupna površina, zbir, dužina izbora, svojstva, paleta svojstava, ctrl+1, pr, ch, mo, ddmodify, različito, brzi izbor, pickadd, koordinate, z, kota, debljina, providnost, materijal, hiperveza, izraz, quickcalc, vrh, stil kote, tolerancija, decimale
from: 10d6a829
---

## Šta ćeš naučiti

Kako otvoriti panel Svojstva, promijeniti jedan objekat ili stotinu u jednom koraku, unijeti tačne koordinate (sa Z), koristiti izraze i jedinice u svakom numeričkom polju, i šta svaka vrsta objekta prikazuje.

## Otvori ga

Panel je s desne strane. Da ga dovedeš ispred:

- Pritisni {{key:Mod+1}}, ili ukucaj {{cmd:PROPERTIES}} (ili `PR`, `CH`, `MO`).
- Dvaput klikni objekat (tekst i višestruki vodiči otvaraju svoj uređivač teksta).

Panel je pomjerljiv kao i drugi paneli: prevuci njegov hvatač da ga zakačiš lijevo, desno ili dolje, ili ga spusti preko crteža da pluta (vidi [Rasporedi panele i koristi drugi monitor](common:arrange-panels)).

### Sklopi ga

Dugme pribadače u gornjem desnom uglu panela uključuje **automatsko skrivanje**: panel se sklapa u traku na desnoj ivici, pa crtež dobija prostor. Pokaži na traku (ili pritisni {{key:Mod+1}}) i on se otvara preko crteža; pomjeri se i ponovo se sklapa. Klikni pribadaču opet da ostane otvoren. {{cmd:PROPERTIESCLOSE}} ga također sklapa.

## Odjeljci

Svojstva su grupisana u odjeljke koje možeš sklapati: **Opšte**, **Geometrija**, **Tekst**, **Linije i strelice**, **Raspored**, **Osnovne jedinice**, **Alternativne jedinice**, **Tolerancije**, **Uzorak**, **Razno**, a za blokove **Atributi** i **Stavka biblioteke**. Klikni naziv odjeljka da ga sklopiš ili otvoriš; CadCraft pamti koje si sklopio.

Povuci tanku liniju između naziva i vrijednosti da nazivi budu širi ili uži. Dvaput klikni je da je vratiš. Tastaturom je fokusiraj i koristi strelice.

## Promijeni vrijednost

1. Klikni red. Naslov kaže "Linija".
2. Klikni u {{ui:Length}}. Dok uređuješ, polje prikazuje punu vrijednost, a ne zaokruženu.
3. Ukucaj `2500` i pritisni {{key:Enter}}. Linija je sada dugačka 2500, zadržavajući početnu tačku i ugao.

{{key:Enter}} ili klik negdje drugo primjenjuje vrijednost; {{key:Esc}} vraća staru. Svaka promjena je jedan korak poništavanja.

### Izrazi i jedinice

Svako numeričko polje prima više od običnog broja:

| Ukucaš | Dobiješ |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inča, u crtežu u stopama i inčima) |
| `900mm`, `3.5m`, `2ft` | Pretvoreno u jedinice crteža |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (polja uglova) |
| `0.5r`, `100g` | Radijani i gradi, kao stepeni |

Dužina sa jedinicom traži da crtež ima jedinice: prvo postavi {{ui:Units}} pod {{ui:New objects}} (kad ništa nije odabrano). Loš unos se odbija sa napomenom ispod panela i ništa se ne mijenja; nikad se ne čuva kao 0. Funkcije: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; uglovi u stepenima.

## Promijeni više objekata odjednom

1. Odaberi više objekata, na primjer 8 linija i 4 kote.
2. Naslov kaže "12 objekata", a spisak na vrhu nudi **Svi (12)**, **Linija (8)** i **Kota (4)**.
3. **Svi** prikazuje šta svaki objekat ima (sloj, boju, vrstu linije…). Izaberi **Kota (4)** da vidiš postavke kota.
4. Promijeni vrijednost, na primjer {{ui:Decimals}} na `1`.

Sve četiri kote se mijenjaju, u jednom koraku poništavanja. Polje koje kaže **Različito** znači da se objekti razlikuju; upisivanje vrijednosti postavlja je na sve njih. Objekti na zaključanim slojevima ostaju kakvi jesu, a napomena kaže koliko ih je.

## Ukupno za izbor

Kad je odabrano više objekata, odjeljak {{ui:Totals}} na vrhu kaže:

- **Objekti**: koliko ih je svake vrste, na primjer "8 linija, 2 polilinije, 1 krug".
- **Ukupna dužina**: linije, lukovi i polilinije zbrojeni (i splajnovi se računaju), i koliko je objekata to.
- **Ukupna površina**: zatvoreni zbrojeni: krugovi, cijele elipse, zatvorene polilinije i šrafure (rupe šrafure se oduzimaju).

Date su u formatu dužine crteža (stope i inči kad ga koristi; površine tada u kvadratnim inčima i kvadratnim stopama). Statusna traka pokazuje istu dužinu i površinu kad god su objekti odabrani; {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Length and area of the selection}} › {{ui:Hidden}} to isključuje. Za jedan objekat, {{ui:Geometry}} prikazuje njegovu vlastitu dužinu i površinu, kao i ranije.

## Koordinate

Svaka tačka pokazuje **X**, **Y** i **Z**: početak i kraj linije, središta, tačke umetanja, pozicije teksta, tekući vrh polilinije. Linije također pokazuju **Delta X**, **Delta Y** i **Delta Z** (samo za čitanje). Polilinije i šrafure imaju **Visinu** (jedan Z za cijeli objekat).

Dugme nišana pored naziva tačke omogućava da je odabereš na crtežu: klikni ga, pa klikni novu poziciju (hvatanja rade). Vrijednosti su svjetske koordinate.

## Opšte

| Polje | Šta je |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Kao u panelu slojeva; {{ui:By layer}} prati sloj |
| {{ui:Transparency}} | Po sloju, po bloku, ili 0 do 90% |
| {{ui:Thickness}} | Koliko daleko se linije, krugovi, lukovi, polilinije, tačke i tekst protežu po Z |
| {{ui:Material}} | Po sloju, po bloku, Globalno ili naziv koji je crtež donio |
| {{ui:Plot style}} | Samo za čitanje: crteži se štampaju po boji, kroz [tabelu stila štampe](topic:plot-pdf#plot-style-tables) lista |
| {{ui:Hyperlink}} | Web adresa sačuvana uz objekat |

## Šta pokazuje svaki tip

| Odabrano | Možeš promijeniti |
|---|---|
| Linija | Početni i krajnji X, Y, Z; dužina; ugao |
| Krug | Središte; poluprečnik; prečnik; obim; površina (svaka postavlja poluprečnik) |
| Luk | Središte; poluprečnik; početni i krajnji ugao; ukupni ugao; tetiva (prikazuje dužinu luka i površinu) |
| Elipsa | Središte; velika i mala poluosa; odnos poluprečnika; ugao velike ose; početni i krajnji ugao |
| Polilinija | Pregledač vrhova (dolje); globalna širina; visina; zatvorena; površina kad je zatvorena (skalira je oko središta) |
| Tekst | Sadržaj; stil; poravnanje; visina; rotacija; faktor širine; ugao kosine; definisana širina; razmak redova; anotativno; pozicija |
| Referenca bloka | Tačka umetanja; rotacija; skala X, Y, Z i jednolika skala; vrijednosti atributa |
| Šrafura | Uzorak; razmjera; ugao; početak; asocijativna; detekcija ostrva; boja pozadine; visina |
| Kota | Vidi dolje |
| Višestruki vodič | Tekst; visina; širina; strana teksta; veličina strelice; rastojanje slijetanja; tačka strelice |
| Prozor pogleda | Razmjera; središte i veličina na listu; središte pogleda u modelu; uključen; zaključan prikaz |

### Vrhovi polilinije

{{ui:Current vertex}} pokazuje kojem vrhu pripadaju polja ispod. Koristi strelice ili ukucaj broj da pređeš na drugi vrh; nema ograničenja broja vrhova. Svaki vrh ima X, Y, širinu početnog i krajnjeg segmenta, i ispupčenje segmenta koji tu počinje (0 = ravno).

## Kote

Kota pokazuje svoj **Stil kote**, šta mjeri, svoje tačke i svaku postavku:

- **Linije i strelice:** strelica za svaki kraj, veličina strelice, veličina oznake, boje i debljine linija kote i pomoćnih linija, skrivanje bilo koje polovine ili bilo koje pomoćne linije, pomak pomoćne linije i produžetak.
- **Tekst:** zamjena (ostavi prazno za izmjerenu vrijednost; `<>` stoji za nju unutar tvog teksta), stil, boja, visina, pomak, vertikalni i horizontalni položaj, uvijek vodoravno, rotacija, popuna pozadine.
- **Raspored:** ukupna razmjera, razmak osnovne linije, šta se pomjera kad nema mjesta, pomjeranje teksta.
- **Osnovne jedinice:** format, decimale, zaokruživanje, prefiks, sufiks, razmjera mjerenja, decimalni separator, potiskivanje vodećih i završnih nula; za uglove format ugla i decimale.
- **Alternativne jedinice:** uključeno ili isključeno, format, decimale, množitelj (25.4 pretvara inče u milimetre), zaokruživanje, prefiks i sufiks.
- **Tolerancije:** nema, simetrično, odstupanje, granice ili osnovno, sa gornjom i donjom vrijednošću, decimalama, visinom i položajem.

Promjena bilo koje od njih na otvorenoj koti odbacuje crtež koji je drugi program napravio od nje, i CadCraft je ponovo crta.

:::note
Horizontalni položaj teksta (pored prve ili druge pomoćne linije) i tekst ispod linije crtaju se kod linearnih i poravnatih kota; na drugim kotama čuvaju se i snimaju, ali se još ne crtaju. Izbori za raspored se čuvaju i snimaju, ali se još ne crtaju: CadCraft smješta tekst po svom pravilu (iznad linije, izvan nje kad ne stane).
:::

## Ništa nije odabrano

Kad ništa nije odabrano, panel prikazuje:

- **Novi objekti:** sloj, boju, vrstu linije, debljinu i visinu teksta koje novi objekti dobijaju; jedinice crteža i format dužine; vrstu linije i debljinu trenutnog sloja; veličine za nove kote. Na listu, naziv lista, papir i orijentacija dolaze prvi.
- **Pogled:** središte, visina i širina onoga što se vidi na ekranu. Ukucaj vrijednost da pomjeriš pogled tamo.
- **Razno:** ikonica UCS-a uključena ili isključena, UCS (uvijek svjetski: CadCraft još nema korisničke koordinatne sisteme) i razmjera anotacije.

## Dugmad na vrhu

| Dugme | Radi |
|---|---|
| Lijevak | {{cmd:QSELECT}}: odaberi po vrsti i svojstvu |
| Pokazivač | {{cmd:SELECT}}: odaberi objekte u komandnoj liniji |
| Plus ili 1 | Da li klik dodaje izboru (plus) ili ga zamjenjuje (1); ista postavka kao u {{ui:Settings}}, {{ui:CadCraft}} |
| Pribadača | Automatsko skrivanje, gore |

## Česte greške

- **Unos u polje nije ništa uradio.** Pritisni {{key:Enter}} ili klikni negdje drugo da primijeniš. Crveno polje i napomena znače da je unos odbijen.
- **Dužina sa jedinicom je odbijena.** Crtež nema jedinice. Postavi {{ui:Units}} kad ništa nije odabrano.
- **Vidi se samo Sloj i Boja.** Odabrano je više vrsta objekata i izabrano je **Svi**. Izaberi jednu vrstu u spisku na vrhu.
- **Neki objekti se nisu promijenili.** Na zaključanom su sloju. Otključaj sloj u panelu slojeva.
- **Otkucana slova su ušla u polje.** Dok polje ima kursor, tipke se upisuju tamo. Pritisni {{key:Enter}} ili {{key:Esc}}, pa ukucaj komandu.
