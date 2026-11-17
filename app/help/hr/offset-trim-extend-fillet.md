---
title: Odmakni, skrati, produži, zaobli i skosi zidove
summary: Pretvorite pojedinačne linije u dvostruke zidove pomoću Odmakni, očistite kutove pomoću Zaobli, te skratite i produljite linije pomoću Skrati i Produži.
keywords: odmakni, skrati, produži, zaobli, skosi, kosina, prekini, breakatpoint, produlji, zidovi, kut, izreži, paralelno, radijus, čišćenje
from: c6c5cbd0
---

## Što ćete izraditi

Malu sobu sa zidovima debljine 200: unutarnja strana se crta, vanjska se odmakne, kutovi se očiste i kroz jedan zid se izreže vrata.

## Nacrtajte unutarnju stranu

1. Upišite `L` i pritisnite {{key:Enter}}.
2. Upišite `0,0` i pritisnite {{key:Enter}}.
3. Upišite `@5000,0` i pritisnite {{key:Enter}}.
4. Upišite `@0,4000` i pritisnite {{key:Enter}}.
5. Upišite `@-5000,0` i pritisnite {{key:Enter}}.
6. Upišite `C` i pritisnite {{key:Enter}}.
7. Kliknite {{ui:Opseg}}.

Imate četiri odvojene linije. (Zatvorena polilinija odmaknula bi se odjednom; odvojene linije pokazuju kako Zaobli čisti kutove.)

## Odmaknite vanjsku stranu

1. Upišite `O` i pritisnite {{key:Enter}}. Upit glasi `Odredite udaljenost odmaka [Kroz (T)] <Kroz (T)>:`.
2. Upišite `200` i pritisnite {{key:Enter}}.
3. Na upitu `Odaberite objekt za odmak` kliknite donju liniju.
4. Na upitu `Odredite točku s strane za odmak` kliknite bilo gdje ispod nje. Pojavljuje se paralelna linija 200 ispod.
5. Kliknite desnu liniju, zatim kliknite desno od nje.
6. Kliknite gornju liniju, zatim kliknite iznad nje.
7. Kliknite lijevu liniju, zatim kliknite lijevo od nje.
8. Pritisnite {{key:Enter}} za završetak naredbe.

Trebali biste vidjeti četiri vanjske linije, svaka iste duljine kao njezina unutarnja, tako da se vanjski kutovi ne spajaju.

:::tip
Na upitu za udaljenost pritisnite {{key:Enter}} da ponovno upotrijebite zadnju udaljenost. Upišite `T` za Kroz: tada svaka kopija prolazi kroz točku koju kliknete, na kakvoj god je udaljenosti ona bila.
:::

{{cmd:OFFSET}} radi na linijama, lukovima, kružnicama i polilinijama. Odmicanje zatvorene polilinije odmiče cijeli obris, uključujući kutove.

## Očistite vanjske kutove pomoću Zaobli

{{cmd:FILLET}} spaja dvije linije u kutu: skraćuje ili produljuje obje da se sastanu. S radijusom 0 kut je oštar.

1. Upišite `F` i pritisnite {{key:Enter}}. Upit glasi `Odaberite prvu liniju [Radijus]:`.
2. Ako je zadnje zaobljenje koje ste napravili koristilo radijus, upišite `R`, pritisnite {{key:Enter}}, upišite `0` i pritisnite {{key:Enter}}.
3. Kliknite vanjsku donju liniju blizu njezina desnog kraja.
4. Na upitu `Odaberite drugu liniju` kliknite vanjsku desnu liniju blizu njezina donjeg kraja.

Dvije linije sada se sastaju u oštrom kutu, a naredba završava.

5. Pritisnite {{key:Enter}} za ponavljanje {{cmd:FILLET}} i napravite sljedeći kut.
6. Ponavljajte dok se sva četiri vanjska kuta ne spoje.

Kliknite svaku liniju na dijelu koji želite **zadržati**. S radijusom većim od 0, Zaobli umjesto toga dodaje luk između linija.

:::tip
Upišite `M` na prvom upitu da napravite sva četiri kuta odjednom, ili nacrtajte vanjsku stranu kao jednu zatvorenu poliliniju i upišite `P`: svaki kut se napravi odjednom. Držite {{key:Shift}} dok klikate drugu liniju za oštar kut bez mijenjanja radijusa.
:::

## Skosite kut pomoću Skosi

{{cmd:CHAMFER}} odsijeca kut ravnom linijom.

1. Upišite `CHA` i pritisnite {{key:Enter}}.
2. Upišite `D` i pritisnite {{key:Enter}}. Upišite `300` i pritisnite {{key:Enter}} za prvu udaljenost, zatim pritisnite {{key:Enter}} da i druga bude 300.
3. Kliknite unutarnju gornju liniju blizu njezina lijevog kraja, zatim unutarnju lijevu liniju blizu njezina gornjeg kraja.

Kut se odsiječe 300 duž svake linije, a kosina spaja obje. Upišite `A` umjesto `D` da zadate duljinu na prvoj liniji i kut.

## Izrežite vrata pomoću Skrati

Prvo nacrtajte dva dovratnika preko donjeg zida, zatim skratite linije zida između njih.

