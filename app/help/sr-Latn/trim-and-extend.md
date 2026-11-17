---
title: Skraćivanje i produženje
summary: Skrati linije do mesta gde ih seku druge i produži ih do drugih, jedan po jedan deo ili mnogo odjednom prevlačenjem putanje kroz njih.
keywords: trimextendmode, prozor prevlačenja, skrati, produži, tr, ex, brzo skraćivanje, prevlačenje, slobodna ruka, putanja, ograda, ukrštanje, shift, rezne ivice, granične ivice, edgemode, režim, standardni, brzi, brisanje, pregled, zidovi, čišćenje
from: 25fbc5bd
---

## Šta ćeš naučiti

Kako rade {{cmd:TRIM}} i {{cmd:EXTEND}}, i brzi načini da ih koristiš: prevuci kroz mnogo delova odjednom, drži {{key:Shift}} da prebaciš između skraćivanja i produžavanja, i vidi šta će nestati pre nego što klikneš.

## Skrati jedan deo

1. Nacrtaj dugačku vodoravnu liniju i dve kratke linije koje je seku.
2. Ukucaj `TR` i pritisni {{key:Enter}}. Istorija kaže `Trenutna podešavanja: Brzi režim, ivice: bez produženja`.
3. Zadrži pokazivač na dugačkoj liniji između dve kratke. Taj deo postaje siv i isprekidan: to je ono što će nestati.
4. Klikni. Deo nestaje.
5. Pritisni {{key:Enter}} da završiš komandu.

U brzom režimu (podrazumevanom) svaki vidljivi objekat je rezna ivica, pa nikad ne biraš ivice unapred. Klikni deo koji želiš da nestane. Objekat koji ništa ne seče briše se ceo, i istorija to kaže.

## Skrati mnogo delova jednim prevlačenjem

1. Nacrtaj dugačku vodoravnu liniju i deset kratkih uspravnih linija koje je seku.
2. Ukucaj `TR` i pritisni {{key:Enter}}.
3. Pritisni dugme miša iznad dugačke linije, levo od prve uspravne linije, i prevuci preko svih deset iznad dugačke linije.

Dok prevlačiš, putanja se vidi kao isprekidana linija, a svaki deo koji je prešla postaje siv. Pusti: svih deset gornjih delova je skraćeno u jednom koraku. Ukucaj `U` i pritisni {{key:Enter}} da ih sve vratiš odjednom.

:::tip
Možeš i da klikneš na dve prazne tačke: linija između njih radi kao prevučena putanja. Ukucaj `F` (ograda) da umesto toga klikneš niz tačaka, pa pritisni {{key:Enter}}.
:::

:::touch
Prevuci prstom na isti način. Dodir na deo ga skraćuje.
:::

## Produži umesto toga, sa Shift

1. Nacrtaj uspravnu liniju i pet kratkih vodoravnih linija levo od nje koje se zaustavljaju pre nje.
2. Ukucaj `TR` i pritisni {{key:Enter}}.
3. Drži {{key:Shift}}. Zadrži pokazivač na kratkoj liniji: deo za koji bi se produžila prikazuje se siv i isprekidan.
4. I dalje držeći {{key:Shift}}, prevuci nadole kroz pet kratkih linija.

Sve pet sada idu do uspravne linije. {{key:Shift}} radi obrnuto u {{cmd:EXTEND}} (`EX`): klik produžava, a {{key:Shift}}+klik skraćuje. Produženje produžava kraj najbliži mestu gde klikneš ili gde putanja seče.

## Skrati unutar prozora

1. Ukucaj `TR` i pritisni {{key:Enter}}.
2. Ukucaj `C` i pritisni {{key:Enter}}.
3. Klikni dva ugla oko delova koje treba ukloniti.

Svaki deo koji leži bar delimično unutar prozora se skraćuje.

Da dobiješ prozor samo prevlačenjem, bez kucanja `C`: {{ui:Podešavanja}} › {{ui:CadCraft}} › {{ui:Prevlačenje za skraćivanje i produženje}} › {{ui:Prozor}}. Tada pritiskanje na prazno mesto i prevlačenje crta kutiju, a svaki deo koji ona dodiruje se skraćuje (ili produžava, u {{cmd:EXTEND}}, ili sa {{key:Shift}}). {{ui:Putanja}} (početna vrednost) vraća prevučenu putanju slobodne ruke. Linija podešavanja na početku TRIM kaže koji je režim uključen.

## Izaberi rezne ivice (standardni režim)

Ponekad treba da seče samo jedna linija, na primer lice zida sa mnogo drugih linija koje ga seku.

1. Ukucaj `TR` i pritisni {{key:Enter}}.
2. Ukucaj `O` (mOde, režim) i pritisni {{key:Enter}}, pa ukucaj `S` (Standard, standardni) i pritisni {{key:Enter}}.
3. Na `Izaberi rezne ivice` klikni linije ivica (ili prevuci prozor), pa pritisni {{key:Enter}}. Pritisak na {{key:Enter}} bez izbora čini svaki objekat ivicom.
4. Klikni ili prevuci kroz delove koje treba ukloniti.

Seku samo izabrane ivice, a objekat koji nijedna ivica ne seče ostaje netaknut. Režim ostaje do zatvaranja stranice; ukucaj `O`, pa `Q` da se vratiš na brzi režim. {{cmd:TRIMEXTENDMODE}} ga postavlja pre nego što počneš, kao što to radi promenljiva istog imena drugde: `0` Standard, `1` Quick. `T` (rezne ivice) bira nove ivice u bilo kom trenutku; u {{cmd:EXTEND}} to je `B` (granične ivice).

## Ivice koje bi dosegle

1. Ukucaj `TR` i pritisni {{key:Enter}}.
2. Ukucaj `E` (ivica) i pritisni {{key:Enter}}, pa `E` (produženje) i pritisni {{key:Enter}}.

Sada se rezna linija ili luk koji staje kratko računa kao da ide dalje: kratka linija seče tamo gde bi se ukrstila da je duža. Ukucaj `E`, pa `N` (bez produženja) da se vratiš. Ovo je isto što i EDGEMODE 1 i 0.

## Obriši bez napuštanja

Ukucaj `R` (brisanje, eRase) i pritisni {{key:Enter}}, izaberi objekte za brisanje i pritisni {{key:Enter}}. TRIM nastavlja.

## Česte greške

- **Cela linija je nestala.** U brzom režimu objekat koji ništa ne seče se briše. Ukucaj `U` da ga vratiš, ili pređi na standardni režim (`O`, `S`).
- **"Nema šta da se skrati ovde: nijedna izabrana ivica ne seče taj objekat."** Standardni režim seče samo na ivicama koje si izabrao. Ukucaj `T` da ih ponovo izabereš.
- **"Nema granice u tom smeru."** Produženje nije našlo ništa ispred. Klikni bliže kraju koji treba da raste, ili uključi `E` (ivica, produženje) za granice koje staju kratko.
- **Prevlačenje je nacrtalo lasso umesto toga.** Prevlačenje skraćuje samo dok TRIM ili EXTEND traži objekat. Bez pokrenute komande prevlačenje bira (vidi [Izbor lasoom](topic:lasso-selection)).
- **Samo linije, lukovi, krugovi i polilinije mogu da se skraćuju.** Prvo rastavi blok da skratiš njegove linije.
