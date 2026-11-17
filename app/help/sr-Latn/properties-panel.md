---
title: Panel Svojstva
summary: Vidi i menjaj sve o izabranim objektima, mnogo odjednom: koordinate sa Z, veličine, tekst, podešavanja kota, providnost i još. Polja primaju izraze i dužine sa jedinicama.
keywords: ukupno, ukupna dužina, ukupna površina, zbir, dužina izbora, svojstva, paleta svojstava, ctrl+1, pr, ch, mo, ddmodify, različito, brzo biranje, pickadd, koordinate, z, visinska kota, debljina, providnost, materijal, hiperveza, izraz, quickcalc, teme, stil kote, tolerancija, decimale
from: 10d6a829
---

## Šta ćeš naučiti

Kako da otvoriš panel Svojstva, promeniš jedan objekat ili sto u jednom koraku, ukucaš tačne koordinate (sa Z), koristiš izraze i jedinice u svakom polju za broj, i šta svaka vrsta objekta prikazuje.

## Otvori ga

Panel je sa desne strane. Da ga dovedeš ispred:

- Pritisni {{key:Mod+1}}, ili ukucaj {{cmd:PROPERTIES}} (ili `PR`, `CH`, `MO`).
- Dvoklikni objekat (tekst i višestruka pokazna linija otvaraju svoj uređivač teksta).

Panel je pomerljiv kao i ostali: prevuci njegov hvatač da ga zakačiš levo, desno ili dole, ili ga spusti preko crteža da lebdi (vidi [Rasporedi panele i koristi drugi monitor](common:arrange-panels)).

### Sakrij ga

Dugme pribadače u gornjem desnom uglu panela uključuje **automatsko skrivanje**: panel se sklapa u traku na desnoj ivici, a crtež dobija prostor. Pokaži na traku (ili pritisni {{key:Mod+1}}) i on se otvara preko crteža; odmakni se i ponovo se sklapa. Klikni pribadaču ponovo da ostane otvoren. {{cmd:PROPERTIESCLOSE}} ga takođe sklapa.

## Odeljci

Svojstva su grupisana u odeljke koje možeš da sklopiš: **Opšte**, **Geometrija**, **Tekst**, **Linije i strelice**, **Uklapanje**, **Primarne jedinice**, **Alternativne jedinice**, **Tolerancije**, **Šablon**, **Razno**, a za blokove **Atributi** i **Stavka biblioteke**. Klikni naziv odeljka da ga sklopiš ili otvoriš; CadCraft pamti koje si sklopio.

Provuci tanku liniju između naziva i vrednosti da nazivi budu širi ili uži. Dvoklikni je da se vrati. Tastaturom je fokusiraj i koristi strelice.

## Promeni vrednost

1. Klikni red. Zaglavlje kaže „Linija“.
2. Klikni u {{ui:Dužina}}. Dok uređuješ, polje prikazuje punu vrednost, a ne zaokruženu.
3. Ukucaj `2500` i pritisni {{key:Enter}}. Linija je sada dugačka 2500, uz zadržanu početnu tačku i ugao.

{{key:Enter}} ili klik negde drugde primenjuje vrednost; {{key:Esc}} vraća staru. Svaka promena je jedan korak opozivanja.

### Izrazi i jedinice

Svako polje za broj prima više od običnog broja:

| Ukucaš | Dobiješ |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inča, u crtežu u stopama i inčima) |
| `900mm`, `3.5m`, `2ft` | Pretvoreno u jedinice crteža |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (polja za ugao) |
| `0.5r`, `100g` | Radijani i gradi, kao stepeni |

Dužina sa jedinicom traži da crtež ima jedinice: prvo postavi {{ui:Jedinice}} pod {{ui:Novi objekti}} (ništa izabrano). Loš unos se odbija sa napomenom ispod panela i ništa se ne menja; nikad se ne čuva kao 0. Funkcije: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; uglovi u stepenima.

## Promeni više objekata odjednom

1. Izaberi nekoliko objekata, na primer 8 linija i 4 kote.
2. Zaglavlje kaže „12 objekata“, a spisak na vrhu nudi **Sve (12)**, **Linija (8)** i **Kota (4)**.
3. **Sve** prikazuje šta svaki objekat ima (sloj, boju, tip linije…). Izaberi **Kota (4)** da vidiš podešavanja kota.
4. Promeni vrednost, na primer {{ui:Decimale}} na `1`.

