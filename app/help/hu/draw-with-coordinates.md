---
title: Rajzolás koordinátákkal
summary: Rajzoljon pontos padlóvonalat abszolút, relatív és poláris koordináták, valamint közvetlen távolságbevitel gépelésével.
keywords: vonal, pline, polivonal, koordináták, relatív, polár, abszolút, közvetlen távolság, @, pontok beírása, pontos, ortho
from: 19e82350
---

## Mit fog létrehozni

Egy L alakú helyiség körvonala, 6000 × 4500 méretben, 2000 × 1500-as kivágással, pontosan megrajzolva, valamint egy 30°-os fal. Mind a négy pontbevitelt használni fogja. Milliméterben dolgozzon: egy rajzegység egy milliméternek felel meg.

Minden formátum gyors összefoglalója a [Koordináta- és távolságbevitel](topic:coordinate-entry) témakörben található.

## Mielőtt elkezdi

1. Nyissa meg a CadCraftot. Ha van nyitott rajz, előbb kattintson az {{ui:Új}} gombra.
2. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve. A jobb oldali panelen a {{ui:Jelenlegi beállítások}} olvasható.
3. Állítsa a {{ui:Mértékegységek}} értékét {{ui:Milliméter}} értékre. Semmi sem méreteződik át; ez csak azt mondja meg a rajzlapoknak és a plotoknak, mit jelent egy egység.

## Abszolút koordináták: az első pont

Az abszolút koordináta az origótól mért pozíció, `x,y` alakban megadva.

1. Írja be: `L`, majd nyomja meg az {{key:Enter}} billentyűt. A kérés így szól: `Specify first point:`.
2. Írja be: `0,0`, majd nyomja meg az {{key:Enter}} billentyűt.

A vonal most az origóból a keresztszálig húzódik, gumiszalag-szerűen. Mozgatás közben az állapotsoron a kezdőponttól mért távolság és szög látszik.

## Relatív koordináták: @dx,dy

A relatív koordinátát `@dx,dy` alakban írjuk be: ennyit vízszintesen, ennyit függőlegesen, az utolsó ponthoz képest. A negatív számok balra vagy lefelé visznek.

3. Írja be: `@6000,0`, majd nyomja meg az {{key:Enter}} billentyűt. Egy 6000-es vonal fut jobbra.
4. Írja be: `@0,3000`, majd nyomja meg az {{key:Enter}} billentyűt.
5. Írja be: `@-2000,0`, majd nyomja meg az {{key:Enter}} billentyűt.
6. Írja be: `@0,1500`, majd nyomja meg az {{key:Enter}} billentyűt.

Négy összefüggő vonalat kell látnia, amelyek felfelé haladnak a helyiség jobb oldalán.

## Közvetlen távolságbevitel: csupasz szám

Ha egyetlen számot ír be, a CadCraft a keresztszál irányában megteszi ezt a távolságot. Kapcsolja be az Orthót, hogy az irány vízszintesre vagy függőlegesre ugorjon.

7. Nyomja meg az {{key:F8}} billentyűt, vagy kattintson az állapotsoron az {{ui:Ortho}} gombra. Az állapotsor ezt mutatja: „Ortho be”.
8. Mozgassa a keresztszálat az utolsó ponttól balra. A gumiszalag vízszintes marad.
9. Írja be: `4000`, majd nyomja meg az {{key:Enter}} billentyűt. A vonal 4000-rel balra megy.
10. Mozgassa a keresztszálat az utolsó pont alá.
11. Írja be: `4500`, majd nyomja meg az {{key:Enter}} billentyűt. Visszaér a kezdőpontba.
12. Az üres kérésnél nyomja meg az {{key:Enter}} billentyűt a parancs befejezéséhez.

:::mac
Az F8 billentyű a Mac billentyűzeten médialejátszást vezérelhet. Tartsa lenyomva az **fn** billentyűt, és nyomja meg az F8-at, vagy kattintson az {{ui:Ortho}} gombra. Lásd: [Billentyűk, egerek és érintőpadok](common:keys).
:::

Most egy zárt, L alakú körvonala van, hat különálló vonalból.

13. Kattintson az {{ui:Kiterjedés}} gombra, hogy mindent lásson.

## Poláris koordináták: @távolság<szög

