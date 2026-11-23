---
title: Šrafura i područja ispune
summary: Ispunite područje punom bojom ili standardnim uzorkom klikom unutra ili biranjem zatvorenih oblika, podesite razmjeru i ugao uzorka i kasnije promijenite šrafuru.
keywords: šrafura, bhatch, ispuna, puna ispuna, uzorak, ansi31, ansi37, cigla, zemlja, mreža, linije presjeka, poché, ostrvo, granica, razmjera, ugao
from: e7feb344
---

## Šta ćete napraviti

Presjek zida ispunjen uzorkom ANSI31, kolona u njemu ostavljena prazna, i puna ispuna u koloni.

## Šrafura klikom unutar područja

1. Nacrtajte pravougaonik (`REC`, `0,0`, `@2000,1200`) i krug unutar njega (`C`, `1000,600`, `300`). Kliknite {{ui:Granice}}.
2. Kliknite {{ui:Šrafura}} u grupi {{ui:Crtanje}}, ili ukucajte `H` i pritisnite {{key:Enter}}. Historija kaže koji je uzorak tekući, na primjer `Current hatch: ANSI31, scale 1, angle 0°`.
3. Ukucajte `P` i pritisnite {{key:Enter}}, ukucajte `ANSI31` i pritisnite {{key:Enter}}.
4. Ukucajte `SC` i pritisnite {{key:Enter}}, ukucajte `20` i pritisnite {{key:Enter}}. Veličine uzoraka su na papiru, pa crtež odštampan u 1:20 traži razmjeru 20.
5. Kod `Pick internal point`, kliknite unutar pravougaonika, van kruga. Šrafura se prikazuje kao pregled.
6. Pritisnite {{key:Enter}}. Pravougaonik je našrafiran; krug unutra ostaje prazan, jer je ostrvo.

Kliknite unutar nekoliko područja prije nego što pritisnete {{key:Enter}} da ih napravite u jednu šrafuru. `U` poništava posljednje područje.

## Puna ispuna

1. Ukucajte `H` i pritisnite {{key:Enter}}.
2. Ukucajte `P`, pritisnite {{key:Enter}}, ukucajte `SOLID` i pritisnite {{key:Enter}}.
3. Kliknite unutar kruga, zatim pritisnite {{key:Enter}}.

## Šrafura zatvorenih oblika koje izaberete

Umjesto klikanja unutra, ukucajte `S` (Odaberi objekte) kod `Pick internal point`, odaberite zatvorene polilinije, krugove ili zatvorene elipse, i pritisnite {{key:Enter}}. Oblici unutar drugih ostaju prazni redom (spoljašnji je našrafiran, sljedeći unutra prazan, i tako dalje).

## Uzorci

Ukucajte `?` na pitanje o uzorku za spisak. Standardni su ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH i SOLID. U crtežu u inčima (ili sa stopama i inčima kao formatom dužine) koriste se inčne veličine uzoraka, kao u AutoCAD-u; inače milimetarske.

{{ui:Ugao}} (`A`) okreće cijeli uzorak: ANSI31 pod 90° kosi se u drugom smjeru.

**Datoteke uzoraka.** Ukucajte `F` (Datoteka uzorka) kod `Pick internal point` i izaberite `.pat` datoteku. Uzorci iz nje ulaze u spisak; kad ih ima više, pita se koji da se koristi. Datoteka bez uzorka koji CadCraft može pročitati to javlja, a svaki preskočeni uzorak se broji. Veličine u `.pat` datoteci nemaju vlastitu jedinicu, pa se čitaju u jedinicama crteža. Isprobane su samo datoteke napisane u uobičajenom `.pat` formatu; nijedna napravljena drugim programom.

## Promjena šrafure

Odaberite je (kliknite jednu od njenih linija). U {{ui:Svojstva}}: {{ui:Uzorak}}, {{ui:Razmjera uzorka}} i {{ui:Ugao uzorka}}. Šrafure iz otvorenih crteža pokazuju svoj uzorak kad je jedan od standardnih; ostale se prikazuju kao svijetao ton njihove boje.

