---
title: CadCraft zaslon
summary: Obilazak svake trake, ploče i kartice u aplikaciji za crtanje, po nazivu koji ima na zaslonu.
keywords: zaslon, sučelje, alatna traka, vrpca, ploče, naredbeni redak, statusna traka, kartice, kartice layouta, svojstva, ploča slojeva, obilazak
from: b5a33388
---

Zaslon ima sedam dijelova. Odozgo prema dolje: traka aplikacije, alatna traka, područje crtanja s pločom sa svake strane, kartice ispod crteža, naredbeni redak i statusna traka.

## Traka aplikacije

Tanka traka na samom vrhu pripada web-mjestu, a ne crtežu. Prikazuje znak CadCraft, naziv aplikacije, verziju koju koristite, vezu na stranicu aplikacije, gumb {{ui:Pomoć}} (ili {{key:F1}}), gumb {{ui:Spremi za offline}}, gumb {{ui:Cijeli zaslon}} i dva gumba teme, {{ui:Papir}} i {{ui:Model}}.

Gumb {{ui:Postavke}} (zupčanik) sadrži CadCraftove vlastite postavke i one koje dijele sve aplikacije: vidi [Postavke CadCrafta](topic:settings).

{{ui:Spremi za offline}} čuva kopiju CadCrafta, uključujući njegov DWG čitač, u ovom pregledniku da se otvara bez veze. Njegov natpis prikazuje stanje: „Spremanje N od M“, „Spremno za offline“, „Spremanje nije uspjelo“ ili „Offline nije dostupan“. Vidi [Rad offline](common:offline).

:::note
Gumbi {{ui:Papir}} i {{ui:Model}} na traci aplikacije mijenjaju samo boje zaslona: {{ui:Papir}} je svijetla tema, {{ui:Model}} tamna. Nemaju veze s karticom {{ui:Model}} ispod crteža, koja prebacuje između crteža i njegovih listova.
:::

Gumb {{ui:Cijeli zaslon}} ili {{key:Ctrl+Shift+F}} (tipka Control na svakom računalu, uključujući Mac) mijenja tri načina zaslona: uobičajeni, cijeli zaslon i cijeli zaslon sa skrivenim trakama. Sa skrivenim trakama pomaknite pokazivač na gornji rub zaslona da ih vratite.

## Alatna traka

Ispod trake aplikacije je alatna traka. Svaki gumb izvodi naredbu, točno kao da ste je upisali, pa naredbeni redak postavlja ista pitanja na oba načina. Zadržite pokazivač na gumbu da vidite alias njegove naredbe. Skupine su:

| Skupina | Gumbi |
|---|---|
| Datoteka | {{ui:Novo}}, {{ui:Otvori}}, {{ui:Spremi}}, {{ui:Spremi kao}}, {{ui:Ispis}} |
| Crtanje | {{ui:Linija}}, {{ui:Polilinija}}, {{ui:Kružnica}}, {{ui:Luk}}, {{ui:Pravokutnik}}, {{ui:Poligon}}, {{ui:Elipsa}}, {{ui:Tekst}}, {{ui:Odlomak}}, {{ui:Šrafura}} i {{ui:Više}}: {{ui:Točka}}, {{ui:Konstrukcijska linija}} i {{ui:Zraka}} (vidi [Konstrukcijske linije i zrake](topic:construction-lines)) |
| Izmjena | {{ui:Pomakni}}, {{ui:Kopiraj}}, {{ui:Zakreni}}, {{ui:Skaliraj}}, {{ui:Zrcali}}, {{ui:Rastegni}}, {{ui:Odmakni}}, {{ui:Skrati}}, {{ui:Produži}}, {{ui:Zaobli}}, {{ui:Skosi}}, {{ui:Rastavi}}, {{ui:Izbriši}} i {{ui:Više}}: {{ui:Niz}}, {{ui:Spoji}}, {{ui:Uskladi svojstva}}, {{ui:Prekini}} i {{ui:Produlji}} |
| Bilješke | {{ui:Linearna}}, {{ui:Poravnana}}, {{ui:Kut}}, {{ui:Radijus}}, {{ui:Promjer}} (kote), {{ui:Vodilica}} (višestruka vodilica) i {{ui:Više}}: {{ui:Lančana kota}}, {{ui:Bazna kota}} i {{ui:Revizijski oblak}} |
| Parametarski | {{ui:Automatski}}, {{ui:Ograniči}}, {{ui:Kota}}, {{ui:Parametri}} i {{ui:Više}} sa svakim ograničenjem (vidi [Ograničavanje crteža](topic:constraints)) |
| Blokovi | {{ui:Izradi}}, {{ui:Umetni}}, {{ui:Knjižnica}} i {{ui:Više}}: {{ui:Uredi blok}} i {{ui:Definiraj atribut}} |
| Listovi | {{ui:Novi list}}, {{ui:Viewport}} |
| Uređivanje | {{ui:Poništi}}, {{ui:Ponovi}}, {{ui:Kopiraj}} (u međuspremnik), {{ui:Zalijepi}} i {{ui:Više}}: izbornik s {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Zalijepi}}, {{ui:Zalijepi na isto mjesto}}, {{ui:Dupliciraj i pomakni}}, {{ui:Izbriši}}, {{ui:Odaberi sve}}, {{ui:Poništi odabir}}, {{ui:Brzi odabir}}, {{ui:Odaberi slične}} i {{ui:Pronađi i zamijeni}}, svaki sa svojom tipkom |
| Pogled | {{ui:Opseg}}, {{ui:Prozor}}, {{ui:Prethodno}} i {{ui:Više}}: {{ui:Izmjeri udaljenost}}, {{ui:Površina}}, {{ui:Mjerenje (radijus, kut …)}} te podijeljeni zaslon: {{ui:Podijeli jedno do drugog}}, {{ui:Podijeli jedno iznad drugog}}, {{ui:Četiri ploče}}, {{ui:Jedna ploča}} (vidi [Podjela zaslona](topic:split-screen)) i {{ui:Okreni prikaz 90° ulijevo}}, {{ui:Okreni prikaz 90° udesno}}, {{ui:Natrag na svijet}} (vidi [Okretanje prikaza](topic:ucs-and-turned-view)) |

