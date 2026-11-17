---
title: Falak eltolása, vágása, meghosszabbítása, lekerekítése és letörése
summary: Egyes vonalakból kettős falat készíthet az Eltolással, a sarkokat a Lekerekítéssel tisztíthatja, a vonalakat pedig a Vágással és a Nyújtással vághatja és hosszabbíthatja.
keywords: eltolás, vágás, nyújtás, lekerekítés, letörés, ferdítés, törés, breakatpoint, hosszabbítás, falak, sarok, levágás, párhuzamos, rádiusz, tisztítás
from: c6c5cbd0
---

## Amit elkészít

Egy kis szoba 200 vastag falakkal: a belső oldal megrajzolásra kerül, a külső oldal eltolással készül, a sarkok megtisztításra kerülnek, és egy ajtónyílás vágódik át az egyik falon.

## A belső oldal megrajzolása

1. Írja be az `L`-t, és nyomja meg az {{key:Enter}}t.
2. Írja be a `0,0` értéket, és nyomja meg az {{key:Enter}}t.
3. Írja be az `@5000,0` értéket, és nyomja meg az {{key:Enter}}t.
4. Írja be az `@0,4000` értéket, és nyomja meg az {{key:Enter}}t.
5. Írja be az `@-5000,0` értéket, és nyomja meg az {{key:Enter}}t.
6. Írja be a `C`-t, és nyomja meg az {{key:Enter}}t.
7. Kattintson a {{ui:Extents}} gombra.

Négy különálló vonala van. (Egy zárt polivonal egy lépésben tolható el; a különálló vonalak megmutatják, hogyan tisztítja a Lekerekítés a sarkokat.)

## A külső oldal eltolása

1. Írja be az `O`-t, és nyomja meg az {{key:Enter}}t. A kérdés így szól: `Adja meg az eltolási távolságot [Átmenő (T)] <Átmenő (T)>:`.
2. Írja be a `200` értéket, és nyomja meg az {{key:Enter}}t.
3. Az `Jelölje ki az eltolandó objektumot` kérésnél kattintson az alsó vonalra.
4. Az `Adja meg az eltolandó oldal pontját` kérésnél kattintson bárhová alá. Párhuzamos vonal jelenik meg 200-zal lejjebb.
5. Kattintson a jobb oldali vonalra, majd kattintson annak jobbjára.
6. Kattintson a felső vonalra, majd kattintson fölé.
7. Kattintson a bal oldali vonalra, majd kattintson annak bal oldalára.
8. A parancs befejezéséhez nyomja meg az {{key:Enter}}t.

Négy külső vonalat lát, mindegyik ugyanolyan hosszú, mint a belső párja, így a külső sarkok nem találkoznak.

:::tip
A távolság kérésnél nyomja meg az {{key:Enter}}t, hogy újra használja az utolsó távolságot. Írja be a `T`-t az Átmenő lehetőséghez: ekkor minden másolat az Ön által kattintott ponton megy át, bármekkora legyen is a távolság.
:::

A {{cmd:OFFSET}} ívekre, körökre és polivonalakra is működik. Zárt polivonal eltolásakor az egész körvonal eltolódik, a sarkokkal együtt.

## A külső sarkok megtisztítása a Lekerekítéssel

A {{cmd:FILLET}} egy sarkon összeköt két vonalat: mindkettőt levágja vagy meghosszabbítja, hogy találkozzanak. Nulla rádiusz esetén a sarok négyzetes.

1. Írja be az `F`-et, és nyomja meg az {{key:Enter}}t. A kérdés így szól: `Jelölje ki az első vonalat [Rádiusz]:`.
2. Ha az utolsó lekerekítésnél rádiuszt használt, írja be az `R`-t, nyomja meg az {{key:Enter}}t, írja be a `0`-t, és nyomja meg az {{key:Enter}}t.
3. Kattintson a külső alsó vonalra a jobb vége közelében.
4. Az `Jelölje ki a második vonalat` kérésnél kattintson a külső jobb oldali vonalra az alsó vége közelében.

