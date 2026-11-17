---
title: Odmak, obrezivanje, produženje, zaobljenje i skošenje zidova
summary: Pretvorite pojedinačne linije u dvostruke zidove odmakom, očistite uglove zaobljenjem, a linije obrežite i produžite pomoću Obreži i Produži.
keywords: odmak, obreži, produži, zaobljenje, skošenje, prekini, breakatpoint, izduži, zidovi, ugao, sijeci, paralelno, radijus, čišćenje
from: c6c5cbd0
---

## Šta ćete napraviti

Malu prostoriju sa zidovima debljine 200: unutrašnja strana se crta, vanjska se odmakne, uglovi se očiste, a kroz jedan zid se prosijeca otvor za vrata.

## Nacrtajte unutrašnju stranu

1. Ukucajte `L` i pritisnite {{key:Enter}}.
2. Ukucajte `0,0` i pritisnite {{key:Enter}}.
3. Ukucajte `@5000,0` i pritisnite {{key:Enter}}.
4. Ukucajte `@0,4000` i pritisnite {{key:Enter}}.
5. Ukucajte `@-5000,0` i pritisnite {{key:Enter}}.
6. Ukucajte `C` i pritisnite {{key:Enter}}.
7. Kliknite {{ui:Extents}}.

Imate četiri odvojene linije. (Zatvorena polilinija bi se odmakla odjednom; odvojene linije pokazuju kako Zaobljenje čisti uglove.)

## Odmaknite vanjsku stranu

1. Ukucajte `O` i pritisnite {{key:Enter}}. Upit glasi `Zadaj udaljenost odmaka [Kroz (T)] <Kroz (T)>:`.
2. Ukucajte `200` i pritisnite {{key:Enter}}.
3. Kod `Odaberite objekat za odmak` kliknite donju liniju.
4. Kod `Zadaj tačku sa strane za odmak` kliknite bilo gdje ispod nje. Pojavi se paralelna linija 200 ispod.
5. Kliknite desnu liniju, pa kliknite desno od nje.
6. Kliknite gornju liniju, pa kliknite iznad nje.
7. Kliknite lijevu liniju, pa kliknite lijevo od nje.
8. Pritisnite {{key:Enter}} da završite naredbu.

Trebali biste vidjeti četiri vanjske linije, svaka iste dužine kao njena unutrašnja, pa se vanjski uglovi ne spajaju.

:::tip
Pritisnite {{key:Enter}} na upitu za udaljenost da ponovo koristite posljednju udaljenost. Ukucajte [Kroz (T)]: tada svaka kopija prolazi kroz tačku na koju kliknete, na kojoj god udaljenosti da je to.
:::

{{cmd:OFFSET}} radi s linijama, lukovima, krugovima i polilinijama. Odmak zatvorene polilinije odmiče cijeli obris, uključujući uglove.

## Očistite vanjske uglove zaobljenjem

{{cmd:FILLET}} spaja dvije linije u uglu: obreže ili produži obje da se sastanu. Sa radijusom 0 ugao je pravi.

1. Ukucajte `F` i pritisnite {{key:Enter}}. Upit glasi `Odaberite prvu liniju [Radijus (R)]:`.
2. Ako je posljednje zaobljenje imalo radijus, ukucajte [Radijus (R)], pritisnite {{key:Enter}}, ukucajte `0` i pritisnite {{key:Enter}}.
3. Kliknite vanjsku donju liniju blizu njenog desnog kraja.
4. Kod `Odaberite drugu liniju` kliknite vanjsku desnu liniju blizu njenog donjeg kraja.

Dvije linije sada se sastaju u oštrom uglu, a naredba se završava.

5. Pritisnite {{key:Enter}} da ponovite {{cmd:FILLET}}, i uradite sljedeći ugao.
6. Ponavljajte dok se sva četiri vanjska ugla ne spoje.

Kliknite svaku liniju na dijelu koji želite **zadržati**. Sa radijusom većim od 0, Zaobljenje dodaje luk između linija.

:::tip
Ukucajte `M` na prvom upitu da uradite sva četiri ugla odjednom, ili nacrtajte vanjsku stranu kao jednu zatvorenu poliliniju i ukucajte `P`: svaki ugao se radi odjednom. Držite {{key:Shift}} dok klikćete drugu liniju za oštar ugao bez mijenjanja radijusa.
:::

## Skosite ugao sa Skošenjem

{{cmd:CHAMFER}} odsijeca ugao ravnom linijom.

1. Ukucajte `CHA` i pritisnite {{key:Enter}}.
2. Ukucajte [Udaljenost (D)] i pritisnite {{key:Enter}}. Ukucajte `300` i pritisnite {{key:Enter}} za prvu udaljenost, pa pritisnite {{key:Enter}} da i za drugu uzmete 300.
3. Kliknite unutrašnju gornju liniju blizu njenog lijevog kraja, pa unutrašnju lijevu liniju blizu njenog gornjeg kraja.

Ugao se odsiječe 300 duž svake linije, a linija skošenja ih spaja. Ukucajte [Ugao (A)] umjesto [Udaljenost (D)] da date dužinu na prvoj liniji i ugao.

## Otvor za vrata sa Obrezivanjem

Prvo nacrtajte dva dovratnika preko donjeg zida, zatim obrežite linije zida između njih.