{{ui:Kopiraj}} u skupini {{ui:Izmjena}} je naredba {{cmd:COPY}} (bazna točka, zatim kamo ide svaka kopija); {{ui:Kopiraj}} u skupini {{ui:Uređivanje}} stavlja objekte u međuspremnik za {{ui:Zalijepi}}. Vidi [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste). Gumb naredbe koja se izvodi ostaje istaknut dok naredba ne završi. Opisi alata navode Windows prečace („Ctrl+O“); na Macu radi i {{key:Mod+O}}.

U niskom prozoru (primjerice prijenosno računalo sa zaslonom skaliranim na 125 % ili više) alatna traka nikada ne zauzima mjesto crteža: kada bi crtež dobio premalo visine, gumbi ispuštaju riječi ispod ikona i nazive skupina (zadržite pokazivač na gumbu za njegov naziv), a ako ni to nije dovoljno, alatna traka postaje jedan redak koji se pomiče postrance. Viši prozor vraća riječi.

## Lijeva ploča

Ploča s lijeve strane ima tri odjeljka.

- **{{ui:Slojevi}}.** Svaki sloj u crtežu, s ispunjenom točkom na aktivnom. Kliknite naziv da taj sloj postane aktivan. Svaki redak ima uzorak boje (kliknite ga za odabir boje) i četiri gumba: uključeno/isključeno (oko), zamrzni (pahulja), zaključaj (lokot) i ispis (pisač). {{ui:Novi sloj}} otvara okvir za dodavanje. Vidi [Organizacija crteža slojevima](topic:layers).
- **{{ui:Blokovi}}.** Blokovi definirani u crtežu, koliko se puta svaki koristi i gumb {{ui:Umetni}} za svaki. Vidi [Izrada i umetanje blokova](topic:blocks).
- **{{ui:Crtež}}.** Podaci o otvorenoj datoteci: naziv (s „(promijenjeno)“ kada ima nespremljenih izmjena), format, veličina, jedinice, broj objekata, slojeva, blokova i listova. Nakon otvaranja datoteke okvir „O ovoj datoteci“ navodi sve što CadCraft nije mogao prikazati ili je morao pretvoriti.

## Područje crtanja

Sredina zaslona je crtež. Pokazivač je nišan. Kada CadCraft traži točku, mali marker i natpis („Krajnja točka“, „Polovište“) pokazuju gdje će sletjeti hvatanje objekata. Kada traži objekte, nišan ima okvir za odabir, a objekti pod njim zasvijetle.

Kada je crtež prazan, kartica „Počnite crtati“ prikazuje nekoliko prvih naredbi. Nestaje čim izvedete naredbu ili otvorite datoteku. DWG ili DXF datoteku možete ispustiti bilo gdje na ovom području da je otvorite.

## Kartice ispod crteža

Ispod crteža su kartice: prvo {{ui:Model}}, zatim {{ui:3D}}, zatim jedna kartica po listu (layoutu), pa gumb {{ui:+}}.

