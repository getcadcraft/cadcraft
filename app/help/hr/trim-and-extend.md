---
title: Skraćivanje i produživanje
summary: Skratite linije do drugih koje ih presijecaju i produljite ih do drugih, jedan po jedan dio ili mnogo odjednom povlačenjem putanje kroz njih.
keywords: trimextendmode, povlačenje prozorom, skrati, produži, tr, ex, brzo skraćivanje, povlačenje, slobodnoručno, putanja, ograda, križanje, shift, rubovi rezanja, granični rubovi, edgemode, način, standardni, brzi, izbriši, pregled, zidovi, čišćenje
from: 25fbc5bd
---

## Što ćete naučiti

Kako rade {{cmd:TRIM}} i {{cmd:EXTEND}} i brži načini njihove uporabe: povucite kroz mnogo dijelova odjednom, držite {{key:Shift}} za prebacivanje između skraćivanja i produživanja i pogledajte što će nestati prije klika.

## Skratite jedan dio

1. Nacrtajte dugu vodoravnu liniju i dvije kratke linije koje je presijecaju.
2. Upišite `TR` i pritisnite {{key:Enter}}. Povijest kaže `Trenutne postavke: Brzi način, rubovi: Bez produženja`.
3. Zadržite pokazivač na dugoj liniji između dviju kratkih. Taj dio postaje siv i crtkan: to je ono što će nestati.
4. Kliknite. Dio nestaje.
5. Pritisnite {{key:Enter}} za završetak naredbe.

U brzom načinu (zadano) svaki vidljivi objekt je rub rezanja, pa nikada ne birate rubove prije. Kliknite dio koji želite ukloniti. Objekt koji ništa ne presijeca briše se u cijelosti, a povijest to kaže.

## Skratite mnogo dijelova jednim povlačenjem

1. Nacrtajte dugu vodoravnu liniju i deset kratkih okomitih linija koje je presijecaju.
2. Upišite `TR` i pritisnite {{key:Enter}}.
3. Pritisnite gumb miša iznad duge linije, lijevo od prve okomite linije, i povucite preko svih deset iznad duge linije.

Dok povlačite, putanja se prikazuje kao crtkana linija, a svaki dio kroz koji prođe postaje siv. Otpustite: svih deset gornjih dijelova je skraćeno u jednom koraku. Upišite `U` i pritisnite {{key:Enter}} da ih sve odjednom vratite.

:::tip
Možete i kliknuti na dvije prazne točke: linija između njih radi kao povučena putanja. Upišite `F` (Ograda) da umjesto toga kliknete niz točaka, zatim pritisnite {{key:Enter}}.
:::

:::touch
Povucite prstom na isti način. Dodir na dio ga skraćuje.
:::

## Umjesto toga produžite, uz Shift

1. Nacrtajte okomitu liniju i pet kratkih vodoravnih linija lijevo od nje koje staju prije nje.
2. Upišite `TR` i pritisnite {{key:Enter}}.
3. Držite {{key:Shift}}. Zadržite pokazivač na kratkoj liniji: dio za koji bi se produžila prikazuje se siv i crtkan.
4. I dalje držeći {{key:Shift}}, povucite prema dolje kroz pet kratkih linija.

Svih pet sada ide do okomite linije. {{key:Shift}} radi obrnuto u {{cmd:EXTEND}} (`EX`): klik produžuje, a {{key:Shift}}+klik skraćuje. Produženje produljuje kraj najbliži mjestu gdje kliknete ili gdje putanja presijeca.

## Skratite unutar prozora

1. Upišite `TR` i pritisnite {{key:Enter}}.
2. Upišite `C` i pritisnite {{key:Enter}}.
3. Kliknite dva kuta oko dijelova za uklanjanje.

Svaki dio koji barem djelomično leži unutar prozora bit će skraćen.

Da dobijete prozor samo povlačenjem, bez upisivanja `C`: {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Povlačenje za skraćivanje i produživanje}} › {{ui:Prozor}}. Tada pritisak na prazno mjesto i povlačenje crta okvir, a svaki dio koji on dodiruje bit će skraćen (ili produžen u {{cmd:EXTEND}}, ili uz {{key:Shift}}). {{ui:Putanja}} (zadano) vraća slobodnoručnu putanju. Redak postavki na početku TRIM-a kaže koja je uključena.

## Odaberite rubove rezanja (standardni način)

Ponekad samo jedna linija treba rezati, primjerice lice zida kroz koje prolazi mnogo drugih linija.

1. Upišite `TR` i pritisnite {{key:Enter}}.
2. Upišite `O` (Način) i pritisnite {{key:Enter}}, zatim upišite `S` (Standardni) i pritisnite {{key:Enter}}.
3. Na `Odaberite rubove rezanja` kliknite linije rubova (ili povucite prozor), zatim pritisnite {{key:Enter}}. Pritisak na {{key:Enter}} bez ičega odabranog čini svaki objekt rubom.
4. Kliknite ili povucite kroz dijelove za uklanjanje.

Samo odabrani rubovi režu, a objekt koji nijedan rub ne presijeca ostaje netaknut. Način ostaje dok ne zatvorite stranicu; upišite `O`, zatim `Q` za povratak na brzi način. {{cmd:TRIMEXTENDMODE}} ga postavlja prije početka, kao što to čini varijabla tog imena drugdje: `0` standardni, `1` brzi. `T` (Rubovi rezanja) bira nove rubove u bilo kojem trenutku; u {{cmd:EXTEND}} to je `B` (Granični rubovi).

## Rubovi koji bi dosegnuli

1. Upišite `TR` i pritisnite {{key:Enter}}.
2. Upišite `E` (Rub) i pritisnite {{key:Enter}}, zatim `E` (Produži) i pritisnite {{key:Enter}}.

Sada rezna linija ili luk koji staje prerano broji se kao da ide dalje: kratka linija reže tamo gdje bi se presjekla da je duža. Upišite `E`, zatim `N` (Bez produženja) za povratak. To je isto kao EDGEMODE 1 i 0.

## Brisanje bez izlaska

Upišite `R` (Brisanje) i pritisnite {{key:Enter}}, odaberite objekte za brisanje i pritisnite {{key:Enter}}. TRIM nastavlja.

## Česte greške

- **Cijela linija je nestala.** U brzom načinu objekt koji ništa ne presijeca se briše. Upišite `U` da ga vratite, ili prijeđite na standardni način (`O`, `S`).
- **„Nema što skratiti ovdje: nijedan odabrani rub ne presijeca taj objekt.“** Standardni način reže samo na rubovima koje ste odabrali. Upišite `T` da ih ponovo odaberete.
- **„Nema granice u tom smjeru.“** Produženje nije našlo ništa ispred. Kliknite bliže kraju koji treba rasti, ili uključite `E` (Rub, Produži) za granice koje staju prerano.
- **Povlačenje je nacrtalo laso.** Povlačenje skraćuje samo dok TRIM ili EXTEND traži objekt. Bez pokrenute naredbe povlačenje odabire (vidi [Odabir lasom](topic:lasso-selection)).
- **Mogu se skraćivati samo linije, lukovi, kružnice i polilinije.** Prvo rastavite blok da skratite njegove linije.
