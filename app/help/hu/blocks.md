---
title: Blokkok készítése és beszúrása
summary: Alakítsa blokká a megrajzolt ajtót, helyezze el újra más pozíciókban, léptékekben és szögekben, és tisztítsa meg a nem használt blokkokat.
keywords: blokk, bmake, beszúrás, ddinsert, szimbólum, tisztítás, felbontás, újradefiniálás, alappont, hivatkozás, megszámlálás, bcount, kimutatás, csv, attribútumok, adatkinyerés
from: 125a129d
---

## Mit fog létrehozni

Egy ajtószimbólum, amelyet `DOOR-900` nevű blokká alakít, majd háromszor elhelyez: az eredeti állásban, 90°-kal elforgatva és tükrözve.

A blokk elnevezett objektumcsoport. Egyszer rajzolja meg; minden helyen, ahol használja, egy **blokkhivatkozás** van, amely az egyetlen definícióra mutat. A bal oldali panel {{ui:Blokkok}} szakasza felsorolja a rajzban lévő blokkokat és azt, hogy mennyiszer használja mindegyiket.

## Az ajtó megrajzolása

1. Írja be: `L`, majd nyomja meg az {{key:Enter}} billentyűt.
2. Írja be: `0,0`, majd nyomja meg az {{key:Enter}} billentyűt.
3. Írja be: `@0,900`, majd nyomja meg az {{key:Enter}} billentyűt, végül még egyszer az {{key:Enter}} billentyűt. Ez az ajtólap.
4. Írja be: `A`, majd nyomja meg az {{key:Enter}} billentyűt.
5. Írja be: `C`, majd nyomja meg az {{key:Enter}} billentyűt, hogy először a középpontot adja meg.
6. Írja be: `0,0`, majd nyomja meg az {{key:Enter}} billentyűt a középponthoz.
7. Írja be: `900,0`, majd nyomja meg az {{key:Enter}} billentyűt a kezdőponthoz.
8. Írja be: `0,900`, majd nyomja meg az {{key:Enter}} billentyűt a végponthoz. Ez a nyitási ív.
9. Kattintson a {{ui:Kiterjedés}} gombra.

Az ívek a kezdőponttól a végpont felé, az óramutató járásával ellentétes irányban haladnak.

## A blokk készítése

1. Írja be: `B`, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson a {{ui:Készítés}} gombra a Blokkok csoportban.
2. A `Enter block name` kérésnél írja be a `DOOR-900` nevet, majd nyomja meg az {{key:Enter}} billentyűt.
3. A `Specify insertion base point` kérésnél írja be: `0,0`, majd nyomja meg az {{key:Enter}} billentyűt. Ez a zsanér: az a pont, amely arra a helyre kerül, ahová a blokkot elhelyezi.
4. A `Select objects` kérésnél húzzon ablakot az ajtólap és az ív köré.
5. Nyomja meg az {{key:Enter}} billentyűt.

Az előzmények ezt írják: `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` A {{ui:Blokkok}} panel a DOOR-900 mellett `1×` jelzéssel tünteti fel: egy hivatkozás. Kattintson az ajtóra: most egyetlen objektumként jelölődik ki, mint „Blokkhivatkozás”.

:::tip
Kijelölheti előbb az objektumokat, majd beírhatja: `B`. A CadCraft ilyenkor is kéri a nevet és az alappontot, majd a kijelölt objektumokat használja.
:::

## A blokk beszúrása

1. Írja be: `I`, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson a {{ui:Blokkok}} panel DOOR-900 melletti {{ui:Beszúrás}} gombjára.
2. A `Enter block name or [File/Library] <DOOR-900>` kérésnél nyomja meg az {{key:Enter}} billentyűt. (A panel {{ui:Beszúrás}} gombja a nevet automatikusan kitölti.)
3. Az ajtó követi a keresztszálat. Kattintson arra a pontra, ahová a zsanérnak kerülnie kell.

Megjelenik egy második ajtó.

## Elforgatva vagy léptékezve beszúrás

1. Írja be: `I`, majd nyomja meg az {{key:Enter}} billentyűt, és a név elfogadásához nyomja meg az {{key:Enter}} billentyűt.
2. A `Specify insertion point [Scale/Rotate]` kérésnél írja be: `R`, majd nyomja meg az {{key:Enter}} billentyűt.
3. Írja be: `90`, majd nyomja meg az {{key:Enter}} billentyűt. Az előnézet elfordul.
4. Kattintson az elhelyezéshez.

Ha léptéktényezőt szeretne megadni, inkább írja be: `S`; ez mindkét irányban érvényes. A léptéket és az elforgatást a rendszer megjegyzi a következő beszúráshoz. Ajtó tükrözéséhez szúrja be, majd a hivatkozáson használja a {{cmd:MIRROR}} parancsot.

## Elhelyezett blokk módosítása

