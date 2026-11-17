---
title: Šrafura i ispuna površina
summary: Ispuni površinu punom bojom ili standardnim uzorkom klikom unutar nje ili odabirom zatvorenih oblika, podesi razmjeru i ugao uzorka i kasnije promijeni šrafuru.
keywords: šrafura, bhatch, ispuna, puna ispuna, uzorak, ansi31, ansi37, cigla, zemlja, mreža, linije presjeka, presjek zida, otok, granica, razmjera, ugao
from: 14399174
---

## Šta ćete napraviti

Presjek zida ispunjen uzorkom ANSI31, kolona u njemu ostavljena prazna i puna ispuna u koloni.

## Šrafura klikom unutar površine

1. Nacrtaj pravougaonik (`REC`, `0,0`, `@2000,1200`) i krug unutar njega (`C`, `1000,600`, `300`). Klikni {{ui:Granice}}.
2. Klikni {{ui:Šrafura}} u grupi {{ui:Crtanje}} ili otkucaj `H` i pritisni {{key:Enter}}. Historija pokazuje koji je uzorak trenutni, na primjer `Trenutna šrafura: ANSI31, razmjera 1, ugao 0°`.
3. Otkucaj `P` i pritisni {{key:Enter}}, otkucaj `ANSI31` i pritisni {{key:Enter}}.
4. Otkucaj `SC` i pritisni {{key:Enter}}, otkucaj `20` i pritisni {{key:Enter}}. Veličine uzorka su na papiru, pa crtež ispisan u razmjeri 1:20 treba razmjeru 20.
5. Kod `Zadaj unutrašnju tačku` klikni unutar pravougaonika, van kruga. Šrafura se prikazuje kao pregled.
6. Pritisni {{key:Enter}}. Pravougaonik je našrafiran; krug unutar njega ostaje prazan, jer je otok.

Klikni unutar više površina prije pritiska na {{key:Enter}} da ih napraviš jednom šrafurom. `U` poništava posljednju površinu.

## Puna ispuna

1. Otkucaj `H` i pritisni {{key:Enter}}.
2. Otkucaj `P`, pritisni {{key:Enter}}, otkucaj `SOLID` i pritisni {{key:Enter}}.
3. Klikni unutar kruga, pa pritisni {{key:Enter}}.

## Šrafura odabranih zatvorenih oblika

Umjesto klikanja unutar, otkucaj `S` (Odaberi objekte) kod `Zadaj unutrašnju tačku` i odaberi zatvorene polilinije, krugove ili zatvorene elipse, pa pritisni {{key:Enter}}. Oblici unutar drugih ostaju redom prazni (vanjski se šrafira, sljedeći unutra ostaje prazan, i tako dalje).

## Uzorci

Otkucaj `?` na pitanje o uzorku za spisak. Standardni su ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS i EARTH, te SOLID. U crtežu u inčima (ili sa stopama i inčima kao formatom dužine) koriste se veličine uzoraka u inčima, kao u AutoCAD-u; inače milimetarske.

{{ui:Ugao}} (`A`) okreće cijeli uzorak: ANSI31 pod 90° se kosi na drugu stranu.

**Datoteke uzoraka.** Otkucaj `F` (Datoteka uzorka) kod `Zadaj unutrašnju tačku` i odaberi `.pat` datoteku. Uzorci iz nje se pridružuju spisku; ako ih ima više, pitaće te koji da koristiš. Datoteka bez uzorka koje CadCraft može pročitati to javlja, a svaki preskočeni uzorak se broji. Veličine u `.pat` datoteci nemaju vlastitu jedinicu, pa se čitaju u jedinicama crteža. Isprobane su samo datoteke napisane u uobičajenom `.pat` formatu; nijedna napravljena drugim programom.

## Promjena šrafure