Sve četiri kote se menjaju, u jednom koraku opozivanja. Polje na kome piše **Različito** znači da se objekti razlikuju; ukucavanje vrednosti je postavlja na sve njih. Objekti na zaključanim slojevima ostaju kakvi jesu, a napomena kaže koliko ih je.

## Zbirovi izbora

Sa više izabranih objekata, odeljak {{ui:Ukupno}} na vrhu kaže:

- **Objekti**: koliko ima svake vrste, na primer „8 linija, 2 polilinije, 1 krug“.
- **Ukupna dužina**: zbir linija, lukova i polilinija (i splajnovi se računaju), i koliko je to objekata.
- **Ukupna površina**: zbir zatvorenih: krugova, celih elipsi, zatvorenih polilinija i šrafura (rupe šrafure se oduzimaju).

Oni su u formatu dužine crteža (stope i inči kad se koriste; površine tada u kvadratnim inčima i kvadratnim stopama).
Statusna traka pokazuje istu dužinu i površinu kad god su objekti izabrani; {{ui:Podešavanja}} › {{ui:CadCraft}} ›
{{ui:Dužina i površina izbora}} › {{ui:Sakriveno}} to isključuje. Za jedan objekat, {{ui:Geometrija}} pokazuje sopstvenu dužinu i površinu, kao ranije.

## Koordinate

Svaka tačka prikazuje **X**, **Y** i **Z**: početak i kraj linije, centre, tačke umetanja, položaje teksta, tekuće teme polilinije. Linije takođe prikazuju **Delta X**, **Delta Y** i **Delta Z** (samo za čitanje). Polilinije i šrafure imaju **Visinsku kotu** (jedna Z za ceo objekat).

Dugme nišana pored imena tačke ti dozvoljava da je izabereš u crtežu: klikni ga, pa klikni novi položaj (hvatanje radi). Vrednosti su svetske koordinate.

## Opšte

