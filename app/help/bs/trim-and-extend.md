---
title: Skraćivanje i produživanje
summary: Skrati linije unazad do mjesta gdje ih druge sijeku i produži ih do drugih, jedan dio po dio ili više odjednom povlačenjem putanje kroz njih.
keywords: trimextendmode, prozor povlačenjem, skrati, produži, tr, ex, brzo skraćivanje, povlačenje, slobodno, putanja, ograda, presijecanje, shift, rezne ivice, granične ivice, edgemode, režim, standardni, brzi, briši, pregled, zidovi, čišćenje
from: 25fbc5bd
---

## Šta ćeš naučiti

Kako rade {{cmd:TRIM}} i {{cmd:EXTEND}}, i brzi načini upotrebe: povuci kroz mnogo dijelova odjednom, drži {{key:Shift}} da prelaziš između skraćivanja i produživanja, i vidi šta će nestati prije nego klikneš.

## Skrati jedan dio

1. Nacrtaj dugu vodoravnu liniju i dvije kratke linije preko nje.
2. Upiši `TR` i pritisni {{key:Enter}}. Historija kaže `Current settings: Quick mode, edges: No extend`.
3. Postavi pokazivač na dugu liniju između dvije kratke. Taj dio postaje siv i isprekidan: to je ono što će nestati.
4. Klikni. Dio nestaje.
5. Pritisni {{key:Enter}} da završiš naredbu.

U brzom režimu (zadano) svaki vidljivi objekat je rezna ivica, pa nikad ne moraš prvo birati ivice. Klikni dio koji želiš ukloniti. Objekat koji ništa ne siječe se briše cijeli, a historija to kaže.

## Skrati više dijelova jednim povlačenjem

1. Nacrtaj dugu vodoravnu liniju i deset kratkih vertikalnih linija preko nje.
2. Upiši `TR` i pritisni {{key:Enter}}.
3. Pritisni dugme miša iznad duge linije, lijevo od prve vertikalne linije, i povuci preko svih deset iznad duge linije.

Dok povlačiš, putanja se prikazuje kao isprekidana linija, a svaki dio koji je presječen postaje siv. Otpusti: svih deset gornjih dijelova je skraćeno u jednom koraku. Upiši `U` i pritisni {{key:Enter}} da ih sve odjednom vratiš.

:::tip
Možeš i kliknuti na dvije prazne tačke: linija između njih radi kao povučena putanja. Upiši `F` ([Ograda (F)]) da umjesto toga klikneš niz tačaka, pa pritisni {{key:Enter}}.
:::

:::touch
Povuci prstom na isti način. Dodir na dio ga skraćuje.
:::

## Produži umjesto toga, uz Shift

1. Nacrtaj vertikalnu liniju i pet kratkih vodoravnih linija lijevo od nje koje staju prije nje.
2. Upiši `TR` i pritisni {{key:Enter}}.
3. Drži {{key:Shift}}. Postavi pokazivač na kratku liniju: dio za koji bi ona narasla prikazuje se siv i isprekidan.
4. I dalje držeći {{key:Shift}}, povuci dole kroz pet kratkih linija.

Svih pet sada ide do vertikalne linije. {{key:Shift}} radi obrnuto u {{cmd:EXTEND}} (`EX`): klik produži, a {{key:Shift}}+klik skrati. Produženje ide na kraj koji je najbliži mjestu gdje klikneš ili gdje putanja presijeca.

## Skrati unutar prozora

1. Upiši `TR` i pritisni {{key:Enter}}.
2. Upiši `C` ([Prozor (C)]) i pritisni {{key:Enter}}.
3. Klikni dva ugla oko dijelova za uklanjanje.

Svaki dio koji leži barem djelimično unutar prozora je skraćen.

Da dobiješ prozor samo povlačenjem, bez upisivanja `C`: {{ui:Postavke}} › {{ui:CadCraft}} › {{ui:Povlačenje za skraćivanje i produživanje}} › {{ui:Prozor}}. Tada pritisak na prazno mjesto i povlačenje crta okvir, a svaki dio koji on dodirne se skraćuje (ili produžuje, u {{cmd:EXTEND}}, ili uz {{key:Shift}}). {{ui:Putanja}} (početno stanje) vraća slobodnu putanju. Linija postavki na početku TRIM kaže koja je uključena.

## Odaberi rezne ivice (Standardni režim)

Ponekad samo jedna linija treba da siječe, kao lice zida sa mnogo drugih linija koje ga presijecaju.

1. Upiši `TR` i pritisni {{key:Enter}}.
2. Upiši `O` ([režim (O)]) i pritisni {{key:Enter}}, zatim upiši `S` (Standardni) i pritisni {{key:Enter}}.
3. Na `Select cutting edges` klikni rezne linije (ili povuci prozor), pa pritisni {{key:Enter}}. Pritisak na {{key:Enter}} bez ičega odabranog pravi da je svaki objekat ivica.
4. Klikni ili povuci kroz dijelove za uklanjanje.

Samo odabrane ivice sijeku, a objekat koji nijedna ivica ne siječe ostaje netaknut. Režim ostaje dok ne zatvoriš stranicu; upiši `O`, pa `Q` ([Brzi (Q)]) da se vratiš u brzi režim. {{cmd:TRIMEXTENDMODE}} ga postavlja prije početka, kao što to radi varijabla istog imena drugdje: `0` standardni, `1` brzi. `T` ([rezne ivice (T)]) bira nove ivice u bilo kom trenutku; u {{cmd:EXTEND}} to je `B` ([granične ivice (B)]).

## Ivice koje bi dosegle

1. Upiši `TR` i pritisni {{key:Enter}}.
2. Upiši `E` ([Ivica (E)]) i pritisni {{key:Enter}}, zatim `E` ([Produži (E)]) i pritisni {{key:Enter}}.

Sad rezna linija ili luk koji staje kratko računa se kao da ide dalje: kratka linija siječe tamo gdje bi se presjekla da je duža. Upiši `E`, zatim `N` ([Bez produženja (N)]) da se vratiš. Ovo je isto što i EDGEMODE 1 i 0.

## Briši bez napuštanja

Upiši `R` ([brisanje (R)]) i pritisni {{key:Enter}}, odaberi objekte za brisanje, i pritisni {{key:Enter}}. TRIM nastavlja.

## Česte greške

- **Cijela linija je nestala.** U brzom režimu objekat koji ništa ne siječe se briše. Upiši `U` da ga vratiš, ili pređi na standardni režim (`O`, `S`).
- **„Ništa za skraćivanje tu: nijedna odabrana ivica ne siječe taj objekat.“** Standardni režim siječe samo na ivicama koje si odabrao. Upiši `T` da ih ponovo odabereš.
- **„Nema granice u tom smjeru.“** Produženje nije našlo ništa ispred. Klikni bliže kraju koji treba da naraste, ili uključi `E` ([Ivica (E)], [Produži (E)]) za granice koje staju kratko.
- **Povlačenje je nacrtalo lasso.** Povlačenje skraćuje samo dok TRIM ili EXTEND traži objekat. Bez pokrenute naredbe povlačenje odabira (vidi [Odabir lasom](topic:lasso-selection)).
- **Samo linije, lukovi, krugovi i polilinije mogu se skraćivati.** Prvo razloži blok da skratiš njegove linije.