## Česte greške

- **Nema zatvorene granice oko te tačke.** U obrisu postoji prekid, ili je dio van ekrana: CadCraft gleda samo ono što je na ekranu. Zatvorite prekid (uvećajte uglove), ili umanjite prikaz.
- **Uzorak je pregust za crtanje u ovoj razmjeri.** Linije bi bile bliže nego što crtež može prikazati. Koristite veću razmjeru: pokušajte razmjeru štampe (20 za 1:20).
- **Uzorak izgleda ogroman ili sitan.** Razmjera je u jedinicama crteža po jedinici uzorka; vidi korak 4 iznad.
- **Šrafura je prestala da prati svoj obris.** Šrafura napravljena pomoću {{cmd:HATCH}} ostaje uz objekte od kojih je napravljena: pomjerite, okrenite ili skalirajte obris i šrafura ide s njim; preoblikujte je hvataljkom i šrafura se ponovo izračunava. Veza prestaje kad obris više nije zatvoren, kad ručno preoblikujete samu šrafuru, ili kad je skratite, a naredbena linija to kaže. Ništa se ne gubi: ponovo našrafirajte područje da ga ponovo povežete.

## Šrafura koja ostaje uz svoju granicu

Šrafura koju napravite sa `HATCH` pamti šta je ograničava. Pomjerite, okrenite ili skalirajte granicu i šrafura i njen uzorak idu s njom. Prevucite hvataljku da preoblikujete granicu i šrafura se ponovo izračunava. Pomjerite samo šrafuru i njena granica ide za njom, kao popunjen oblik u programu za crtanje.

Veza prestaje, i naredbena linija to kaže, ako granica više nije zatvorena ili preoblikujete šrafuru ručno. Sama šrafura ostaje. Ukucajte `AS` dok šrafirate da napravite šrafure koje stoje samostalno. Kopirajte šrafuru zajedno s njenom granicom i kopija ima svoju vezu.

`HATCHEDIT` (`HE`) mijenja uzorak, razmjeru, ugao i početak šrafure, i povezuje je s granicom ili prekida vezu. Veza se čuva u DWG i DXF 2000 datotekama. DXF R12 datoteka nema objekat šrafure, a veze napravljene u drugim programima se ne čitaju: za njih koristite `HATCHEDIT` i Poveži.

Šrafura koja nema granicu (granica je obrisana, ili je datoteka došla bez nje) može je dobiti nazad: `HATCHGENERATEBOUNDARY` (`HGB`) crta zatvorenu polilinju oko svake petlje šrafure i, ako odgovorite Da, povezuje šrafuru s njima.

## Gradijentna ispuna

`GRADIENT` (`GD`) ispunjava područje gradijentom umjesto uzorka: isti izbori kao `HATCH`, nakon što pita vrstu (linearni, cilindrični, sferni, hemisferni, zakrivljeni, i svaki od njih obrnut), jednu boju sa nijansom ili dvije boje, ugao i centriranje ili ne. U `HATCH` opcija `G` radi isto. `HATCHEDIT` `G`, ili {{ui:Svojstva}} pod Gradijent, mijenja gradijent ili pretvara bilo koju šrafuru u njega.

Gradijent se prikazuje na ekranu i u štampi. Spasite kao DWG 2004 ili kasnije i drugi programi dobijaju pravu gradijent šrafuru. DXF 2000 i DWG 2000 nemaju gradijent: tu ga CadCraft čuva za sebe, a drugi programi vide punu ispunu prvom bojom.

## Obrezivanje šrafure

`TRIM` seče šrafuru kao svaki drugi objekat. Kliknite šrafuru sa strane rubne linije koju želite ukloniti: rubovi dijele ispunjeno područje i taj dio se uklanja. U režimu Quick svaki objekat je rubna linija; izaberite rubove prvo (opcija `T`) kad ih ima mnogo. Obrezana šrafura više nije povezana sa svojom granicom, jer je više ne ispunjava.