Odaberi je (klikni jednu od njenih linija). U {{ui:Svojstva}}: {{ui:Uzorak}}, {{ui:Razmjera uzorka}} i {{ui:Ugao uzorka}}. Šrafure iz otvorenih crteža prikazuju svoj uzorak kada je jedan od standardnih; ostale se prikazuju kao svijetli ton njihove boje.

## Česte greške

- **"Nema zatvorene granice oko te tačke."** Postoji prekid u konturi ili je dio van ekrana: CadCraft gleda samo ono što je na ekranu. Zatvori prazninu (zumiraj na uglove) ili odzumiraj.
- **"Uzorak je previše gust za crtanje u ovoj razmjeri."** Linije bi bile bliže nego što crtež može prikazati. Koristi veću razmjeru: pokušaj razmjeru ispisa (20 za 1:20).
- **Uzorak izgleda ogromno ili sitno.** Razmjera je u jedinicama crteža po jedinici uzorka; vidi korak 4 iznad.
- **Pomjeranje konture ne pomjera šrafuru.** Šrafura nije vezana za svoju granicu. Pomjeri oba ili našrafiraj ponovo.

## Šrafura koja ostaje povezana sa granicom

Šrafura koju napraviš sa `HATCH` pamti šta je ograničava. Pomjeri, okreni ili skaliraj granicu, pa se šrafura i njen uzorak pomjeraju s njom. Povuci hvatište da preoblikuješ granicu i šrafura se ponovo izračunava. Pomjeri samo šrafuru i njena granica ide s njom, kao ispunjen oblik u programu za crtanje.

Veza prestaje, i komandna linija to kaže, ako granica više ne zatvara oblik ili preoblikuješ šrafuru ručno. Sama šrafura ostaje. Otkucaj `AS` dok šrafuriš da napraviš šrafure koje stoje samostalno. Kopiraj šrafuru sa granicom i kopija ima svoju vezu.

`HATCHEDIT` (`HE`) mijenja uzorak, razmjeru, ugao i početnu tačku šrafure, te je povezuje sa granicom ili prekida vezu. Veza se čuva u DWG i DXF 2000 datotekama. DXF R12 datoteka nema objekt šrafure, a veze napravljene u drugim programima se ne čitaju: za njih koristi `HATCHEDIT` i Poveži.

Šrafura koja više nema granicu (granica je obrisana ili je datoteka stigla bez nje) može je vratiti: `HATCHGENERATEBOUNDARY` (`HGB`) crta zatvorenu poliliniju oko svake petlje šrafure i, ako odgovoriš Da, povezuje šrafuru s njima.

## Ispuna gradijentom

`GRADIENT` (`GD`) ispunjava površinu gradijentom umjesto uzorkom: iste odabire kao `HATCH`, nakon čega pita vrstu (linearni, cilindrični, sferni, polusferni, zakrivljeni, i svaki od tih obrnut), jednu boju sa nijansom ili dvije boje, ugao i da li je centriran. U `HATCH`-u opcija `G` radi isto. `HATCHEDIT` `G`, ili {{ui:Svojstva}} pod Gradijent, mijenja gradijent ili pretvara bilo koju šrafuru u gradijent.

Gradijent se prikazuje na ekranu i u ispisima. Sačuvaj kao DWG 2004 ili noviji i drugi programi dobiju pravu šrafuru gradijenta. DXF 2000 i DWG 2000 nemaju gradijent: tu ga CadCraft čuva samo za sebe, a drugi programi vide punu ispunu prvom bojom.

## Podrezivanje šrafure

`TRIM` reže šrafuru kao i svaki drugi objekat. Klikni šrafuru na strani rezne ivice koju želiš ukloniti: ivice dijele našrafiranu površinu i taj dio se uklanja. U brzom režimu svaki objekat je rezna ivica; odaberi ivice prvo (opcija `T`) kada ih ima mnogo. Podrezana šrafura više nije povezana sa granicom, jer više ne ispunjava nju.
