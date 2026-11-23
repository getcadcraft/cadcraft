---
title: Šrafura i ispuna površina
summary: Ispunite površinu punom bojom ili standardnim uzorkom klikom unutar nje ili odabirom zatvorenih oblika, postavite mjerilo i kut uzorka te naknadno promijenite šrafuru.
keywords: šrafura, bhatch, ispuna, puna ispuna, uzorak, ansi31, ansi37, cigla, zemlja, mreža, linije presjeka, poché, otok, granica, mjerilo, kut
from: e7feb344
---

## Što ćete izraditi

Presjek zida ispunjen uzorkom ANSI31, stup u njemu ostavljen prazan i puna ispuna u stupu.

## Šrafiranje klikom unutar površine

1. Nacrtajte pravokutnik (`REC`, `0,0`, `@2000,1200`) i kružnicu unutar njega (`C`, `1000,600`, `300`). Kliknite {{ui:Opseg}}.
2. Kliknite {{ui:Šrafura}} u skupini {{ui:Crtanje}} ili upišite `H` i pritisnite {{key:Enter}}. Povijest kaže koji je uzorak trenutačan, na primjer `Current hatch: ANSI31, scale 1, angle 0°`.
3. Upišite `P` i pritisnite {{key:Enter}}, upišite `ANSI31` i pritisnite {{key:Enter}}.
4. Upišite `SC` i pritisnite {{key:Enter}}, upišite `20` i pritisnite {{key:Enter}}. Veličine uzorka su na papiru, pa crtež ispisan u mjerilu 1:20 traži mjerilo 20.
5. Kod `Pick internal point` kliknite unutar pravokutnika, izvan kružnice. Šrafura se prikazuje kao pregled.
6. Pritisnite {{key:Enter}}. Pravokutnik je šrafiran; kružnica unutra ostaje prazna, jer je otok.

Kliknite unutar nekoliko površina prije pritiska na {{key:Enter}} da od njih napravite jednu šrafuru. `U` poništava posljednju površinu.

## Puna ispuna

1. Upišite `H` i pritisnite {{key:Enter}}.
2. Upišite `P`, pritisnite {{key:Enter}}, upišite `SOLID` i pritisnite {{key:Enter}}.
3. Kliknite unutar kružnice, zatim pritisnite {{key:Enter}}.

## Šrafiranje zatvorenih oblika koje odaberete

Umjesto klika unutra, kod `Pick internal point` upišite `S` (odabir objekata) i odaberite zatvorene polilinije, kružnice ili zatvorene elipse, zatim pritisnite {{key:Enter}}. Oblici unutar drugih ostaju naizmjence prazni (vanjski je šrafiran, sljedeći ostaje prazan i tako dalje).

## Uzorci

Upišite `?` na pitanje o uzorku za popis. Standardni su ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS i EARTH, te SOLID. U crtežu u inčima (ili s oblikom duljine stope i inči) rabe se veličine uzoraka u inčima, kao u AutoCADu; inače milimetarske.

{{ui:Kut}} (`A`) okreće cijeli uzorak: ANSI31 pod 90° nagnut je na drugu stranu.

**Datoteke uzoraka.** Kod `Pick internal point` upišite `F` (datoteka uzorka) i odaberite datoteku `.pat`. Uzorci iz nje pridružuju se popisu; ako ih je više, pita se koji da se rabi. Datoteka bez uzorka koji CadCraft može čitati to javlja, a svaki preskočeni uzorak se broji. Veličine u datoteci `.pat` nemaju vlastitu jedinicu, pa se čitaju u jedinicama crteža. Isprobane su samo datoteke zapisane u uobičajenom formatu `.pat`; nijedna koju je izradio drugi program.

## Promjena šrafure

Odaberite je (kliknite jednu od njezinih linija). U {{ui:Svojstva}}: {{ui:Uzorak}}, {{ui:Mjerilo uzorka}} i {{ui:Kut uzorka}}. Šrafure iz otvorenih crteža prikazuju uzorak ako je jedan od standardnih; ostale se prikazuju kao svijetli ton njihove boje.