A poláris koordinátát `@távolság<szög` alakban írjuk be. A szögek fokban vannak, az X pozitív iránytól az óramutató járásával ellentétesen mérve: 0 jobbra, 90 felfelé, 180 balra, 270 (vagy -90) lefelé.

14. Írja be: `L`, majd nyomja meg az {{key:Enter}} billentyűt.
15. Írja be: `6000,0`, majd nyomja meg az {{key:Enter}} billentyűt, hogy a jobb alsó sarokból induljon.
16. Írja be: `@2500<-30`, majd nyomja meg az {{key:Enter}} billentyűt. Egy 2500-as vonal indul a sarokból, lefelé és jobbra, a vízszintestől 30°-kal lefelé.
17. Nyomja meg az {{key:Enter}} billentyűt a parancs befejezéséhez.

A `@` jel nélküli poláris koordináta, például `2500<30`, az origótól mérődik, nem az utolsó ponttól.

## Ugyanez a körvonal egyetlen polivonalként

Hat különálló vonal sok feladatra megfelel, de a polivonal egyetlen objektum: egészben tolható el, mérhető és jelölhető ki. Használja a {{cmd:PLINE}} parancsot ugyanazzal a bevitellel.

1. Írja be: `PL`, majd nyomja meg az {{key:Enter}} billentyűt.
2. Írja be: `0,-6000`, majd nyomja meg az {{key:Enter}} billentyűt, hogy az első körvonal alatt kezdjen.
3. Írja be: `@6000,0`, majd nyomja meg az {{key:Enter}} billentyűt.
4. Írja be: `@0,3000`, majd nyomja meg az {{key:Enter}} billentyűt.
5. Írja be: `@-2000,0`, majd nyomja meg az {{key:Enter}} billentyűt.
6. Írja be: `@0,1500`, majd nyomja meg az {{key:Enter}} billentyűt.
7. Írja be: `@-4000,0`, majd nyomja meg az {{key:Enter}} billentyűt.
8. Írja be: `C`, majd nyomja meg az {{key:Enter}} billentyűt. A polivonal bezáródik, a parancs véget ér.
9. Kattintson az új körvonalra. A jobb oldali panelen a „Polivonal” látszik, a {{ui:Csúcsok}}, a {{ui:Hossz}} és — mivel zárt — a {{ui:Terület}}.

A területnek 24000000 értéket kell mutatnia (négyzetmilliméter, ami 24 négyzetméter).

## Opciók rajzolás közben

- A {{cmd:LINE}} és a {{cmd:PLINE}} parancsban írja be: `U`, majd nyomja meg az {{key:Enter}} billentyűt az utolsó szakasz visszavonásához, anélkül hogy kilépne a parancsból.
- A {{cmd:LINE}} parancsban a `C` bezárja a vonalat az első pontig, ha legalább két szakasz van.
- A {{cmd:PLINE}} parancsban az `A` ívszakaszokra vált (minden ív simán folytatja az előző szakaszt), az `L` pedig vonalra vált vissza. Ívmódban a lezárási opció: `CL`.
- A {{cmd:LINE}} parancs `Specify first point:` kérésénél az {{key:Enter}} billentyű az utoljára megadott ponttól indítja a vonalat, így ott folytathatja, ahol abbahagyta.

## Gyakori hibák

- **A `6000,0`-t írta be, pedig `@6000,0`-t akart.** `@` nélkül a pont az origótól mérődik, nem az utolsó ponttól, így a vonal váratlan helyre kerül. A CadCraftban az `x,y` mindig abszolút. Írja be: `U`, majd nyomja meg az {{key:Enter}} billentyűt a visszavonáshoz.
- **Vessző tizedespontként.** A tizedesjel pont: `1250.5`. A vessző mindig az X-et választja el az Y-tól.
- **A közvetlen távolság rossz irányba ment.** A csupasz szám a keresztszálat követi. Mielőtt megnyomja az {{key:Enter}} billentyűt, mozgassa a keresztszálat a kívánt oldalra, és egyenes vonalakhoz kapcsolja be az {{ui:Ortho}} funkciót.
- **„Pont vagy opciókulcsszó szükséges.”** A CadCraft nem értette, amit beírt. Nézze meg, nincs-e szóköz a számban, vagy hiányzik-e a vessző, majd írja be újra.
- **Láb és hüvelyk.** A CadCraft csak sima számokat olvas. Írja be a `150`-et 12'-6" értékhez hüvelykes rajzban, vagy a `12.5`-öt lábas rajzban.
