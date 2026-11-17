---
title: Pravi i umetni blokove
summary: Pretvori nacrtana vrata u blok, postavi ih ponovo na druge pozicije, razmjere i uglove, i očisti nekorištene blokove.
keywords: blok, bmake, umetni, ddinsert, simbol, očisti, rastavi, preodredi, bazna tačka, referenca, prebroj, bcount, specifikacija, csv, atributi, izdvajanje podataka
from: 125a129d
---

## Šta ćete napraviti

Simbol vrata pretvoren u blok pod imenom `DOOR-900`, zatim postavljen tri puta: kako je nacrtan, okrenut za 90 stepeni i preslikan kao u ogledalu.

Blok je imenovana grupa objekata. Nacrtate ga jednom; svako mjesto gdje ga koristite je **referenca bloka** koja pokazuje na istu definiciju. Odjeljak {{ui:Blokovi}} u lijevom panelu navodi blokove u crtežu i koliko se često svaki koristi.

## Nacrtajte vrata

1. Upiši `L` i pritisni {{key:Enter}}.
2. Upiši `0,0` i pritisni {{key:Enter}}.
3. Upiši `@0,900` i pritisni {{key:Enter}}, zatim pritisni {{key:Enter}} još jednom. Ovo je krilo vrata.
4. Upiši `A` i pritisni {{key:Enter}}.
5. Upiši `C` i pritisni {{key:Enter}} da prvo zadaš centar.
6. Upiši `0,0` i pritisni {{key:Enter}} za centar.
7. Upiši `900,0` i pritisni {{key:Enter}} za početnu tačku.
8. Upiši `0,900` i pritisni {{key:Enter}} za krajnju tačku. Ovo je luk otvaranja.
9. Klikni {{ui:Granice}}.

Lukovi idu suprotno od kazaljke na satu od početne do krajnje tačke.

## Napravite blok

1. Upiši `B` i pritisni {{key:Enter}}, ili klikni {{ui:Napravi}} u grupi Blokovi.
2. Na `Enter block name` upiši `DOOR-900` i pritisni {{key:Enter}}.
3. Na `Specify insertion base point` upiši `0,0` i pritisni {{key:Enter}}. Ovo je šarnir: tačka koja se poklapa s mjestom gdje postavljate blok.
4. Na `Select objects` prevuci prozor oko krila i luka.
5. Pritisni {{key:Enter}}.

