---
title: Šrafura i ispuna područja
summary: Ispunite područje punom bojom ili standardnim uzorkom klikom unutar njega ili odabirom zatvorenih oblika, postavite mjerilo i kut uzorka te naknadno promijenite šrafuru.
keywords: šrafura, bhatch, ispuna, puna ispuna, uzorak, ansi31, ansi37, cigla, zemlja, mreža, linije presjeka, poché, otok, granica, mjerilo, kut
from: 14399174
---

## Što ćete napraviti

Presjek zida ispunjen uzorkom ANSI31, stup u njemu ostavljen prazan i puna ispuna u stupu.

## Šrafura klikom unutar područja

1. Nacrtajte pravokutnik (`REC`, `0,0`, `@2000,1200`) i kružnicu unutar njega (`C`, `1000,600`, `300`). Kliknite {{ui:Opseg}}.
2. Kliknite {{ui:Hatch}} u skupini {{ui:Draw}} ili upišite `H` i pritisnite {{key:Enter}}. Povijest pokazuje koji je uzorak trenutačan, na primjer `Trenutna šrafura: ANSI31, mjerilo 1, kut 0°`.
3. Upišite `P` i pritisnite {{key:Enter}}, upišite `ANSI31` i pritisnite {{key:Enter}}.
4. Upišite `SC` i pritisnite {{key:Enter}}, upišite `20` i pritisnite {{key:Enter}}. Veličine uzoraka su na papiru, pa crtež ispisan u mjerilu 1:20 traži mjerilo 20.
5. Kod `Odredite unutarnju točku` kliknite unutar pravokutnika, izvan kružnice. Šrafura se prikazuje kao pregled.
6. Pritisnite {{key:Enter}}. Pravokutnik je našrafiran; kružnica unutra ostaje prazna jer je otok.

Prije pritiska na {{key:Enter}} kliknite unutar više područja da ih spojite u jednu šrafuru. `U` poništava zadnje područje.

## Puna ispuna

1. Upišite `H` i pritisnite {{key:Enter}}.
2. Upišite `P`, pritisnite {{key:Enter}}, upišite `SOLID` i pritisnite {{key:Enter}}.
3. Kliknite unutar kružnice, zatim pritisnite {{key:Enter}}.

## Šrafura odabranih zatvorenih oblika

Umjesto klika unutar, kod `Odredite unutarnju točku` upišite `S` (Odaberi objekte (S)) i odaberite zatvorene polilinije, kružnice ili zatvorene elipse, zatim pritisnite {{key:Enter}}. Oblici unutar drugih ostaju naizmjenično prazni (vanjski je našrafiran, sljedeći prazan, i tako dalje).

## Uzorci

Na pitanje za uzorak upišite `?` za popis. Standardni su ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS i EARTH te SOLID. U crtežu u inčima (ili s stopama i inčima kao formatom duljine) koriste se veličine uzoraka u inčima, kao u AutoCAD-u; inače se koriste milimetarske.

{{ui:Kut}} (`A`) zakreće cijeli uzorak: ANSI31 pod kutom 90° nagnut je na drugu stranu.

**Datoteke uzoraka.** Kod `Odredite unutarnju točku` upišite `F` (Datoteka uzorka (F)) i odaberite datoteku `.pat`. Uzorci iz nje pridružuju se popisu; ako ih je više, pitat će vas koji želite koristiti. Datoteka bez uzorka koje CadCraft može pročitati to će javiti, a svaki preskočeni uzorak bit će prebrojan. Veličine u datoteci `.pat` nemaju vlastitu mjernu jedinicu, pa se čitaju u jedinicama crteža. Isprobane su samo datoteke napisane u uobičajenom formatu `.pat`; nijedna nije nastala u drugom programu.

## Promjena šrafure