Jelöljön ki egy blokkhivatkozást. A jobb oldali panelen módosíthatja a {{ui:X}}, {{ui:Y}}, {{ui:X lépték}}, {{ui:Y lépték}} és {{ui:Elforgatás}} értékeket. A negatív {{ui:X lépték}} értéke tükrözi.

## Blokk újradefiniálása

Ha minden ajtót egyszerre szeretne módosítani, készítsen blokkot ugyanazzal a névvel:

1. Rajzolja meg az ajtó új változatát.
2. Írja be: `B`, majd nyomja meg az {{key:Enter}} billentyűt, és írja be: `DOOR-900`.
3. A `Block "DOOR-900" already exists. Redefine it?` kérésnél írja be: `Y`, majd nyomja meg az {{key:Enter}} billentyűt.
4. Adja meg az alappontot, és jelölje ki az új objektumokat, ahogy az előbb.

A DOOR-900 minden hivatkozása most már az új változatot mutatja.

Vagy szerkessze magát a blokkot: a {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokk szerkesztése}} ({{cmd:BEDIT}}) önmagában megnyitja, a {{ui:Blokk mentése}} gombbal pedig visszamenti. Lásd: [Blokkattribútumok](topic:attributes#change-a-block-the-block-editor).

## Blokkok megszámlálása és kimutatás exportálása

Írja be a {{cmd:COUNT}} parancsot (vagy {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Blokkok megszámlálása}}), majd:

- kattintson egy ajtóra: ebben a térben minden ajtó kijelölődik, az előzmények pedig megadják, hány van itt és az egész rajzban;
- vagy nyomja meg az {{key:Enter}} billentyűt: az előzmények felsorolják az összes blokkot a darabszámukkal, a legtöbbtől kezdve;
- vagy írja be: `E`, majd `C` a darabszámok CSV-jéhez (a modellben, a rajzlapokon és összesen), vagy `A` a hivatkozásonként egy sorhoz a rétegükkel, pozíciójukkal, elforgatásukkal és minden attribútumértékükkel — ez egy kimutatás, amelyet táblázatkezelőben lehet megnyitni.

A névtelen blokkok (méretek, táblázatok) és a más blokkokon belüli hivatkozások nem számítanak bele. A képletre hasonlító cellák (`=`, `+`, `-`, `@`) elé `'` kerül, hogy a táblázatkezelő szövegként mutassa őket.

## Felbontás és tisztítás

- {{cmd:EXPLODE}} (`X`) a kijelölt blokkhivatkozást újra különálló objektumokká alakítja. A definíció megmarad.
- {{cmd:PURGE}} (`PU`) eltávolítja azokat a blokkdefiníciókat, amelyeket már semmi sem használ. Az előzmények megadják, hányat távolított el.

## Blokknevek

A név legfeljebb 255 karakter lehet, tartalmazhat szóközt, de nem kezdődhet csillaggal, és nem tartalmazhatja a `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` jeleket vagy a gravist. DXF R12 mentésekor a nevek nagybetűsek lesznek; a betűktől, számjegyektől, a `$`, `_` és `-` jelektől eltérő karakterek `_`-ra cserélődnek, a nevek pedig 31 karakterre rövidülnek. Az előzmények megadják, hány név változott. A nagybetűs, számjegyekből és kötőjelekből álló rövid nevek, mint a `DOOR-900`, változatlanok maradnak. A mentett DWG úgy őrzi meg a neveket, ahogy beírta, kis- és nagybetűkkel; csak a DWG által nem engedélyezett karakterek változnak (a `|` karakterből `$0$` lesz, a többi `_`).

## Blokk vagy objektumok külön fájlba írása

Írja be: `W` ({{cmd:WBLOCK}}), majd válassza az **Objektumok**, a **Blokk** vagy a **Teljes rajz** lehetőséget. Az eredmény egy új DWG vagy DXF fájl, amely csak az általa használt rétegeket, stílusokat és blokkokat tartalmazza, az alappontja pedig a koordinátarendszer kezdőpontja lesz. Az objektumok esetén megtarthatja őket, blokkká alakíthatja vagy törölheti a jelenlegi rajzból.

## Gyakori hibák

- **A blokk messze került a keresztszáltól.** Az alappont nem az objektumokon volt. Készítse újra a blokkot úgy, hogy az alappont egy sarkon vagy zsanéron legyen.
- **„Nincs kijelölt objektum; nem készült semmi.”** Az {{key:Enter}} billentyűt a kijelölés előtt nyomta meg.
- **„Ebben a rajzban még nincs blokk: az `F` egy fájlból, az `L` a könyvtárból szúr be egyet (vagy készítsen egyet a BLOCK paranccsal).”** Írja be: `F`, ha blokkot szeretne hozni másik rajzból, vagy `L` a könyvtárból. Lásd: [Beszúrás fájlból vagy a könyvtárból](topic:insert-from-file-and-library).
- **„A nézetablak nem kerülhet blokkba.”** A nézetablakok kereteit ne vegye a kijelölésbe.