## Česte pogreške

- **„Nema zatvorene granice oko te točke.“** Postoji razmak u obrisu ili je dio izvan zaslona: CadCraft gleda samo ono što je na zaslonu. Zatvorite razmak (uvećajte kutove) ili umanjite prikaz.
- **„Uzorak je pregust za crtanje u ovom mjerilu.“** Linije bi bile bliže nego što crtež može prikazati. Rabite veće mjerilo: probajte mjerilo ispisa (20 za 1:20).
- Uzorak izgleda ogromno ili sitno. Mjerilo je u jedinicama crteža po jedinici uzorka; vidi korak 4 iznad.
- **Šrafura više ne prati svoj obris.** Šrafura izrađena s {{cmd:HATCH}} ostaje uz objekte od kojih je nastala: pomaknete, okrenete ili skalirate obris i šrafura ide s njim; preoblikujete li je ručkom, šrafura se ponovno izračunava. Veza prestaje kad se obris više ne zatvara, kad sami ručno preoblikujete šrafuru ili kad je skratite, a naredbeni redak to kaže. Ništa se ne gubi: ponovno šrafirajte površinu da je ponovno povežete.

## Šrafura koja ostaje uz svoju granicu

Šrafura koju izradite s `HATCH` pamti što je omeđuje. Pomaknete, okrenete ili skalirate granicu i šrafura s uzorkom ide s njom. Povucite ručku da preoblikujete granicu i šrafura se ponovno izračunava. Pomaknete li šrafuru samu, ide i njezina granica, kao ispunjeni oblik u programu za crtanje.

Veza prestaje, a naredbeni redak to kaže, ako se granica više ne zatvara ili ručno preoblikujete šrafuru. Sama šrafura ostaje. Upišite `AS` dok šrafirate da napravite samostojeće šrafure. Kopiranjem šrafure s granicom kopija dobiva vlastitu vezu.

`HATCHEDIT` (`HE`) mijenja uzorak, mjerilo, kut i ishodište šrafure te je povezuje s granicom ili prekida vezu. Veza se sprema u datotekama DWG i DXF 2000. Datoteka DXF R12 nema objekt šrafure, a veze napravljene u drugim programima se ne čitaju: za njih rabite `HATCHEDIT` i Poveži (L).

Šrafura koja više nema granicu (granica je obrisana ili je datoteka stigla bez nje) može je dobiti natrag: `HATCHGENERATEBOUNDARY` (`HGB`) crta zatvorenu poliliniju oko svake petlje šrafure i, ako odgovorite Da, povezuje šrafuru s njima.

## Ispuna prijelazom boja

`GRADIENT` (`GD`) ispunjava površinu prijelazom boja umjesto uzorkom: isti odabiri kao kod `HATCH`, nakon što pita vrstu (linearni, cilindrični, sferni, polusferni, zakriviljeni, i svaki od njih obrnut), jednu boju s nijansom ili dvije boje, kut i je li središnje. U `HATCH` opcija `G` čini isto. `HATCHEDIT` `G` ili {{ui:Svojstva}} pod „Prijelaz boja“ mijenja prijelaz ili pretvara bilo koju šrafuru u njega.

Prijelaz boja prikazuje se na zaslonu i u ispisima. Spremite kao DWG 2004 ili noviji i drugi programi dobivaju pravu šrafuru s prijelazom boja. DXF 2000 i DWG 2000 nemaju prijelaz boja: tu ga CadCraft čuva za sebe, a drugi programi vide punu ispunu prvom bojom.

## Obrezivanje šrafure

`TRIM` reže šrafuru kao i svaki drugi objekt. Kliknite šrafuru na strani rezne rubne linije koju želite ukloniti: rubovi dijele šrafiranu površinu i taj se dio uklanja. U brzom načinu svaki objekt je rezna rubna linija; kad ih je mnogo, najprije odaberite rubove (opcija `T`). Obrezana šrafura više nije povezana sa svojom granicom, jer je više ne ispunjava.
