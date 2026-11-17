---
title: Mozgatás, másolás, forgatás, léptékezés, tükrözés, nyújtás és sokszorozás
summary: Rendezzen el bútorokat egy szobában az alapvető módosító parancsokkal, alappontokkal, begépelt távolságokkal és visszavonással.
keywords: mozgatás, másolás, forgatás, léptékezés, tükrözés, nyújtás, sokszorozás, egyesítés, matchprop, tulajdonságok egyeztetése, festő, arrayrect, arraypolar, polár sokszorozás, törlés, felbontás, visszavonás, ismétlés, alappont, elmozdulás, módosítás, igazítás, elosztás, sorba rendezés, egyenletes térköz
from: 8eaeee6c
---

## Amit elkészít

Egy asztal, amelynek körül egy széket másol, elforgat, tükröz és átméretez. Közben ezeket a parancsokat használja: {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} és {{cmd:UNDO}}.

## A darabok megrajzolása

1. Írja be a `REC` parancsot, és nyomja meg az {{key:Enter}}t. Írja be a `0,0` értéket, és nyomja meg az {{key:Enter}}t. Majd írja be az `@1800,900` értéket, és nyomja meg az {{key:Enter}}t. Ez az asztal.
2. Írja be a `REC` parancsot, és nyomja meg az {{key:Enter}}t. Írja be a `300,-700` értéket, és nyomja meg az {{key:Enter}}t. Majd írja be az `@450,450` értéket, és nyomja meg az {{key:Enter}}t. Ez egy szék, az asztal alatt.
3. Kattintson a {{ui:Extents}} gombra.

## Mozgatás: alappont, majd második pont

A mozgatás, másolás, forgatás és léptékezés mindig egy **alappontból** indul: ez az a pont, amelyet a művelet magával visz, vagy amely körül elfordul.

1. Kattintson a székre a kijelöléséhez.
2. Írja be az `M` parancsot, és nyomja meg az {{key:Enter}}t. Az előzmények ezt írják: `1 találat`.
3. Az `Adja meg az alappontot` kérésnél fogjon rá a szék bal felső sarkára (végpont), majd kattintson.
4. Az `Adja meg a második pontot` kérésnél írja be az `@0,200` értéket, és nyomja meg az {{key:Enter}}t.

A szék 200-zal feljebb mozdul, közelebb az asztalhoz.

:::tip
Az `Adja meg az alappontot` kérésnél írja be a `D`-t, ha helyette elmozdulást szeretne megadni: a CadCraft ekkor az `Adja meg az elmozdulást` kérdést teszi fel, és Ön beírja, mennyit menjen vízszintesen és felfelé, például `0,200` (a `@` nem kell).
:::

## Másolás tetszés szerint többször

1. Kattintson a székre.
2. Írja be a `CO` parancsot, és nyomja meg az {{key:Enter}}t.
3. Fogjon rá a szék bal alsó sarkára, és kattintson alappontként.
4. Írja be az `@600,0` értéket, és nyomja meg az {{key:Enter}}t. Egy másolat jelenik meg 600-zal jobbra.
5. Írja be újra az `@600,0` értéket, és nyomja meg az {{key:Enter}}t. Egy második másolat jelenik meg az eredetitől 1200-zal jobbra.
6. A parancs befejezéséhez nyomja meg az {{key:Enter}}t.

A {{cmd:COPY}} addig fut, amíg meg nem nyomja az {{key:Enter}}t. Minden másolat az alappont és a megadott pont távolságával kerül a helyére. Az `@` pont az utoljára megadott ponttól számít, ami az első másolat után az a másolat pontja, így a kétszer megadott `@600,0` 600-nál és 1200-nál ad másolatot. Írja be a `U`-t, és nyomja meg az {{key:Enter}}t, hogy visszavonja az utolsó másolatot anélkül, hogy kilépne a parancsból.

Az asztal alatt három szék látható egy sorban.

:::tip
A {{cmd:COPY}} egy rajzon belüli másolásra való, alappont alapján elhelyezve. Objektumok másik rajzba vagy lapra vitelére, illetve későbbi beillesztésre használja a vágólapot: {{key:Mod+C}}, majd {{key:Mod+V}}. A {{key:Mod+D}} egy másolatot készít, amely az egérmutatóval együtt mozog. Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).
:::

## A sor tükrözése a másik oldalra

1. Húzzon keresztező ablakot (jobbról balra) a három szék fölé úgy, hogy ne érintse az asztalt.
2. Írja be a `MI` parancsot, és nyomja meg az {{key:Enter}}t.
3. Az `Adja meg a tükrözési tengely első pontját` kérésnél fogjon rá az asztal bal oldalának felezőpontjára, és kattintson.
4. Az `Adja meg a tükrözési tengely második pontját` kérésnél fogjon rá az asztal jobb oldalának felezőpontjára, és kattintson.
5. Az `Törölje a forrásobjektumokat? [Igen (Y)/Nem] <N>` kérésnél nyomja meg az {{key:Enter}}t, hogy megtartsa őket.