- {{ui:Model}} je sam crtež, u punoj veličini, u jedinicama crteža.
- {{ui:3D}} prikazuje crtež koji leži na tlu i puna tijela izrađena iz njega. Dok je prikazan, alatna traka ima skupinu {{ui:3D}} umjesto skupina crteža. Vidi [Model u 3D-u](topic:3d-solids).
- Svaka kartica lista je list papira sa zaglavljem i viewportima na model. Ono što ondje crtate je u papirnim jedinicama (milimetri ili inči). Dvaput kliknite unutar viewporta da kroz njega radite na modelu (vidi [Rad na modelu kroz viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Dugačak naziv lista skraćuje se na kartici; zadržite pokazivač na kartici za cijeli naziv. S mnogo listova {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Kartice listova}} › {{ui:Samo brojevi listova}} prikazuje na kartici samo broj svakog lista (A-101).
- {{ui:+}} izrađuje novi list s okvirom, zaglavljem i jednim viewportom. Isto je kao naredba {{cmd:LAYOUT}}.
- Dvaput kliknite karticu lista da je preimenujete. Kada je kartica fokusirana, {{key:Left}} i {{key:Right}} prelaze između kartica.

Svaka kartica čuva vlastito zumiranje i pomak prikaza. Vidi [Postavljanje lista](topic:sheets-and-viewports).

## Desna ploča: Svojstva

Ploča s desne strane mijenja se prema onome što je odabrano.

- **Ništa nije odabrano, na kartici {{ui:Model}}:** naslov glasi {{ui:Trenutne postavke}}. Ovdje postavljate {{ui:Sloj}}, {{ui:Boja}} i {{ui:Visina teksta}} za nove objekte, {{ui:Jedinice}} crteža i veličine za nove kote ({{ui:Visina teksta}}, {{ui:Veličina strelice}}, {{ui:Decimale}}, {{ui:Ukupno mjerilo}}).
- **Ništa nije odabrano, na listu:** naslov glasi „List:“ i naziv lista. Možete preimenovati list, promijeniti njegov {{ui:Papir}} i {{ui:Orijentacija}}, {{ui:Ispiši ovaj list}} ili {{ui:Izbriši ovaj list}}. Postavke za nove objekte slijede ispod.
- **Odabran je jedan objekt:** njegova vrsta kao naslov (Linija, Kružnica, Tekst, Kota, Viewport …), zatim njegov sloj, boja i geometrija. Upišite novu vrijednost i pritisnite {{key:Enter}} da je promijenite.
- **Odabrano je više objekata:** koliko ih je i njihov zajednički {{ui:Sloj}} i {{ui:Boja}}. Promjena bilo čega mijenja sve. „Razlikuje se“ znači da se razlikuju.

Vidi [Uređivanje ručkama i Svojstvima](topic:grips-and-properties).

Ispod nje ploča {{ui:Parametri}} otvara se kada odaberete {{ui:Parametri}} ili upišete {{cmd:PARAMETERS}}: svaki parametar i kotno ograničenje u jednoj tablici. Vidi [Korištenje parametara i jednadžbi](topic:parameters).

## Naredbeni redak

Pri dnu je naredbeni redak: povijest onoga što ste učinili, a ispod nje upit.

- Natpis upita glasi `Command:` kada se ništa ne izvodi. Dok se naredba izvodi, prikazuje pitanje, njegove opcije u uglatim zagradama i zadanu vrijednost u šiljastim zagradama, na primjer `Specify radius of circle [Diameter] <500>:`.
- Dok upisujete naziv naredbe, savjet desno predlaže odgovarajuće naredbe. Pritisnite {{key:Tab}} da prihvatite prvu. „Nema takve naredbe“ znači da ništa ne odgovara.
- {{key:Up}} i {{key:Down}} vraćaju retke koje ste prije upisali.
- Povijest čuva posljednjih 400 redaka. Ovdje se pojavljuju poruke naredbi, mjerenja iz {{cmd:DIST}} i {{cmd:LIST}} te izvješća o spremanju i plotanju.

## Statusna traka

Sasvim donji redak je statusna traka.

- **Koordinate** lijevo: X i Y nišana. Dok naredba ima baznu točku, prikazuje i udaljenost i kut od nje, na primjer `Δ 1200 < 90°`.
- **Poruke** u sredini, poput „Ortho on“ ili „Aktivni sloj: Walls“. Nestaju nakon nekoliko sekundi.
- **{{ui:Mreža}}**, **{{ui:Orto}}**, **{{ui:Polarno}}**, **{{ui:Hvatanje}}**, **{{ui:Praćenje}}**, **{{ui:Dyn}}** i **{{ui:LWT}}** desno. Svaki je prekidač; pritisnut gumb je uključen. {{ui:LWT}} prikazuje debljine linija na zaslonu (vidi [Debljine i tipovi linija](topic:units-papers-scales#line-weights-and-linetypes)). Mala strelica pored {{ui:Hvatanje}} otvara {{ui:Hvatanja objekata}}, gdje označavate koja su hvatanja aktivna. Vidi [Hvatanje točaka na objektima](topic:object-snaps).

## Dijaloški okvir Ispis u PDF

{{ui:Ispis}} (ili {{key:Mod+P}}) otvara dijaloški okvir {{ui:Ispis u PDF}}, s postavkama lijevo i pregledom uživo desno. Vidi [Plotanje u PDF](topic:plot-pdf).

## Pomoć

{{key:F1}} ili gumb {{ui:Pomoć}} otvara ovu pomoć kao bočnu ploču; crtež ostaje upotrebljiv pored nje. Radi bez veze. {{key:F1}} ponovno, ili {{key:Esc}} unutar ploče, zatvara je. Vidi [Korištenje ove pomoći](common:help).
