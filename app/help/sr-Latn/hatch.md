---
title: Šrafiranje i popunjavanje površina
summary: Popunite površinu punom bojom ili standardnim šablonom klikom unutar nje ili izborom zatvorenih oblika, podesite razmeru i ugao šablona i kasnije promenite šrafuru.
keywords: šrafura, hatch, bhatch, popuna, puna popuna, šablon, ansi31, ansi37, cigla, zemlja, mreža, linije preseka, zacrnjen presek, ostrvo, granica, razmera, ugao
from: 14399174
---

## Šta ćete napraviti

Presek zida popunjen šablonom ANSI31, kolona u njemu ostavljena prazna i puna popuna u koloni.

## Šrafiranje klikom unutar površine

1. Nacrtajte pravougaonik (`REC`, `0,0`, `@2000,1200`) i krug unutar njega (`C`, `1000,600`, `300`). Kliknite {{ui:Granice}}.
2. Kliknite {{ui:Šrafura}} u grupi {{ui:Crtanje}} ili ukucajte `H` i pritisnite {{key:Enter}}. Istorija kaže koji je šablon tekući, na primer `Tekuća šrafura: ANSI31, razmera 1, ugao 0°`.
3. Ukucajte `P` i pritisnite {{key:Enter}}, ukucajte `ANSI31` i pritisnite {{key:Enter}}.
4. Ukucajte `SC` i pritisnite {{key:Enter}}, ukucajte `20` i pritisnite {{key:Enter}}. Veličine šablona su na papiru, pa crtež odštampan u razmeri 1:20 traži razmeru 20.
5. Kod `Zadaj unutrašnju tačku` kliknite unutar pravougaonika, van kruga. Šrafura se prikazuje kao pregled.
6. Pritisnite {{key:Enter}}. Pravougaonik je našrafiran; krug unutra ostaje prazan, jer je ostrvo.

Kliknite unutar više površina pre pritiska na {{key:Enter}} da ih napravite jednom šrafurom. `U` uklanja poslednju površinu.

## Puna popuna

1. Ukucajte `H` i pritisnite {{key:Enter}}.
2. Ukucajte `P`, pritisnite {{key:Enter}}, ukucajte `SOLID` i pritisnite {{key:Enter}}.
3. Kliknite unutar kruga, pa pritisnite {{key:Enter}}.

## Šrafiranje izabranih zatvorenih oblika

Umesto klika unutar, ukucajte `S` (Izaberi objekte) kod `Zadaj unutrašnju tačku`, izaberite zatvorene polilinije, krugove ili zatvorene elipse, pa pritisnite {{key:Enter}}. Oblici unutar drugih ostaju prazni naizmenično (spoljašnji se šrafira, sledeći ostaje prazan, i tako dalje).

## Šabloni

Ukucajte `?` na pitanju za šablon da vidite listu. Standardni su ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH i SOLID. U crtežu u inčima (ili sa stopama i inčima kao formatom dužine) koriste se inčne veličine šablona, kao u AutoCAD-u; inače milimetarske.

{{ui:Ugao}} (`A`) okreće ceo šablon: ANSI31 pod 90° kosi se na drugu stranu.

**Datoteke šablona.** Ukucajte `F` (Datoteka šablona) kod `Zadaj unutrašnju tačku` i izaberite `.pat` datoteku. Šabloni iz nje pridružuju se listi; ako ih ima više, pitaće vas koji da koristite. Datoteka bez šablona koje CadCraft može da čita o tome javlja, a svaki preskočeni šablon se broji. Veličine u `.pat` datoteci nemaju sopstvenu jedinicu, pa se čitaju u jedinicama crteža. Isprobane su samo datoteke napisane u uobičajenom `.pat` formatu; nijedna napravljena u drugom programu.

## Promena šrafure

Izaberite je (kliknite jednu od njenih linija). U {{ui:Svojstva}}: {{ui:Šablon}}, {{ui:Razmera šablona}} i {{ui:Ugao šablona}}. Šrafure iz otvorenih crteža prikazuju svoj šablon kada je to jedan od standardnih; ostale se prikazuju kao svetao ton njihove boje.

## Česte greške

- **„Nema zatvorene granice oko te tačke.“** Postoji prekid u konturi ili je deo nje van ekrana: CadCraft gleda samo ono što je na ekranu. Zatvorite prekid (zumirajte na uglove) ili odzumirajte.
- **„Šablon je previše gust za crtanje u ovoj razmeri.“** Linije bi bile bliže nego što crtež može da prikaže. Koristite veću razmeru: probajte razmeru štampanja (20 za 1:20).
- **Šablon izgleda ogromno ili sitno.** Razmera je u jedinicama crteža po jedinici šablona; vidi korak 4 iznad.
- **Pomeranje konture ne pomera šrafuru.** Šrafura nije vezana za svoju granicu. Pomerite obe ili šrafirajte ponovo.

## Šrafura koja ostaje vezana za svoju granicu

Šrafura koju napravite sa `HATCH` pamti šta je ograničava. Pomerite, okrenite ili razmerite granicu, pa će šrafura i njen šablon poći sa njom. Prevucite hvataljku da preoblikujete granicu i šrafura se ponovo izračunava. Pomerite samo šrafuru i njena granica ide sa njom, kao popunjen oblik u programu za crtanje.

Veza se prekida, a komandna linija to kaže, ako granica više ne može da se zatvori ili ako šrafuru ručno preoblikujete. Sama šrafura ostaje. Ukucajte `AS` dok šrafirate da napravite šrafure koje stoje same. Kopirajte šrafuru sa granicom i kopija ima sopstvenu vezu.

`HATCHEDIT` (`HE`) menja šablon, razmeru, ugao i početnu tačku šrafure i povezuje je sa granicom ili prekida vezu. Veza se čuva u DWG i DXF 2000 datotekama. DXF R12 datoteka nema objekat šrafure, a veze napravljene u drugim programima se ne čitaju: za njih koristite `HATCHEDIT` i Link.

Šrafura koja više nema granicu (granica je obrisana ili je datoteka stigla bez nje) može je dobiti nazad: `HATCHGENERATEBOUNDARY` (`HGB`) crta zatvorenu poliliniju oko svake petlje šrafure i, ako odgovorite Da, povezuje šrafuru sa njima.

## Popuna gradijentom

`GRADIENT` (`GD`) popunjava površinu gradijentom umesto šablonom: isti izbori kao kod `HATCH`, posle čega pita vrstu (linearni, cilindrični, sferni, hemisferni, krivi, i svaki od njih obrnut), jednu boju sa nijansom ili dve boje, ugao, i da li je centriran. U `HATCH` opcija `G` radi isto. `HATCHEDIT` `G`, ili {{ui:Svojstva}} pod Gradijent, menja gradijent ili pretvara bilo koju šrafuru u gradijent.

Gradijent se prikazuje na ekranu i u štampi. Sačuvajte kao DWG 2004 ili noviji i drugi programi dobijaju pravu gradijent šrafuru. DXF 2000 i DWG 2000 nemaju gradijent: tamo ga CadCraft čuva samo za sebe, a drugi programi vide punu popunu prvom bojom.

## Odsecanje šrafure

`TRIM` seče šrafuru kao i svaki drugi objekat. Kliknite šrafuru sa strane rezne ivice koju želite da uklonite: ivice dele šrafiranu površinu i taj deo se uklanja. U brzom režimu svaki objekat je rezna ivica; izaberite ivice prvo (opcija `T`) kada ih ima mnogo. Odsečena šrafura više nije povezana sa svojom granicom, jer je više ne popunjava.