Az asztal alatt három szék látható, az asztal fölött pedig három tükrözött szék. A tükrözött kijelölés szövege olvasható marad: tükrözve kerül a helyére, de nem fordítva íródik.

## Szék forgatása

1. Kattintson az asztal alatti, legjobbra lévő székre.
2. Írja be a `RO` parancsot, és nyomja meg az {{key:Enter}}t.
3. Fogjon rá a szék jobb alsó sarkára, és kattintson alappontként.
4. Írja be a `90` értéket, és nyomja meg az {{key:Enter}}t.

A szék 90 fokkal fordul el az óramutató járásával ellentétesen az alappont körül. A negatív szög az óramutató járásával megegyező irányba forgat. Beírás helyett kattintással is megadhat egy második pontot: a szöget az alappontból a megadott pontig mérjük.

## Az asztal léptékezése

1. Jelölje ki az asztalt.
2. Írja be az `SC` parancsot, és nyomja meg az {{key:Enter}}t.
3. Fogjon rá az asztal bal alsó sarkára, és kattintson alappontként.
4. Írja be az `1.2` értéket, és nyomja meg az {{key:Enter}}t.

Az asztal 20%-kal nagyobb lesz, az alappontból kifelé nő. Az 1-nél kisebb tényező kisebbé teszi.

:::note
Ha a léptéktényező beírása helyett pontra kattint, a tényező az alappont és a kattintott pont távolsága lesz. Egy rajzegységnyi távolságra kattintva 1-es tényező adódik. Általában a szám beírása a kívánatos.
:::

## Visszavonás és ismétlés

- A {{key:Mod+Z}}, a {{ui:Undo}} gomb vagy a `U`, majd {{key:Enter}} visszavonja az utolsó parancsot. Egy teljes parancs egy lépés: ha egy {{cmd:COPY}} öt másolatot készített, a visszavonás mind az ötöt eltávolítja.
- A {{key:Mod+Y}}, a {{key:Mod+Shift+Z}}, a {{ui:Redo}} gomb vagy a `REDO` visszahozza.
- Az előzmények megmondják, mi lett visszavonva („Visszavonva: COPY”).

A CadCraft az utolsó 500 lépést tárolja. A rétegbeállítások (be, befagyasztás, zárolás, szín) beállítások, nem szerkesztések, ezért nem vonhatók vissza.

## Szoba szélesítése nyújtással

A {{cmd:STRETCH}} (`S`, vagy {{ui:Stretch}}) csak a keresztező ablakon belül lévő részeket mozgatja: a benne lévő sarkok és vonalvégek elmozdulnak, minden más helyben marad, így a szoba szélesedik, nem pedig mozog.

1. Írja be az `S` parancsot, és nyomja meg az {{key:Enter}}t.
2. Húzzon ablakot jobbról balra a jobb oldali fal fölé úgy, hogy lefedje a fal sarkait és a hozzá csatlakozó vonalak végeit.
3. Nyomja meg az {{key:Enter}}t.
4. Kattintson egy alappontot, majd írja be az `@600,0` értéket, és nyomja meg az {{key:Enter}}t.

A téglalap 600-zal szélesebb; a falon végződő vonalak továbbra is a falon végződnek. Egy ív, amelynek az egyik vége a területen belül van, megtartja a magasságát; a körök és szövegek akkor mozognak, ha középpontjuk vagy beszúrási pontjuk a területen belül van; a méretvonal az új hosszát mutatja. Egyenként kijelölt objektumok, ablak nélkül, egyszerűen mozognak.

A kijelölést előre is elvégezheti: parancs futtatása nélkül húzzon keresztező ablakot (vagy keresztező lasszót) a fal fölé, majd írja be az `S`-t. A {{cmd:STRETCH}} ezt a kijelölést veszi át, és az ablakai által tartalmazott részeket nyújtja, mintha az ő kérdésénél húzta volna át őket.

## Sokszorozás: sorok és oszlopok, vagy egy középpont körül

A {{cmd:ARRAY}} (`AR`, vagy {{ui:Array}}) a kijelölést rácsban vagy körben másolja.

1. Jelöljön ki egy széket, írja be az `AR` parancsot, és nyomja meg az {{key:Enter}}t. A Téglalap (R) lehetőséghez nyomja meg az {{key:Enter}}t.
2. Megjelenik egy előnézet 4 oszloppal és 3 sorral. Írja be a `COU`-t, nyomja meg az {{key:Enter}}t, majd írja be az `5`-öt az oszlopokhoz és a `2`-t a sorokhoz.
3. Írja be az `S`-t, nyomja meg az {{key:Enter}}t, majd írja be a `600` értéket az oszlopok közé és a `-900` értéket a sorok közé (a negatív érték lefelé visz).
4. A másolatok elkészítéséhez nyomja meg az {{key:Enter}}t.