1. Upišite `L` i pritisnite {{key:Enter}}.
2. Upišite `1000,200` i pritisnite {{key:Enter}}.
3. Upišite `@0,-600` i pritisnite {{key:Enter}}, zatim opet pritisnite {{key:Enter}}.
4. Pritisnite {{key:Enter}} za ponavljanje {{cmd:LINE}}.
5. Upišite `1900,200` i pritisnite {{key:Enter}}.
6. Upišite `@0,-600` i pritisnite {{key:Enter}}, zatim opet pritisnite {{key:Enter}}.

Sada imate dvije kratke linije koje prelaze donji zid na razmaku od 900.

7. Upišite `TR` i pritisnite {{key:Enter}}. Povijest kaže `Trenutne postavke: Brzi način, rubovi: bez produženja`.
8. Kliknite unutarnju donju liniju između dvaju dovratnika. Taj dio nestaje. (Prvo zadržite pokazivač na njoj: dio koji će nestati postaje siv i crtkan.)
9. Kliknite vanjsku donju liniju između dvaju dovratnika. I taj dio nestaje.
10. Kliknite dio svakog dovratnika koji viri iznad zida, i dio ispod njega.
11. Pritisnite {{key:Enter}} za završetak naredbe.

Trebali biste vidjeti otvor od 900 u donjem zidu, s dovratnicima koji zatvaraju krajeve zida.

U Brzom načinu (zadanom) Skrati ne traži da prvo odaberete rezne rubove: svaki vidljivi objekt je rezni rub. Odaberite dio koji želite ukloniti ili povucite put kroz više dijelova da ih sve odjednom skratite. Upišite `U` i pritisnite {{key:Enter}} da vratite zadnji odabir ili povlačenje, a da ne napustite naredbu. Ograda, križanje, odabrani rubovi i {{key:Shift}} za produženje nalaze se u [Skrati i produži](topic:trim-and-extend).

## Produžite liniju do druge

{{cmd:EXTEND}} produljuje kraj linije, luka ili polilinije dok ne dosegne sljedeći objekt u tom smjeru.

1. Upišite `L` i pritisnite {{key:Enter}}.
2. Upišite `1000,2000` i pritisnite {{key:Enter}}.
3. Upišite `@2000,0` i pritisnite {{key:Enter}}, zatim opet pritisnite {{key:Enter}}. Linija staje 2000 prije desnog zida.
4. Upišite `EX` i pritisnite {{key:Enter}}.
5. Kliknite novu liniju blizu njezina desnog kraja.
6. Pritisnite {{key:Enter}} za završetak naredbe.

Linija sada ide do unutarnje strane desnog zida. Svaki vidljivi objekt je granica; kliknite blizu kraja koji treba rasti. Unutar {{cmd:TRIM}} isto radi {{key:Shift}}+klik.

## Razbijte i produljite

{{cmd:BREAK}} (`BR`, ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Prekini}}) reže prazninu bez reznog ruba: kliknite objekt gdje prazni dio počinje (taj klik je prva točka), zatim kliknite gdje završava. Na kružnici ide dio suprotno od kazaljke na satu od prve točke do druge. `F` na drugom pitanju omogućuje ponovni unos prve točke, a {{cmd:BREAKATPOINT}} dijeli objekt na dva u jednoj točki, bez praznine.

{{cmd:LENGTHEN}} (`LEN`) mijenja duljinu na jednom kraju:

1. Upišite `LEN` i pritisnite {{key:Enter}}. Kliknite liniju da vidite njezinu trenutnu duljinu; upit ponovno pita.
2. Odaberite način: `DE` (Delta: iznos za dodavanje, negativan za oduzimanje; `A` za kut luka), `P` (Postotak: 50 prepolovljuje), `T` (Ukupno: duljina koju treba imati) ili `DY` (Dinamički: povucite kraj).
3. Kliknite svaki objekt blizu kraja koji treba pomaknuti. `U` vraća zadnji; {{key:Enter}} završava.

Linije, lukovi i otvorene polilinije (njihov krajnji segment) mogu se produljiti.

## Česte pogreške

- **Cijela linija je nestala.** Ništa je nije presijecalo, pa ju je Brzi način izbrisao. Upišite `U` da je vratite; provjerite da je reznu liniju doista presijeca (zumirajte) i da nije na sloju koji je isključen.
- **„Nema granice u tom smjeru.“** Produži nije našao ništa u što bi naletio. Kliknite bliže kraju koji treba rasti.
- **„Radijus je prevelik.“** Luk bi prešao kraj jedne od linija. Upotrijebite manji radijus.
- **„Samo prvi ili posljednji segment otvorene polilinije može se skratiti.“** Odaberite dva susjedna segmenta polilinije ili upišite `P` da zaobljite svaki kut.
- **Odmak je išao na krivu stranu.** Strana je mjesto na koje kliknete nakon odabira objekta. Poništite s {{key:Mod+Z}} i kliknite na drugu stranu.
- **„Ne može se odmaknuti toliko daleko.“** Odmak bi izvrnuo luk, kružnicu ili poliliniju naopako. Upotrijebite manju udaljenost.
