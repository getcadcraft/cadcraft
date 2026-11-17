---
title: Objektumok kijelölése
summary: Objektumok kiválasztása egyenként, ablakkal vagy keresztezéssel, parancs előtt vagy közben, és objektumok eltávolítása a kijelölésből.
keywords: kijelölés, ablak, keresztezés, főnév-ige, kiválasztás, összes, utolsó, előző, kerítés, eltávolítás, hozzáadás, tab, ciklus, átfedő, qselect, gyorskijelölés, szűrő, hasonlók kijelölése, selectsimilar, shift, kijelölés megszüntetése, ctrl+a, pickfirst
from: 676508c7
---

## Mit fog megtanulni

Hogyan válassza ki azokat az objektumokat, amelyekre a parancs hat. A CadCraftnak kétféle munkamódja van, mindkettő megfelelő:

- **Először a kijelölés, azután a parancs** (főnév-ige). Jelöljön ki objektumokat, majd írja be az `M`-et a mozgatáshoz. A parancs átveszi a kijelölést, és azonnal a következő kérdésre lép.
- **Először a parancs, azután a kijelölés** (ige-főnév). Írja be az `M`-et; a parancs megkérdezi: `Jelölje ki az objektumokat:`; jelöljön ki, majd nyomja meg az {{key:Enter}} billentyűt.

## Egyszerre egy objektum kijelölése

1. Ha nincs parancs futásban, kattintson egy vonalra. Kiemelődik, és megjelennek a fogópontjai (kis négyzetek). A jobb oldali panel megjeleníti a tulajdonságait.
2. Kattintson egy másik objektumra. Hozzáadódik a kijelöléshez.
3. Tartsa lenyomva a {{key:Shift}} billentyűt, és kattintson egy kijelölt objektumra. Kikerül a kijelölésből.
4. Nyomja meg az {{key:Esc}} billentyűt. Semmi sincs kijelölve.

## Ablak és keresztezés

Kattintson egyszer egy üres helyre, mozgassa, majd kattintson újra: téglalap keletkezik. A lenyomva húzással ehelyett szabadkézi lasszó rajzolódik, ugyanazzal a két fajtával (lásd: [Lasszós kijelölés](topic:lasso-selection); a Beállítások úgy is beállíthatók, hogy a húzás téglalapot rajzoljon). Az, hogy mely objektumokat kapja, az iránytól függ:

| Mozgatás | Doboz | Kijelöli |
|---|---|---|
| Balról jobbra | Ablak | Csak a dobozon **teljesen belül** lévő objektumokat |
| Jobbról balra | Keresztezés | A dobozon belül lévő objektumokat **és** azokat, amelyeket érint |

1. Rajzoljon néhány átfedő vonalat és kört.
2. Kattintson egy üres helyre néhány objektum bal oldalán, mozgasson jobbra, majd kattintson újra. Csak a teljesen belül lévő objektumok lesznek kijelölve.
3. Nyomja meg az {{key:Esc}} billentyűt.
4. Kattintson egy üres helyre a jobb oldalon, mozgasson balra néhány objektumon át, majd kattintson újra. A doboz által érintett minden objektum kijelölődik.
5. Tartsa lenyomva a {{key:Shift}} billentyűt, és rajzoljon dobozt vagy lasszót néhány kijelölt objektum fölé. Kikerülnek a kijelölésből.

## Kijelölés, majd parancs futtatása

1. Jelöljön ki két kört.
2. Írja be az `M`-et, és nyomja meg az {{key:Enter}} billentyűt.

Az előzmények ezt írják: `2 objektum megtalálva`, a prompt pedig egyenesen a `Adja meg az alappontot` kérdésre ugrik. Fejezze be a mozgatást (lásd: [Mozgatás, másolás, forgatás, léptékezés és tükrözés](topic:modify-objects)).

Amikor a parancs véget ér, a kijelölés törlődik, így a következő parancs tisztán indul.

Ezek a parancsok veszik át így a kijelölést: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} és {{cmd:LIST}}. Az {{cmd:OFFSET}}, a {{cmd:FILLET}} és a {{cmd:CHAMFER}} mindig egyesével kéri az objektumok kijelölését; a {{cmd:TRIM}} és az {{cmd:EXTEND}} egy kijelölést vagy a darabokon át húzott útvonalat fogad (lásd: [Vágás és nyújtás](topic:trim-and-extend)).

## Parancs futtatása, majd kijelölés