A két vonal éles sarokban találkozik, és a parancs véget ér.

5. Nyomja meg az {{key:Enter}}t a {{cmd:FILLET}} megismétléséhez, és csinálja meg a következő sarkot.
6. Ismételje, amíg mind a négy külső sarok össze nem ér.

Minden vonalon arra a részre kattintson, amelyet **meg akar tartani**. Nullánál nagyobb rádiusz esetén a Lekerekítés ívet illeszt a vonalak közé.

:::tip
Az első kérdésnél írja be az `M`-et, hogy mind a négy sarkot egyszerre végezze el, vagy rajzolja meg a külső oldalt egy zárt polivonalként, és írja be a `P`-t: minden sarok egyszerre elkészül. A második vonal kattintásánál tartsa lenyomva a {{key:Shift}} billentyűt, hogy éles sarkot kapjon a rádiusz megváltoztatása nélkül.
:::

## Sarok letörése a Letöréssel

A {{cmd:CHAMFER}} egyenes vonallal levág egy sarkot.

1. Írja be a `CHA`-t, és nyomja meg az {{key:Enter}}t.
2. Írja be a `D`-t, és nyomja meg az {{key:Enter}}t. Írja be a `300` értéket, és nyomja meg az {{key:Enter}}t az első távolsághoz, majd nyomja meg az {{key:Enter}}t, hogy a második távolság is 300 legyen.
3. Kattintson a belső felső vonalra a bal vége közelében, majd a belső bal oldali vonalra a teteje közelében.

A sarok mindegyik vonalon 300-zal vissza lesz vágva, és egy letörővonal köti össze őket. Írja be az `A`-t a `D` helyett, ha az első vonalon hosszt és szöget szeretne megadni.

## Ajtónyílás vágása a Vágással

Először rajzolja meg a két ajtófélfát az alsó fal fölött, majd vágja le a falvonalakat közöttük.

1. Írja be az `L`-t, és nyomja meg az {{key:Enter}}t.
2. Írja be a `1000,200` értéket, és nyomja meg az {{key:Enter}}t.
3. Írja be az `@0,-600` értéket, és nyomja meg az {{key:Enter}}t, majd nyomja meg újra az {{key:Enter}}t.
4. Nyomja meg az {{key:Enter}}t a {{cmd:LINE}} megismétléséhez.
5. Írja be az `1900,200` értéket, és nyomja meg az {{key:Enter}}t.
6. Írja be az `@0,-600` értéket, és nyomja meg az {{key:Enter}}t, majd nyomja meg újra az {{key:Enter}}t.

Két rövid vonala van, amely 900 távolságra keresztezi az alsó falat.

7. Írja be a `TR`-t, és nyomja meg az {{key:Enter}}t. Az előzmények ezt írják: „Jelenlegi beállítások: Gyors mód, élek: nincs nyújtás”.
8. Kattintson a belső alsó vonalra a két ajtófélfa között. Az a darab eltűnik. (Vigye rá előbb a mutatót: az eltávolítandó darab szürkén és szaggatottan jelenik meg.)
9. Kattintson a külső alsó vonalra a két ajtófélfa között. Az a darab is eltűnik.
10. Kattintson minden ajtófélfa azon részére, amely a fal fölé nyúlik, és arra, amely alatta van.
11. A parancs befejezéséhez nyomja meg az {{key:Enter}}t.

A falban 900-as nyílást kell látnia, az ajtófélfákkal a fal végein.

A Gyors módban (az alapértelmezett) a Vágás nem kéri, hogy előbb vágóéleket válasszon: minden látható objektum vágóél. Jelölje ki azt a darabot, amelyet el szeretne tüntetni, vagy húzzon egy útvonalat több darabon át, hogy mindet egyszerre vágja le. Írja be a `U`-t, és nyomja meg az {{key:Enter}}t, hogy visszavonja az utolsó kattintást vagy húzást a parancsból való kilépés nélkül. A kerítés, a keresztező ablak, a kiválasztott vágóélek és a meghosszabbításhoz használt {{key:Shift}} a [Vágás és nyújtás](topic:trim-and-extend) témakörben találhatók.