Historija kaže `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panel {{ui:Blokovi}} navodi DOOR-900 s `1×` pored: jedna referenca. Kliknite vrata: sada se označavaju kao jedan objekat, "Referenca bloka".

:::tip
Možete prvo označiti objekte, pa zatim upisati `B`. CadCraft i dalje traži ime i baznu tačku, a zatim koristi označeno.
:::

## Umetnite blok

1. Upiši `I` i pritisni {{key:Enter}}, ili klikni {{ui:Umetni}} pored DOOR-900 u panelu {{ui:Blokovi}}.
2. Na `Enter block name or [File/Library] <DOOR-900>` pritisni {{key:Enter}}. (Dugme {{ui:Umetni}} na panelu unosi ime umjesto vas.)
3. Vrata prate nišan. Kliknite gdje treba da bude šarnir.

Pojavljuju se druga vrata.

## Umetnite okrenut ili razmjeren

1. Upiši `I` i pritisni {{key:Enter}}, zatim pritisni {{key:Enter}} da prihvatiš ime.
2. Na `Specify insertion point [Scale/Rotate]` upiši `R` i pritisni {{key:Enter}}.
3. Upiši `90` i pritisni {{key:Enter}}. Pregled se okreće.
4. Kliknite da ga postavite.

Umjesto toga upiši `S` da postaviš faktor razmjere; važi za oba smjera. Razmjera i rotacija se pamte za sljedeće umetanje. Da preslikate vrata kao u ogledalu, umetnite ih, pa upotrijebite {{cmd:MIRROR}} na referenci.

## Promijenite postavljeni blok

Označite referencu bloka. U desnom panelu možete promijeniti {{ui:X}}, {{ui:Y}}, {{ui:Razmjera X}}, {{ui:Razmjera Y}} i {{ui:Rotacija}}. Negativna {{ui:Razmjera X}} ga preokreće.

## Preodredite blok

Da promijenite sva vrata odjednom, napravite blok istog imena:

1. Nacrtajte novu verziju vrata.
2. Upiši `B` i pritisni {{key:Enter}}, pa upiši `DOOR-900`.
3. Na `Block "DOOR-900" already exists. Redefine it?` upiši `Y` i pritisni {{key:Enter}}.
4. Zadajte baznu tačku i označite nove objekte, kao i ranije.

Svaka referenca na DOOR-900 sada prikazuje novu verziju.

Ili uredite sam blok: {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi blok}} ({{cmd:BEDIT}}) otvara ga samostalno, a {{ui:Snimi blok}} ga vraća. Pogledajte [Atributi bloka](topic:attributes#change-a-block-the-block-editor).

## Prebrojte blokove i izvezite specifikaciju

Upiši {{cmd:COUNT}} (ili {{ui:Blokovi}} › {{ui:Više}} › {{ui:Prebroj blokove}}), zatim:

- klikni jedna vrata: označena su sva vrata u ovom prostoru, a historija kaže koliko ih je ovdje i u cijelom crtežu;
- ili pritisni {{key:Enter}}: historija navodi svaki blok s brojem, od najvećeg;
- ili upiši `E`, pa `C` za CSV s brojevima (u modelu, na listovima, ukupno) ili `A` za jedan red po referenci s njenim slojem, pozicijom, rotacijom i svakom vrijednošću atributa: specifikaciju koju možete otvoriti u tabelarnom programu.

Nenazvani blokovi (kote, tabele) i reference unutar drugih blokova se ne broje. Ćelije koje počinju kao formula (`=`, `+`, `-`, `@`) dobiju vodeći `'` da ih tabelarni program prikaže kao tekst.

## Rastavite i očistite

- {{cmd:EXPLODE}} (`X`) pretvara označenu referencu bloka natrag u zasebne objekte. Definicija ostaje.
- {{cmd:PURGE}} (`PU`) uklanja definicije blokova koje ništa više ne koristi. Historija kaže koliko ih je uklonjeno.

## Imena blokova

Ime može imati do 255 znakova i može sadržavati razmake, ali ne može početi zvjezdicom i ne smije sadržavati `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ili backtick. Kada snimite DXF R12, imena se pišu velikim slovima, drugi znakovi osim slova, cifara, `$`, `_` i `-` postaju `_`, a imena se skraćuju na 31 znak; historija kaže koliko ih je promijenjeno. Kratka imena velikim slovima, ciframa i crticama, kao `DOOR-900`, ostaju nepromijenjena. Snimljeni DWG čuva imena kako ste ih upisali, velikim i malim slovima; mijenjaju se samo znakovi koje DWG ne dozvoljava (`|` postaje `$0$`, ostali postaju `_`).

## Zapišite blok ili objekte u zasebnu datoteku

Upiši `W` ({{cmd:WBLOCK}}) i izaberi **Objekti**, **Blok** ili **Cijeli crtež**. Rezultat je novi DWG ili DXF koji sadrži samo slojeve, stilove i blokove koje koristi, s vašom baznom tačkom kao početkom. Za objekte možete birati: zadržati ih, pretvoriti u blok ili obrisati iz ovog crteža.

## Česte greške

- **Blok je pao daleko od nišana.** Bazna tačka nije bila na objektima. Napravite blok ponovo, s baznom tačkom na uglu ili šarniru.
- **"No objects selected; nothing made."** Nema označenih objekata; ništa nije napravljeno. Pritisnuli ste {{key:Enter}} prije nego što ste išta označili.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Ovaj crtež još nema blokove: F umeće jedan iz datoteke, L iz biblioteke (ili napravite jedan s BLOCK). Upiši `F` da uvezete blok iz drugog crteža, ili `L` za biblioteku. Pogledajte [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Prozor pregleda ne može biti u bloku. Ostavite okvire prozora pregleda izvan izbora.
