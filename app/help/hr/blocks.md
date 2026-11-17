---
title: Izrada i umetanje blokova
summary: Pretvorite nacrtana vrata u blok, ponovno ih postavite na druga mjesta, u drugim mjerilima i kutovima te očistite nekorištene blokove.
keywords: blok, bmake, umetni, ddinsert, simbol, purge, rastavi, redefiniraj, bazna točka, referenca, broji, bcount, specifikacija, csv, atributi, izvlačenje podataka
from: 125a129d
---

## Što ćete izraditi

Simbol vrata pretvoren u blok nazvan `DOOR-900`, zatim postavljen tri puta: kako je nacrtan, zakrenut za 90 stupnjeva i zrcaljen.

Blok je imenovana skupina objekata. Nacrtate ga jednom; svako mjesto na kojem ga koristite je **referenca bloka** koja upućuje na jednu definiciju. Odjeljak {{ui:Blokovi}} u lijevoj ploči popisuje blokove u crtežu i koliko se često svaki koristi.

## Nacrtajte vrata

1. Upišite `L` i pritisnite {{key:Enter}}.
2. Upišite `0,0` i pritisnite {{key:Enter}}.
3. Upišite `@0,900` i pritisnite {{key:Enter}}, zatim ponovno pritisnite {{key:Enter}}. Ovo je krilo vrata.
4. Upišite `A` i pritisnite {{key:Enter}}.
5. Upišite `C` i pritisnite {{key:Enter}} da prvo zadate središte.
6. Upišite `0,0` i pritisnite {{key:Enter}} za središte.
7. Upišite `900,0` i pritisnite {{key:Enter}} za početnu točku.
8. Upišite `0,900` i pritisnite {{key:Enter}} za krajnju točku. Ovo je luk otvaranja.
9. Kliknite {{ui:Opseg}}.

Lukovi idu suprotno od smjera kazaljke na satu od početne do krajnje točke.

## Izradite blok

1. Upišite `B` i pritisnite {{key:Enter}}, ili kliknite {{ui:Izradi}} u grupi Blokovi.
2. Kod `Enter block name` upišite `DOOR-900` i pritisnite {{key:Enter}}.
3. Kod `Specify insertion base point` upišite `0,0` i pritisnite {{key:Enter}}. Ovo je šarnir: točka koja pada na mjesto na koje postavite blok.
4. Kod `Select objects` povucite prozor oko krila i luka.
5. Pritisnite {{key:Enter}}.

Povijest kaže `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panel {{ui:Blokovi}} navodi DOOR-900 uz `1×`: jedna referenca. Kliknite vrata: sada se odabiru kao jedan objekt, "Referenca bloka".

:::tip
Objekte možete prvo odabrati, a zatim upisati `B`. CadCraft će i dalje tražiti naziv i baznu točku, a zatim će upotrijebiti vaš odabir.
:::

## Umetnite blok

1. Upišite `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} pored DOOR-900 u panelu {{ui:Blokovi}}.
2. Kod `Enter block name or [File/Library] <DOOR-900>` pritisnite {{key:Enter}}. (Gumb {{ui:Umetni}} na panelu sam unosi naziv umjesto vas.)
3. Vrata slijede nišan. Kliknite mjesto na kojem treba biti šarnir.

Pojavljuju se druga vrata.

## Umetnite zakrenuto ili skalirano

1. Upišite `I` i pritisnite {{key:Enter}}, zatim pritisnite {{key:Enter}} za potvrdu naziva.
2. Kod `Specify insertion point [Scale/Rotate]` upišite `R` i pritisnite {{key:Enter}}.
3. Upišite `90` i pritisnite {{key:Enter}}. Pregled se zakreće.
4. Kliknite za postavljanje.

Umjesto toga upišite `S` za zadavanje faktora mjerila; vrijedi za oba smjera. Mjerilo i rotacija pamte se za sljedeće umetanje. Za zrcaljenje vrata umetnite ih, zatim upotrijebite {{cmd:MIRROR}} na referenci.

## Promijenite postavljeni blok