## Vonal meghosszabbítása egy másikig

Az {{cmd:EXTEND}} meghosszabbít egy vonalat, ívet vagy polivonal-véget addig, amíg az a megadott irányban a következő objektumba nem ér.

1. Írja be az `L`-t, és nyomja meg az {{key:Enter}}t.
2. Írja be az `1000,2000` értéket, és nyomja meg az {{key:Enter}}t.
3. Írja be az `@2000,0` értéket, és nyomja meg az {{key:Enter}}t, majd nyomja meg újra az {{key:Enter}}t. A vonal 2000-rel a jobb fal előtt megáll.
4. Írja be az `EX`-et, és nyomja meg az {{key:Enter}}t.
5. Kattintson az új vonalra a jobb vége közelében.
6. A parancs befejezéséhez nyomja meg az {{key:Enter}}t.

A vonal most a jobb fal belső síkjáig fut. Minden látható objektum határoló; a végnél kattintson arra, amelyiknek nőnie kell. A {{cmd:TRIM}} parancsban a {{key:Shift}}+kattintás ugyanezt teszi.

## Törés és hosszabbítás

A {{cmd:BREAK}} (`BR`, vagy {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) vágóél nélkül vág rést: kattintson arra az objektumra, ahol a rés kezdődik (ez a kattintás az első pont), majd arra a helyre, ahol véget ér. Körnél az első ponttól az óramutató járásával ellentétesen a második pontig tartó rész tűnik el. A második kérdésnél az `F` lehetővé teszi, hogy újra megadja az első pontot; a {{cmd:BREAKATPOINT}} pedig egy objektumot két részre oszt egy ponton, rés nélkül.

A {{cmd:LENGTHEN}} (`LEN`) egy végén változtatja a hosszt:

1. Írja be a `LEN`-t, és nyomja meg az {{key:Enter}}t. Kattintson egy vonalra, hogy lássa a jelenlegi hosszát; a kérdés újra megjelenik.
2. Válassza ki a módot: `DE` (Különbség: hozzáadandó mennyiség, negatív érték levon; `A` ívnél az ív szöge), `P` (Százalék: az 50 felezi), `T` (Teljes: a kívánt hossz) vagy `DY` (Dinamikus: húzza a véget).
3. Kattintson minden objektumon a végnél, amelyet mozgatni kell. A `U` visszavonja az utolsót; az {{key:Enter}} befejezi.

A vonalak, ívek és nyitott polivonalak (a végső szakaszuk) hosszabbíthatók.

## Gyakori hibák

- **Egy teljes vonal eltűnt.** Semmi nem metszette, ezért a Gyors mód törölte. Írja be a `U`-t a visszaállításhoz; ellenőrizze, hogy a vágóvonal valóban metszi-e (nagyítson be), és nincs-e kikapcsolt rétegen.
- **„Nincs határoló ebben az irányban.”** A Nyújtás nem talált, amibe beleütközzön. Kattintson közelebb ahhoz a véghez, amelyiknek nőnie kell.
- **„A rádiusz túl nagy.”** Az ív túlmenne az egyik vonal végén. Használjon kisebb rádiuszt.
- **„Csak a nyitott polivonal első vagy utolsó szakasza vágható vissza.”** Jelöljön ki két egymás melletti szakaszt, vagy írja be a `P`-t, hogy a polivonal minden sarkát lekerekítse.
- **Az eltolás rossz oldalra került.** Az oldal az, ahová az objektum kiválasztása után kattint. Vonja vissza a {{key:Mod+Z}} billentyűvel, és kattintson a másik oldalra.
- **„Ilyen messzire nem lehet eltolni.”** Az eltolás az ívet, kört vagy polivonalat átfordítaná. Használjon kisebb távolságot.