1. Győződjön meg róla, hogy semmi sincs kijelölve ({{key:Esc}}).
2. Írja be az `E`-t, és nyomja meg az {{key:Enter}} billentyűt. A prompt ezt írja: `Jelölje ki az objektumokat:`.
3. Kattintson objektumokra, vagy húzzon ablakokat és keresztezéseket. Az előzmények minden kijelölést számolnak (`1 objektum megtalálva`, `3 objektum megtalálva`).
4. A kijelölés befejezéséhez nyomja meg az {{key:Enter}} vagy a {{key:Space}} billentyűt, vagy kattintson jobb egérgombbal.

Az objektumok törlődnek, az előzmények pedig megmondják, hányat.

A `Jelölje ki az objektumokat:` promptnál ezeket is beírhatja:

- `ALL`, majd {{key:Enter}}: minden olyan objektum, amelyet a nyitott lapon szerkeszthet.
- `L` (Utolsó), majd {{key:Enter}}: a legutóbb rajzolt objektum.
- `P` (Előző): az utolsó parancs által használt objektumok, ha még megvannak.
- `F` (Kerítés): kattintson vagy írjon be pontokat egy vonal mentén; minden objektum, amelyet a vonal keresztez, hozzáadódik. A kerítés befejezéséhez nyomja meg az {{key:Enter}} billentyűt; a `U` (Visszavonás) visszavonja az utolsó pontját.
- `W` (Ablak) vagy `C` (Keresztezés): két sarok, bármerre húz.
- `R` (Eltávolítás): ezentúl a kattintások, ablakok és kerítések **kivesznek** objektumokat. A prompt ezt írja: `Jelölje ki az eltávolítandó objektumokat:`. Az `A` (Hozzáadás) visszakapcsol.
- `?`: ezek listája az előzményekben.

Ezek a lehetőségek nem jelennek meg a promptban, ahogy az AutoCAD-ben sem.

## Több egymás fölötti objektum közül kiválasztás

Ahol az objektumok átfedik vagy érintik egymást, a kattintás a legközelebbit veszi. Másik kiválasztásához:

1. Tartsa mozdulatlanul a mutatót a helyen.
2. Nyomja meg a {{key:Tab}} billentyűt. A következő ott lévő objektum kiemelődik, az állapotsor pedig megmondja, melyik („2 a 3-ból: Vonal a Walls rétegen”).
3. Nyomja meg ismét a {{key:Tab}} billentyűt, amíg a kívánt objektum nincs kiemelve, majd kattintson mozgatás nélkül.

A mutató mozgatásakor újra kezdődik. Ez parancs nélkül is működik, a `Jelölje ki az objektumokat:` promptnál, és mindenhol, ahol a parancs egy objektum kijelölését kéri.

## Kijelölés szabály szerint: Gyorskijelölés

A {{cmd:QSELECT}} (`QS`, vagy {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Gyorskijelölés}}) minden olyan objektumot kijelöl, amely megfelel egy szabálynak, például minden 50-nél kisebb sugarú kört vagy a DOOR-900 nevű blokkhivatkozást.

1. Nyissa meg a {{ui:Gyorskijelölés}} párbeszédpanelt.
2. Válassza az {{ui:Objektumtípus}} lehetőséget (a lista minden típust megszámol), majd a {{ui:Tulajdonság}} lehetőséget: {{ui:Réteg}}, {{ui:Szín}}, és egyes típusoknál {{ui:Hossz}}, {{ui:Sugár}}, {{ui:Terület}}, {{ui:Szövegmagasság}}, {{ui:Szövegtartalom}}, {{ui:Blokknév}} vagy {{ui:Sraffozási minta}}.
3. Válassza a {{ui:Operátor}} és az {{ui:Érték}} lehetőséget. A `*` helyettesítő karakterekkel illeszt (`DOOR-*`); az {{ui:Összes kijelölése}} az adott típus minden objektumát kiválasztja. Az alul lévő szám mutatja, hány egyezik, ahogy választ.
4. {{ui:Hogyan alkalmazza}}: az egyezőket vagy mindent mást vegye be. Az {{ui:Alkalmazás erre}} {{ui:Jelenlegi kijelölés}} szűkíti a korábbi kijelölést; a {{ui:Hozzáfűzés a jelenlegi kijelöléshez}} hozzáadja.
5. Kattintson a {{ui:Kijelölés}} gombra. Ezután futtassa a kívánt parancsot: az a kijelölést használja.

## Hasonlók kijelölése