Ha székek gyűrűjét szeretné az asztal körül, válassza a `PO` (Polár) lehetőséget, kattintson az asztal középpontjára, majd állítsa be az `I` (elemek), az `F` (kitöltési szög: 360 az egész körbe, 180 a félkörhöz) és a `ROT` (forduljanak-e a másolatok a középpont felé) értékeket. A {{cmd:ARRAYRECT}} és az {{cmd:ARRAYPOLAR}} kihagyja a kérdést.

## Darabok egyesítése egy polivonalba

{{cmd:JOIN}} (`J`, vagy {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): jelöljön ki olyan vonalakat, íveket és nyitott polivonalakat, amelyek végei találkoznak, majd nyomja meg az {{key:Enter}}t. Egy polivonallá válnak, amely zárt, ha teljes kört alkotnak, és így egy lépésben eltolható. Az egy egyenesen fekvő vonalak egy vonallá válnak, még ha közöttük rés is van; ugyanazon kör ívei egy ívvé vagy a körré válnak.

## Tulajdonságok egyeztetése

{{cmd:MATCHPROP}} (`MA`, vagy {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): kattintson arra az objektumra, amelynek megjelenését szeretné, majd jelölje ki a módosítandó objektumokat, és nyomja meg az {{key:Enter}}t. Átveszik a rétegét és a színét; a szöveg a magasságát, a méretvonal a méreteit, a sraffozás a mintáját. A második kérdésnél írja be az `S` (Beállítások) betűt, ha ezek bármelyikét ki szeretné kapcsolni.

## Objektumok igazítása

**Pontok szerint.** {{cmd:ALIGN}} (`AL`, vagy {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): jelöljön ki objektumokat, nyomja meg az {{key:Enter}}t, majd kattintson egy pontra rajtuk (a forrás), majd arra a helyre, ahová kerülnie kell (a cél).

- Egy pár elmozdítja őket. Az `Adja meg a második forráspontot` kérésnél nyomja meg az {{key:Enter}}t, ha itt meg akar állni.
- Két pár elforgatja őket is, így a két forráspont közötti egyenes a két célpont közötti egyenes mentén fekszik. A CadCraft ezután megkérdezi: `Léptékezi az objektumokat az igazítási pontok alapján?`. Az Igen (Y) ezeket is ennyivel nagyobbá vagy kisebbé teszi.
- Egy harmadik pár tükrözi őket, ha a két pontjuk az egyenes ellentétes oldalán van.

**Élek és térközök.** A {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (vagy `ALIGNPANEL`) egy kis panelt nyit meg a rajz fölött. Jelöljön ki objektumokat, majd:

- az {{ui:Align to}} alatt válassza ki, mihez igazítson (az egész kijelölés, az első vagy az utolsó kijelölt objektum, vagy egy kattintott pont), és kattintson a {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} vagy {{ui:Bottom}} gombra;
- vagy válassza az {{ui:Equal gaps}} vagy az {{ui:Equal centres}} lehetőséget, és kattintson az {{ui:Across}} vagy az {{ui:Up and down}} gombra: a két szélső objektum helyben marad, a többit egyenletesen elosztja köztük (legalább három objektum kell).

Minden kattintás egy visszavonási lépés, a kijelölés megmarad, így másikat is kipróbálhat. Minden objektum a befoglaló téglalapja alapján számít, az UCS-ben, ha az be van állítva. A parancssorban ugyanezt a {{cmd:ALIGNTO}} és a {{cmd:DISTRIBUTE}} parancs adja.

## Törlés és felbontás

- A {{cmd:ERASE}} (`E`, vagy {{key:Delete}}) eltávolítja a kijelölt objektumokat.
- Az {{cmd:EXPLODE}} (`X`) egy polivonalat vonalakra és ívekre bont, egy blokkhivatkozást az objektumaira, egy méretvonalat pedig vonalakra, nyílhegyekre és szövegre. A felbontott méretvonalak már nem mérik magukat.

## Gyakori hibák

- **Távolság megadása `@` nélkül a második pontnál.** A `600,0` az abszolút 600,0 pont, nem „600-zal jobbra”. Használja az `@600,0`-t, vagy csak a `600`-at, ha a kereszt jó irányba mutat.
- **A forgatás rossz irányba ment.** A pozitív szögek az óramutató járásával ellentétesen forognak.
- **A visszavonás a vártnál többet távolított el.** Egy visszavonás az utolsó teljes parancsot vonja vissza, beleértve az általa készített összes másolatot.
- **A parancs nem kérte az objektumok kijelölését.** Az objektumok már ki voltak jelölve, ezért azokat használta. Előbb nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve.
