---
title: Šrafura i ispuna površina
summary: Ispunite površinu punom bojom ili standardnim šablonom klikom unutar nje ili izborom zatvorenih oblika, podesite razmeru i ugao šablona i kasnije menjajte šrafuru.
keywords: šrafura, hatch, bhatch, ispuna, puna ispuna, šablon, ansi31, ansi37, cigla, zemlja, mreža, linije preseka, poše, ostrvo, granica, razmera, ugao
from: e7feb344
---

## Šta ćete napraviti

Presek zida ispunjen šablonom ANSI31, stub u njemu ostavljen prazan i puna ispuna u stubu.

## Šrafura klikom unutar površine

1. Nacrtajte pravougaonik (`REC`, `0,0`, `@2000,1200`) i krug unutar njega (`C`, `1000,600`, `300`). Kliknite {{ui:Granice}}.
2. Kliknite {{ui:Šrafura}} u grupi {{ui:Crtanje}}, ili ukucajte `H` i pritisnite {{key:Enter}}. Istorija kaže koji je šablon tekući, na primer `Current hatch: ANSI31, scale 1, angle 0°`.
3. Ukucajte `P` i pritisnite {{key:Enter}}, ukucajte `ANSI31` i pritisnite {{key:Enter}}.
4. Ukucajte `SC` i pritisnite {{key:Enter}}, ukucajte `20` i pritisnite {{key:Enter}}. Veličine šablona su na papiru, pa crtež odštampan u razmeri 1:20 traži razmeru 20.
5. Na upitu `Pick internal point` kliknite unutar pravougaonika, van kruga. Šrafura se prikazuje kao pregled.
6. Pritisnite {{key:Enter}}. Pravougaonik je našrafiran; krug unutra ostaje prazan, jer je ostrvo.

Kliknite unutar više površina pre nego što pritisnete {{key:Enter}} da ih napravite u jednu šrafuru. `U` opoziva poslednju površinu.

## Puna ispuna

1. Ukucajte `H` i pritisnite {{key:Enter}}.
2. Ukucajte `P`, pritisnite {{key:Enter}}, ukucajte `SOLID` i pritisnite {{key:Enter}}.
3. Kliknite unutar kruga, pa pritisnite {{key:Enter}}.

## Šrafura izabranih zatvorenih oblika

Umesto klikanja unutra, ukucajte `S` (Izaberi objekte) na upitu `Pick internal point`, izaberite zatvorene polilinije, krugove ili zatvorene elipse, pa pritisnite {{key:Enter}}. Oblici unutar drugih ostaju prazni redom (spoljašnji se šrafira, sledeći unutra ostaje prazan, i tako dalje).

## Šabloni

Ukucajte `?` na pitanju o šablonu da dobijete spisak. Standardni su ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS i EARTH, i SOLID. U crtežu u inčima (ili sa stopama i inčima kao formatom dužine) koriste se inčne veličine šablona, kao u AutoCAD-u; inače milimetarske.

{{ui:Ugao}} (`A`) okreće ceo šablon: ANSI31 pod uglom od 90° nagnut je na drugu stranu.

**Datoteke šablona.** Ukucajte `F` (Datoteka šablona) na `Pick internal point` i izaberite datoteku `.pat`. Šabloni iz nje se priključuju spisku; ako ih ima više, pitaće vas koji da koristite. Datoteka bez šablona koji CadCraft može da pročita to kaže, a svaki preskočeni šablon se broji. Veličine u datoteci `.pat` nemaju sopstvenu jedinicu, pa se čitaju u jedinicama crteža. Isprobane su samo datoteke napisane u uobičajenom formatu `.pat`; nijedna koju je napravio drugi program.

## Promena šrafure

Izaberite je (kliknite jednu od njenih linija). U {{ui:Svojstva}}: {{ui:Šablon}}, {{ui:Razmera šablona}} i {{ui:Ugao šablona}}. Šrafure iz otvorenih crteža prikazuju svoj šablon kada je on jedan od standardnih; ostale se prikazuju kao svetao ton njihove boje.