1. Ukucajte `L` i pritisnite {{key:Enter}}.
2. Ukucajte `1000,200` i pritisnite {{key:Enter}}.
3. Ukucajte `@0,-600` i pritisnite {{key:Enter}}, pa ponovo pritisnite {{key:Enter}}.
4. Pritisnite {{key:Enter}} da ponovite {{cmd:LINE}}.
5. Ukucajte `1900,200` i pritisnite {{key:Enter}}.
6. Ukucajte `@0,-600` i pritisnite {{key:Enter}}, pa ponovo pritisnite {{key:Enter}}.

Sada imate dvije kratke linije koje sijeku donji zid na razmaku od 900.

7. Ukucajte `TR` i pritisnite {{key:Enter}}. Historija kaže `Trenutne postavke: Brzi režim, ivice: bez produženja`.
8. Kliknite unutrašnju donju liniju između dva dovratnika. Taj dio nestane. (Prvo zadržite pokazivač na njoj: dio koji će nestati postane siv i isprekidan.)
9. Kliknite vanjsku donju liniju između dva dovratnika. I taj dio nestane.
10. Kliknite dio svakog dovratnika koji viri iznad zida, i dio ispod njega.
11. Pritisnite {{key:Enter}} da završite naredbu.

Trebali biste vidjeti otvor od 900 u donjem zidu, sa dovratnicima koji zatvaraju krajeve zida.

U Brzom režimu (zadano) Obreži ne traži prvo da birate rubne linije: svaki vidljivi objekat je rubna linija. Odaberite dio koji želite ukloniti, ili prevucite putanju preko nekoliko dijelova da ih sve obrežete odjednom. Ukucajte `U` i pritisnite {{key:Enter}} da vratite posljednji izbor ili prevlačenje bez izlaska iz naredbe. Ograda (`F`), ukršteni okvir, izabrane rubne linije i {{key:Shift}} za produženje nalaze se u [Obreži i produži](topic:trim-and-extend).

## Produžite liniju do druge

{{cmd:EXTEND}} produžava liniju, luk ili kraj polilinije dok ne dodirne sljedeći objekat u tom smjeru.

1. Ukucajte `L` i pritisnite {{key:Enter}}.
2. Ukucajte `1000,2000` i pritisnite {{key:Enter}}.
3. Ukucajte `@2000,0` i pritisnite {{key:Enter}}, pa ponovo pritisnite {{key:Enter}}. Linija staje 2000 prije desnog zida.
4. Ukucajte `EX` i pritisnite {{key:Enter}}.
5. Kliknite novu liniju blizu njenog desnog kraja.
6. Pritisnite {{key:Enter}} da završite naredbu.

Linija sada ide do unutrašnje strane desnog zida. Svaki vidljivi objekat je granica; kliknite blizu kraja koji treba da naraste. Unutar {{cmd:TRIM}}, {{key:Shift}}+klik radi isto.

## Prekinite i izduživanje

{{cmd:BREAK}} (`BR`, ili {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) pravi prazninu bez rubne linije: kliknite objekat gdje praznina počinje (taj klik je prva tačka), zatim kliknite gdje završava. Na krugu ide dio suprotno kretanju kazaljke na satu od prve tačke do druge. `F` na drugom pitanju omogućava da ponovo date prvu tačku, a {{cmd:BREAKATPOINT}} dijeli objekat na dva u jednoj tački, bez praznine.

{{cmd:LENGTHEN}} (`LEN`) mijenja dužinu na jednom kraju:

1. Ukucajte `LEN` i pritisnite {{key:Enter}}. Kliknite liniju da vidite njenu trenutnu dužinu; upit pita ponovo.
2. Izaberite način: `DE` (Delta: iznos za dodavanje, negativan za oduzimanje; [Ugao (A)] za ugao luka), [Procenat (P)] (50 prepolovi), [Ukupno (T)] (dužina koju treba imati) ili `DY` (Dinamički: prevucite kraj).
3. Kliknite svaki objekat blizu kraja koji treba pomjeriti. `U` vraća posljednji; {{key:Enter}} završava.

Mogu se produžiti linije, lukovi i otvorene polilinije (njihov krajnji segment).

## Česte greške

- **Cijela linija nestala.** Ništa je nije sijeklo, pa ju je Brzi režim obrisao. Ukucajte `U` da je vratite; provjerite da linija za sječenje stvarno siječe (zumirajte) i da nije na sloju koji je isključen.
- **"Nema granice u tom smjeru."** Produži nije našao ništa na šta bi naletio. Kliknite bliže kraju koji treba da naraste.
- **"Radijus je prevelik."** Luk bi prešao preko kraja jedne od linija. Koristite manji radijus.
- **"Samo prvi ili posljednji segment otvorene polilinije može se skratiti."** Odaberite dva susjedna segmenta polilinije, ili ukucajte `P` da zaokružite svaki ugao.
- **Odmak je otišao na pogrešnu stranu.** Strana je ona na koju kliknete nakon što odaberete objekat. Poništite sa {{key:Mod+Z}} i kliknite na drugu stranu.
- **"Ne može se odmaknuti toliko."** Odmak bi izvrnuo luk, krug ili poliliniju naopako. Koristite manju udaljenost.