Odaberite je (kliknite jednu od njezinih linija). U {{ui:Svojstva}}: {{ui:Uzorak}}, {{ui:Mjerilo uzorka}} i {{ui:Kut uzorka}}. Šrafure iz otvorenih crteža prikazuju svoj uzorak kad je riječ o standardnom; ostale se prikazuju kao svijetli ton njihove boje.

## Česte pogreške

- **„Nema zatvorene granice oko te točke.“** Postoji prekid u obrisu ili je dio izvan zaslona: CadCraft gleda samo ono što je na zaslonu. Zatvorite prekid (uvećajte kutove) ili umanjite prikaz.
- **„Uzorak je pregust za crtanje u ovom mjerilu.“** Linije bi bile bliže nego što crtež može prikazati. Upotrijebite veće mjerilo: probajte mjerilo ispisa (20 za 1:20).
- Uzorak izgleda ogromno ili sitno. Mjerilo je u jedinicama crteža po jedinici uzorka; vidi korak 4 iznad.
- Pomicanje obrisa ne pomiče šrafuru. Šrafura nije vezana uz svoju granicu. Pomaknite oboje ili ponovno našrafirajte.

## Šrafura koja ostaje uz svoju granicu

Šrafura koju napravite naredbom `HATCH` pamti što je omeđuje. Pomaknete li, zakrenete ili skalirate granicu, šrafura i njezin uzorak idu s njom. Povlačenjem ručke oblikujete granicu i šrafura se ponovno izračunava. Pomaknete li samu šrafuru, pomiče se i njezina granica, kao ispunjeni oblik u programu za crtanje.

Veza prestaje, a naredbeni redak to javlja, ako se granica više ne zatvara ili šrafuru ručno preoblikujete. Sama šrafura ostaje. Upišite `AS` dok šrafirate da napravite samostalne šrafure. Kopiranjem šrafure s granicom kopija dobiva vlastitu vezu.

`HATCHEDIT` (`HE`) mijenja uzorak, mjerilo, kut i ishodište šrafure te je povezuje s granicom ili prekida vezu. Veza se sprema u datotekama DWG i DXF 2000. Datoteka DXF R12 nema objekt šrafure, a veze napravljene u drugim programima ne čitaju se: za njih upotrijebite `HATCHEDIT` i opciju Veza (Link).

Šrafura koja više nema granicu (granica je izbrisana ili je datoteka stigla bez nje) može je dobiti natrag: `HATCHGENERATEBOUNDARY` (`HGB`) crta zatvorenu poliliniju oko svake petlje šrafure i, ako odgovorite Da, povezuje šrafuru s njima.

## Ispuna prijelazom boja

`GRADIENT` (`GD`) ispunjava područje prijelazom boja umjesto uzorkom: isti odabiri kao kod `HATCH`, nakon što pita vrstu (linearna, cilindrična, sferna, polusferna, zakrivljena i svaka od njih obrnuta), jednu boju s nijansom ili dvije boje, kut te je li centrirano ili ne. U `HATCH` opcija `G` radi isto. `HATCHEDIT` `G` ili {{ui:Svojstva}} pod Prijelaz boja mijenja prijelaz ili pretvara bilo koju šrafuru u njega.

Prijelaz boja prikazuje se na zaslonu i u ispisima. Spremite li kao DWG 2004 ili noviji, drugi programi dobivaju pravu šrafuru prijelaza boja. DXF 2000 i DWG 2000 nemaju prijelaz boja: tu ga CadCraft zadržava za sebe, a drugi programi vide punu ispunu prvom bojom.

## Skraćivanje šrafure

`TRIM` reže šrafuru kao i svaki drugi objekt. Kliknite šrafuru na strani rezne rubne linije koju želite ukloniti: rubovi dijele šrafirano područje i taj se dio uklanja. U brzom načinu svaki je objekt rezna linija; kad ih je mnogo, najprije odaberite rubove, opcija Rubovi (`T`). Skraćena šrafura više nije povezana sa svojom granicom jer je više ne ispunjava.