Odaberite referencu bloka. U desnoj ploči možete promijeniti {{ui:X}}, {{ui:Y}}, {{ui:Mjerilo X}}, {{ui:Mjerilo Y}} i {{ui:Rotacija}}. Negativan {{ui:Mjerilo X}} ga zrcali.

## Redefinirajte blok

Da promijenite sva vrata odjednom, izradite blok s istim nazivom:

1. Nacrtajte novu verziju vrata.
2. Upišite `B` i pritisnite {{key:Enter}}, zatim upišite `DOOR-900`.
3. Kod `Block "DOOR-900" already exists. Redefine it?` upišite `Y` i pritisnite {{key:Enter}}.
4. Zadajte baznu točku i odaberite nove objekte, kao i prije.

Svaka referenca na DOOR-900 sada prikazuje novu verziju.

Ili uredite sam blok: {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi blok}} ({{cmd:BEDIT}}) otvara ga samostalno, a {{ui:Spremi blok}} ga vraća. Pogledajte [Atributi bloka](topic:attributes#change-a-block-the-block-editor).

## Prebrojite blokove i izvezite specifikaciju

Upišite {{cmd:COUNT}} (ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Broji blokove}}), zatim:

- kliknite jedna vrata: odabiru se sva vrata u ovom prostoru, a povijest kaže koliko ih ima ovdje i u cijelom crtežu;
- ili pritisnite {{key:Enter}}: povijest navodi svaki blok s brojem, najčešći prvi;
- ili upišite `E`, zatim `C` za CSV s brojevima (u modelu, na listovima, ukupno) ili `A` za jedan redak po referenci s njezinim slojem, položajem, rotacijom i svakom vrijednošću atributa — specifikaciju koju možete otvoriti u proračunskoj tablici.

Neimenovani blokovi (kote, tablice) i reference unutar drugih blokova se ne broje. Ćelije koje počinju kao formula (`=`, `+`, `-`, `@`) dobivaju vodeći `'` tako da ih proračunska tablica prikazuje kao tekst.

## Rastavite i očistite

- {{cmd:EXPLODE}} (`X`) pretvara odabranu referencu bloka natrag u zasebne objekte. Definicija ostaje.
- {{cmd:PURGE}} (`PU`) uklanja definicije blokova koje ništa više ne koristi. Povijest kaže koliko ih je uklonio.

## Nazivi blokova

Naziv može imati do 255 znakova i može sadržavati razmake, ali ne smije početi zvjezdicom i ne smije sadržavati `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ili backtick. Kada spremite DXF R12, nazivi se zapisuju velikim slovima, znakovi koji nisu slova, brojke, `$`, `_` i `-` postaju `_`, a nazivi se skraćuju na 31 znak; povijest kaže koliko ih se promijenilo. Kratki nazivi velikim slovima, brojkama i crticama, poput `DOOR-900`, ostaju nepromijenjeni. Spremljeni DWG čuva nazive kako ste ih upisali, velikim i malim slovima; mijenjaju se samo znakovi koje DWG ne dopušta (`|` postaje `$0$`, ostali postaju `_`).

## Zapišite blok ili objekte u zasebnu datoteku

Upišite `W` ({{cmd:WBLOCK}}) i odaberite **Objekti**, **Blok** ili **Cijeli crtež**. Rezultat je novi DWG ili DXF koji sadrži samo slojeve, stilove i blokove koje koristi, s vašom baznom točkom kao ishodištem. Za objekte ih možete zadržati, pretvoriti u blok ili izbrisati iz ovog crteža.

## Česte pogreške

- **Blok je pao daleko od nišana.** Bazna točka nije bila na objektima. Ponovno izradite blok s baznom točkom na kutu ili šarniru.
- **"Nije odabran nijedan objekt; ništa nije izrađeno."** Pritisnuli ste {{key:Enter}} prije nego što ste išta odabrali.
- **"Ovaj crtež još nema blokova: F umeće blok iz datoteke, L iz knjižnice (ili ga izradite naredbom BLOCK)."** Upišite `F` da unesete blok iz drugog crteža, ili `L` za knjižnicu. Pogledajte [Umetanje iz datoteke ili knjižnice](topic:insert-from-file-and-library).
- **"Viewport se ne može staviti u blok."** Isključite okvire viewporta iz odabira.