| Polje | Šta je |
|---|---|
| {{ui:Sloj}}, {{ui:Boja}}, {{ui:Tip linije}}, {{ui:Razmera tipa linije}}, {{ui:Debljina linije}} | Kao u panelu slojeva; {{ui:Po sloju}} prati sloj |
| {{ui:Providnost}} | Po sloju, po bloku, ili 0 do 90 % |
| {{ui:Debljina}} | Koliko se linije, krugovi, lukovi, polilinije, tačke i tekst protežu po Z |
| {{ui:Materijal}} | Po sloju, po bloku, Globalno ili naziv koji je crtež doneo |
| {{ui:Stil štampanja}} | Samo za čitanje: crteži se štampaju po boji, kroz [tabelu stilova štampanja](topic:plot-pdf#plot-style-tables) lista |
| {{ui:Hiperveza}} | Veb adresa sačuvana uz objekat |

## Šta prikazuje svaka vrsta

| Izabrano | Možeš da menjaš |
|---|---|
| Linija | Početak i kraj X, Y, Z; dužina; ugao |
| Krug | Centar; poluprečnik; prečnik; obim; površina (svako postavlja poluprečnik) |
| Luk | Centar; poluprečnik; početni i krajnji ugao; ukupni ugao; tetiva (pokazuje dužinu luka i površinu) |
| Elipsa | Centar; veliki i mali poluprečnik; odnos poluprečnika; ugao velike ose; početni i krajnji ugao |
| Polilinija | Pregledač temena (ispod); globalna širina; visinska kota; zatvorena; površina kad je zatvorena (razmerava je oko centra) |
| Tekst | Sadržaj; stil; poravnanje; visina; rotacija; faktor širine; ugao kosine; zadata širina; razmak redova; anotativno; položaj |
| Referenca bloka | Tačka umetanja; rotacija; razmera X, Y, Z i ravnomerna razmera; vrednosti atributa |
| Šrafura | Šablon; razmera; ugao; početak; pridruženost; otkrivanje ostrva; boja pozadine; visinska kota |
| Kota | Videti dole |
| Višestruka pokazna linija | Tekst; visina; širina; strana teksta; veličina vrha strelice; rastojanje sletanja; tačka vrha strelice |
| Prozor pogleda | Razmera; centar i veličina na listu; centar pogleda u modelu; uključen; zaključan prikaz |

### Temena polilinije

{{ui:Tekuće teme}} pokazuje kom temenu pripadaju polja ispod. Koristi dugmad sa strelicama ili ukucaj broj da pređeš na drugo teme; nema ograničenja broja. Svako teme ima X, Y, širinu početnog i krajnjeg segmenta i ispupčenje segmenta koji tu počinje (0 = prava).

## Kote

Kota prikazuje svoj **Stil kote**, šta meri, svoje tačke i svako podešavanje:

- **Linije i strelice:** strelica za svaki kraj, veličina strelice, veličina crtice, boje i debljine linija kote i pomoćnih linija, skrivanje bilo koje polovine ili bilo koje pomoćne linije, pomeraj pomoćnih linija i produžetak.
- **Tekst:** zamena (ostavi prazno za izmerenu vrednost; `<>` stoji za nju u tvom tekstu), stil, boja, visina, pomeraj, vertikalni i horizontalni položaj, uvek vodoravno, rotacija, popuna pozadine.
- **Uklapanje:** ukupna razmera, razmak osnovne linije, šta se pomera kad je prostora malo, pomeranje teksta.
- **Primarne jedinice:** format, decimale, zaokruživanje, prefiks, sufiks, razmera merenja, decimalni separator, potiskivanje vodećih i završnih nula; za uglove format ugla i decimale.
- **Alternativne jedinice:** uključeno ili isključeno, format, decimale, množilac (25.4 pretvara inče u milimetre), zaokruživanje, prefiks i sufiks.
- **Tolerancije:** nema, simetrične, odstupanje, granice ili osnovna, sa gornjim i donjim vrednostima, decimalama, visinom i položajem.

Promena bilo koje od njih na otvorenoj koti odbacuje crtež koji je drugi program napravio od nje, pa je CadCraft crta ponovo.

:::note
Vodoravni položaj teksta (pored prve ili druge pomoćne linije) i tekst ispod linije crtaju se na linearnim i poravnatim kotama; na ostalim kotama se čuvaju i snimaju, ali se još ne crtaju. Izbori uklapanja se čuvaju i snimaju, ali se još ne crtaju: CadCraft postavlja tekst po svom pravilu (iznad linije, spolja kad ne staje).
:::

## Ništa nije izabrano

Kad ništa nije izabrano, panel prikazuje:

- **Novi objekti:** sloj, boju, tip linije, debljinu i visinu teksta koje novi objekti dobijaju; jedinice crteža i format dužine; tip linije i debljinu tekućeg sloja; veličine za nove kote. Na listu, najpre ime lista, papir i orijentacija.
- **Prikaz:** centar, visina i širina onoga što je na ekranu. Ukucaj vrednost da pomeriš prikaz tamo.
- **Razno:** ikonica UCS-a uključena ili isključena, UCS (uvek Svetski: CadCraft još nema korisničke koordinatne sisteme) i razmera anotacije.

## Dugmad na vrhu

| Dugme | Radi |
|---|---|
| Levak | {{cmd:QSELECT}}: biranje po vrsti i svojstvu |
| Pokazivač | {{cmd:SELECT}}: biranje objekata u komandnoj liniji |
| Plus ili 1 | Da li klik dodaje u izbor (plus) ili ga zamenjuje (1); isto podešavanje kao u Podešavanjima, {{ui:CadCraft}} |
| Pribadača | Automatsko skrivanje, gore |

## Česte greške

- **Ukucavanje u polje ništa nije uradilo.** Pritisni {{key:Enter}} ili klikni negde drugde da primeniš. Crveno polje i napomena znače da je unos odbijen.
- **Dužina sa jedinicom je odbijena.** Crtež nema jedinice. Postavi {{ui:Jedinice}} bez ičega izabranog.
- **Prikazuju se samo Sloj i Boja.** Izabrano je više vrsta objekata i izabrano je **Sve**. Izaberi jednu vrstu na spisku na vrhu.
- **Neki objekti se nisu promenili.** Na zaključanim su slojevima. Otključaj sloj u panelu slojeva.
- **Ukucana slova su ušla u polje.** Dok polje ima kursor, tasteri ukucavaju tamo. Pritisni {{key:Enter}} ili {{key:Esc}}, pa ukucaj komandu.
