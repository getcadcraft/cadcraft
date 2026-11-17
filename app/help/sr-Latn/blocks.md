---
title: Pravljenje i umetanje blokova
summary: Pretvorite nacrtana vrata u blok, ponovo ga postavite na druge položaje, razmere i uglove, i očistite neiskorišćene blokove.
keywords: blok, bmake, umetni, ddinsert, simbol, purge, explode, redefinisi, osnovna tačka, referenca, prebroj, bcount, specifikacija, csv, atributi, izvlačenje podataka
from: 125a129d
---

## Šta ćete napraviti

Simbol vrata napravljen u blok pod nazivom `DOOR-900`, zatim postavljen tri puta: kako je nacrtan, okrenut za 90 stepeni i ogledalski preslikan.

Blok je imenovana grupa objekata. Nacrtate ga jednom; svako mesto gde ga koristite je **referenca bloka** koja upućuje na jednu definiciju. Odeljak {{ui:Blokovi}} u levom panelu prikazuje blokove u crtežu i koliko se puta koristi svaki od njih.

## Nacrtajte vrata

1. Ukucajte `L` i pritisnite {{key:Enter}}.
2. Ukucajte `0,0` i pritisnite {{key:Enter}}.
3. Ukucajte `@0,900` i pritisnite {{key:Enter}}, pa ponovo pritisnite {{key:Enter}}. Ovo je krilo vrata.
4. Ukucajte `A` i pritisnite {{key:Enter}}.
5. Ukucajte `C` i pritisnite {{key:Enter}} da prvo zadate centar.
6. Ukucajte `0,0` i pritisnite {{key:Enter}} za centar.
7. Ukucajte `900,0` i pritisnite {{key:Enter}} za početnu tačku.
8. Ukucajte `0,900` i pritisnite {{key:Enter}} za krajnju tačku. Ovo je luk otvaranja.
9. Kliknite {{ui:Granice}}.

Lukovi idu suprotno kretanju kazaljke na satu od početne do krajnje tačke.

## Napravite blok

1. Ukucajte `B` i pritisnite {{key:Enter}}, ili kliknite {{ui:Napravi}} u grupi Blokovi.
2. Kod `Enter block name` ukucajte `DOOR-900` i pritisnite {{key:Enter}}.
3. Kod `Specify insertion base point` ukucajte `0,0` i pritisnite {{key:Enter}}. Ovo je šarka: tačka koja se poklapa sa mestom gde postavljate blok.
4. Kod `Select objects` prevucite prozor oko krila i luka.
5. Pritisnite {{key:Enter}}.