## Česte greške

- **"Nema zatvorene granice oko te tačke."** Postoji prekid u konturi, ili je deo konture van ekrana: CadCraft gleda samo ono što je na ekranu. Zatvorite prekid (uvećajte uglove) ili umanjite prikaz.
- **"Šablon je pregust za crtanje u ovoj razmeri."** Linije bi bile bliže nego što crtež može da prikaže. Koristite veću razmeru: probajte razmeru štampanja (20 za 1:20).
- **Šablon izgleda ogroman ili sitan.** Razmera je u jedinicama crteža po jedinici šablona; vidi korak 4 iznad.
- **Šrafura više ne prati svoju konturu.** Šrafura napravljena komandom {{cmd:HATCH}} ostaje povezana sa objektima od kojih je napravljena: pomerite, okrenite ili razmerite konturu, i šrafura ide s njom; preoblikujte je hvatačem i šrafura se ponovo izračunava. Veza prestaje kada se kontura više ne zatvara, kada sami ručno preoblikujete šrafuru, ili kada je skratite, a komandna linija to kaže. Ništa se ne gubi: ponovo našrafirajte površinu da biste je ponovo povezali.

## Šrafura koja ostaje uz svoju granicu

Šrafura koju napravite komandom `HATCH` pamti šta je omeđuje. Pomerite, okrenite ili razmerite granicu, i šrafura i njen šablon idu s njom. Prevucite hvatač da biste preoblikovali granicu, i šrafura se ponovo izračunava. Pomerite samu šrafuru i njena granica ide takođe, kao popunjen oblik u programu za crtanje.

Veza prestaje, i komandna linija to kaže, ako se granica više ne zatvara ili ako ručno preoblikujete šrafuru. Sama šrafura ostaje. Ukucajte `AS` tokom šrafiranja da napravite šrafure koje stoje same. Kopirajte šrafuru sa njenom granicom i kopija ima svoju vezu.

`HATCHEDIT` (`HE`) menja šablon, razmeru, ugao i početnu tačku šrafure, i povezuje je sa granicom ili prekida vezu. Veza se čuva u datotekama DWG i DXF 2000. DXF R12 datoteka nema objekat šrafure, a veze napravljene u drugim programima se ne čitaju: za njih koristite `HATCHEDIT` i povezivanje.

Šrafura koja više nema granicu (granica je obrisana, ili je datoteka stigla bez nje) može je vratiti: `HATCHGENERATEBOUNDARY` (`HGB`) crta zatvorenu poliliniju oko svake petlje šrafure i, ako odgovorite Da, povezuje šrafuru sa njima.

## Gradijentna ispuna

`GRADIENT` (`GD`) ispunjava površinu gradijentom umesto šablonom: isti izbori kao kod `HATCH`, a pre toga pita za vrstu (linearni, cilindrični, sferni, hemisferni, krivi, i svaki od njih obrnut), jednu boju sa nijansom ili dve boje, ugao i da li je centriran. U `HATCH` opcija `G` radi isto. `HATCHEDIT` `G`, ili {{ui:Svojstva}} pod Gradijent, menja gradijent ili pretvara bilo koju šrafuru u gradijent.

Gradijent se prikazuje na ekranu i u štampi. Sačuvajte kao DWG 2004 ili noviji i drugi programi dobijaju pravu gradijentnu šrafuru. DXF 2000 i DWG 2000 nemaju gradijent: tamo ga CadCraft čuva za sebe, a drugi programi vide punu ispunu prvom bojom.

## Skraćivanje šrafure

`TRIM` seče šrafuru kao svaki drugi objekat. Kliknite šrafuru sa strane rezne ivice koju želite da uklonite: ivice dele našrafiranu površinu i taj deo se uklanja. U brzom režimu svaki objekat je rezna ivica; najpre izaberite ivice (opcija `T`) kada ih ima mnogo. Skraćena šrafura više nije povezana sa granicom, jer je više ne ispunjava.
