---
title: A nézet elforgatása és a saját koordináták (UCS)
summary: Forgassa a nézetet 90°-kal vagy tetszőleges szögben anélkül, hogy bármit mozgatna a rajzban, és állítson be felhasználói koordinátarendszert (UCS), hogy a pontok, az ortó, a polárkövetés, a rács és az új szöveg egy épület saját tengelyeit kövessék.
keywords: ucs, felhasználói koordinátarendszer, alaprajz, nézet forgatása, nézet csavarása, ucs z, ucs 3pont, ucs objektum, ucs világ, elnevezett ucs, ucsfollow, turnleft, turnright, turnworld, szögben álló épület, elforgatott rács
from: 6f152c65
---

## Amit megtanul

Hogyan nézhet el egy elforgatott rajzot úgy, hogy a szögben rajzolt épület a képernyőn derékszögben olvasható legyen, és hogyan írhat be pontokat az épület saját tengelyei mentén. Semmi nem mozdul meg a rajzban, amíg ezt csinálja: az objektumok megtartják koordinátáikat, az elforgatás nem szerkesztés, és a rajz nem jelölődik módosítottként.

## Nézet negyedfordítása

1. Kattintson a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:A nézet elfordítása 90°-kal balra}} vagy {{ui:A nézet elfordítása 90°-kal jobbra}} lehetőségre.

A rajz elfordul a képernyőn a rajzterület közepe körül. Ismételje meg a forgatáshoz.

2. Kattintson a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Vissza a világhoz}} lehetőségre, hogy vízszintesen állítsa vissza.

A mögöttük álló parancsok a {{cmd:TURNLEFT}}, a {{cmd:TURNRIGHT}} és a {{cmd:TURNWORLD}}. Ha billentyűt szeretne hozzájuk rendelni, adjon hozzá egy sort, például `TL=TURNLEFT`, az aliasaihoz a {{cmd:ALIASEDIT}} segítségével.

## Szögben álló épülethez igazítás

1. Írja be a `UCS` parancsot, nyomja meg az Entert, majd az `OB` (Objektum) betűket, és az Entert.
2. Kattintson a falvonal közelében, a végénél, amelynek a kezdőpontnak kell lennie.

A UCS most ott kezdődik a vég pontján, az X tengelye a fal mentén fut, és a nézet úgy fordul, hogy a fal vízszintes legyen a képernyőn. A bal alsó sarokban lévő tengelyjel mutatja, merre mutatnak a UCS tengelyei.

3. Rajzoljon szokás szerint. A UCS beállítása mellett:
   - `x,y` és `@dx,dy` a UCS tengelyei mentén értendő; `d<a` a szöget a UCS X tengelyétől méri.
   - Az {{ui:Ortho}}, a polárkövetés és a rács a UCS tengelyeit követi, és a kereszt is.
   - Az új szöveg és az új bekezdések a UCS X tengelye mentén futnak; a {{cmd:DIMLINEAR}} vízszintes és függőleges iránya is követi.
   - Az állapotsor és a {{cmd:ID}} parancs koordinátái UCS-koordináták.
4. Ha világpontot szeretne beírni, miközben UCS van beállítva, elé írjon `*` jelet: `*0,0` vagy `@*100,0`.
5. Írja be a `UCS` parancsot, nyomja meg az Entert, majd újra az Entert, hogy visszatérjen a világhoz.

## Más módok UCS beállítására

A {{cmd:UCS}} kérdésnél:

| Ezt írja be | Mit tesz |
|---|---|
| egy pont | Új origó; majd kattintson egy pontra az új X tengelyen, vagy nyomja meg az Entert a szög megtartásához |
| `Z` | Elforgatja a UCS-t az origója körül egy Ön által beírt szöggel (fokban, az óramutató járásával ellentétesen) vagy kiválasztva |
| `3` (3pont) | Egy origó, egy pont a pozitív X tengelyen, és egy pont a pozitív Y oldalon |
| `OB` (Objektum) | Vonalból, ívből, körből, polivonal-szakaszból, szövegből, blokkhivatkozásból, pontból vagy szerkesztővonalból |
| `P` (Előző) | Az ezt megelőző UCS (az utolsó tíz megmarad, amíg a rajz nyitva van) |
| `W` (Világ) | Vissza a világhoz |
| `NA` (Elnevezett) | `S` elmenti az aktuális UCS-t névvel, `R` visszaállít egyet, `D` töröl egyet, `?` listázza őket |

Minden változtatás úgy forgatja a nézetet, hogy az új UCS X tengelye vízszintes legyen. A {{cmd:PLAN}} a UCS változtatása nélkül forgatja a nézetet: az Enter az aktuális UCS-re, a `U` egy mentettre, a `W` a világra.

## Jó tudni

- A osztott képernyő minden ablaktábla megtartja saját elforgatását. A UCS a rajzhoz tartozik.
- A lapok papírkoordinátákkal dolgoznak; UCS-t a {{ui:Modell}} lapon állítson be, vagy egy nézetablakon belül.
- Az elforgatott nézetben húzott kijelölő ablakok azt jelölik ki, ami a képernyőn benne van.
- A LISP-rutinok a `getpoint` segítségével UCS-pontokat kapnak, olvashatják az `UCSORG`, `UCSXDIR`, `UCSYDIR` és `VIEWTWIST` értékeket, a `trans` pedig a világ, a UCS és a kijelző között konvertál.

:::note
A mentett fájl egy későbbi verzióban megőrzi a UCS-t és a nézet elforgatását; addig ezek a rajz nyitva tartása alatt maradnak meg.
:::