Jelöljön ki egy vagy több objektumot, és írja be a {{cmd:SELECTSIMILAR}} parancsot (`SIM`), vagy válassza a {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Hasonlók kijelölése}} lehetőséget. Kijelölődik minden azonos típusú, azonos rétegen és azonos színű objektum; a blokkhivatkozásoknak ugyanaz a blokk is kell, a sraffozásoknak ugyanaz a minta. Az `SE`-t a `Jelölje ki az objektumokat` promptnál írja be, ha meg akarja határozni, mi legyen egyező.

## Kijelölés most, használat később

Írja be a `SELECT`-et, és nyomja meg az {{key:Enter}} billentyűt, válasszon ki objektumokat a fenti módok bármelyikével, majd nyomja meg az {{key:Enter}} billentyűt. Kijelölve maradnak a következő parancshoz, a `P` pedig később, a `Jelölje ki az objektumokat:` promptnál újra kiválasztja őket.

## Minden kijelölése

Ha nincs parancs futásban, nyomja meg a {{key:Mod+A}} billentyűt, vagy válassza az eszköztár {{ui:Szerkesztés}} › {{ui:Továbbiak}} menüjének {{ui:Összes kijelölése}} elemét, hogy kijelöljön minden szerkeszthető objektumot a nyitott lapon. Ha a parancssorba már írt valamit, a {{key:Mod+A}} ehelyett azt a szöveget jelöli ki: előbb az {{key:Esc}} billentyűvel törölje. A `Jelölje ki az objektumokat:` promptnál írja be: `ALL`. A {{ui:Kijelölés megszüntetése}} ugyanabban a menüben, vagy az {{key:Esc}}, törli a kijelölést.

:::tip
Ha inkább azt szeretné, hogy minden kattintás felváltsa a kijelölést ({{key:Shift}}-tel pedig hozzáadjon), állítsa a [CadCraft beállításai](topic:settings) között az {{ui:Objektumokra kattintás}} beállítást {{ui:Felváltja a kijelölést}} értékre.
:::

## Amit nem lehet kijelölni

- A **kikapcsolt**, **befagyasztott** vagy **zárolt** rétegen lévő objektumok. A zárolt objektumok láthatók maradnak, és objektumfogással még lehet rájuk illeszkedni, de nem lehet őket kijelölni vagy módosítani.
- Rajzlapfülön a nézetablakban látható modell. A rajzlap saját objektumait jelöli ki (a rajzfejet, megjegyzéseket, a nézetablakok kereteit). A modell szerkesztéséhez lépjen a {{ui:Modell}} lapra.

## Gyors törlés

Jelöljön ki objektumokat, majd nyomja meg a {{key:Delete}} billentyűt (vagy a {{key:Backspace}} billentyűt, ha a parancssornak nincs kurzora). Mac billentyűzeten a delete feliratú billentyű működik, miután a rajzba kattintott; amíg a parancssornak van kurzora, nyomja meg együtt az fn és a delete billentyűt. Ez a kijelölésen futtatja a {{cmd:ERASE}} parancsot. Ha nem történik semmi, valamit beírt a parancssorba: nyomja meg az {{key:Esc}} billentyűt, vagy írja be az `E`-t, és nyomja meg az {{key:Enter}} billentyűt.

## Gyakori hibák

- **Az ablak túl keveset vett ki.** Balról jobbra húzott, ami csak a teljesen belül lévőket veszi. Keresztezéshez húzzon jobbról balra.
- **Üres helyre kattintás dobozt indított.** Egy kattintás üres helyre ablakot indít; a második kattintás befejezi. Az elvetéshez nyomja meg az {{key:Esc}} billentyűt, vagy kattintson jobb egérgombbal.
- **Üres helyre kattintás elengedte a kijelölést.** Így történik, kivéve ha a {{key:Shift}} billentyűt tartja lenyomva. Ahhoz, hogy egy ilyen kattintás megtartsa a kijelölést, és csak az {{key:Esc}} törölje, állítsa a [CadCraft beállításaiban](topic:settings#clicking-an-empty-spot) a {{ui:Kattintás üres helyre}} értéket {{ui:Megtartja a kijelölést}} értékre.
- **A parancs olyan objektumokat használt, amelyeket nem szándékozott.** Valami még ki volt jelölve, amikor elindította. A parancs előtt nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve.
- **Parancs után nincs kijelölés.** Ez szándékos: a befejezett parancs törli a kijelölést.