Istorija kaže `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panel {{ui:Blokovi}} prikazuje DOOR-900 sa `1×` pored njega: jedna referenca. Kliknite na vrata: sada se biraju kao jedan objekat, „Referenca bloka“.

:::tip
Možete prvo izabrati objekte, pa zatim ukucati `B`. CadCraft i dalje traži naziv i osnovnu tačku, a zatim koristi vaš izbor.
:::

## Umetnite blok

1. Ukucajte `I` i pritisnite {{key:Enter}}, ili kliknite {{ui:Umetni}} pored DOOR-900 u panelu {{ui:Blokovi}}.
2. Kod `Enter block name or [File/Library] <DOOR-900>` pritisnite {{key:Enter}}. (Dugme {{ui:Umetni}} u panelu popunjava naziv umesto vas.)
3. Vrata prate ukršteni kursor. Kliknite tamo gde treba da bude šarka.

Pojavljuju se druga vrata.

## Umetnite okrenuto ili sa promenjenom razmerom

1. Ukucajte `I` i pritisnite {{key:Enter}}, zatim pritisnite {{key:Enter}} da prihvatite naziv.
2. Kod `Specify insertion point [Scale/Rotate]` ukucajte `R` i pritisnite {{key:Enter}}.
3. Ukucajte `90` i pritisnite {{key:Enter}}. Pregled se okreće.
4. Kliknite da ga postavite.

Umesto toga ukucajte `S` da postavite faktor razmere; on važi za oba pravca. Razmera i rotacija se pamte za sledeće umetanje. Da biste ogledalski preslikali vrata, umetnite ih, pa upotrebite {{cmd:MIRROR}} na referenci.

## Promenite postavljen blok

Izaberite referencu bloka. U desnom panelu možete promeniti {{ui:X}}, {{ui:Y}}, {{ui:Razmera X}}, {{ui:Razmera Y}} i {{ui:Rotiranje}}. Negativna {{ui:Razmera X}} ga ogledalski preokreće.

## Redefinišite blok

Da biste odjednom promenili sva vrata, napravite blok istog naziva:

1. Nacrtajte novu verziju vrata.
2. Ukucajte `B` i pritisnite {{key:Enter}}, pa ukucajte `DOOR-900`.
3. Kod `Block "DOOR-900" already exists. Redefine it?` ukucajte `Y` i pritisnite {{key:Enter}}.
4. Zadajte osnovnu tačku i izaberite nove objekte, kao i ranije.

Svaka referenca na DOOR-900 sada prikazuje novu verziju.

Ili izmenite sam blok: {{ui:Blokovi}} › {{ui:Više}} › {{ui:Izmeni blok}} ({{cmd:BEDIT}}) otvara ga samostalno, a {{ui:Sačuvaj blok}} ga vraća. Vidi [Atributi bloka](topic:attributes#change-a-block-the-block-editor).

## Prebrojte blokove i izvezite specifikaciju

Ukucajte {{cmd:COUNT}} (ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Prebroj blokove}}), zatim:

- kliknite na jedna vrata: izaberu se sva vrata u ovom prostoru, a istorija kaže koliko ih ima ovde i u celom crtežu;
- ili pritisnite {{key:Enter}}: istorija navodi svaki blok sa njegovim brojem, od najvišeg;
- ili ukucajte `E`, pa `C` za CSV sa brojevima (u modelu, na listovima, ukupno) ili `A` za jedan red po referenci sa njenim slojem, položajem, rotacijom i svakom vrednošću atributa — specifikaciju koju možete otvoriti u tabelarnom programu.

Neimenovani blokovi (kote, tabele) i reference unutar drugih blokova se ne broje. Ćelije koje počinju kao formula (`=`, `+`, `-`, `@`) dobijaju vodeći `'` da ih tabelarni program prikaže kao tekst.

## Rasturite i očistite

- {{cmd:EXPLODE}} (`X`) pretvara izabranu referencu bloka nazad u zasebne objekte. Definicija ostaje.
- {{cmd:PURGE}} (`PU`) uklanja definicije blokova koje ništa više ne koristi. Istorija kaže koliko ih je uklonjeno.

## Nazivi blokova

Naziv može imati do 255 znakova i može sadržati razmake, ali ne može početi zvezdicom i ne može sadržati `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ili backtick. Kada sačuvate DXF R12, nazivi se upisuju velikim slovima, drugi znakovi osim slova, cifara, `$`, `_` i `-` postaju `_`, a nazivi se skraćuju na 31 znak; istorija kaže koliko ih je promenjeno. Kratki nazivi velikim slovima, ciframa i crticama, kao `DOOR-900`, ostaju nepromenjeni. Sačuvani DWG čuva nazive kako ste ih ukucali, velikim i malim slovima; menjaju se samo znakovi koje DWG ne dozvoljava (`|` postaje `$0$`, ostali postaju `_`).

## Zapišite blok ili objekte u sopstvenu datoteku

Ukucajte `W` ({{cmd:WBLOCK}}) i izaberite **Objekti**, **Blok** ili **Ceo crtež**. Rezultat je novi DWG ili DXF koji sadrži samo slojeve, stilove i blokove koje koristi, sa vašom osnovnom tačkom kao početkom. Za objekte možete zadržati, pretvoriti u blok ili obrisati iz ovog crteža.

## Česte greške

- **Blok je pao daleko od ukrštenog kursora.** Osnovna tačka nije bila na objektima. Ponovo napravite blok sa osnovnom tačkom na uglu ili šarki.
- **„Nijedan objekat nije izabran; ništa nije napravljeno.“** Pritisnuli ste {{key:Enter}} pre nego što ste nešto izabrali.
- **„Ovaj crtež još nema blokova: F umeće jedan iz datoteke, L iz biblioteke (ili napravite jedan komandom BLOCK).“** Ukucajte `F` da unesete blok iz drugog crteža, ili `L` za biblioteku. Vidi [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).
- **„Prozor pogleda ne može ući u blok.“** Ne uključujte okvire prozora pogleda u izbor.
