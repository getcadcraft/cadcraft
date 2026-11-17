---
title: A Tulajdonságok panel
summary: A kijelölt objektumok minden tulajdonságának megtekintése és módosítása, akár sokat egyszerre: koordináták Z-vel, méretek, szöveg, méretezési beállítások, átlátszóság és más. A mezők kifejezéseket és mértékegységes hosszakat fogadnak.
keywords: összesítések, teljes hossz, teljes terület, összeg, kijelölés hossza, tulajdonságok, tulajdonságpanel, ctrl+1, pr, ch, mo, ddmodify, változó, gyors kijelölés, pickadd, koordináták, z, magasság, vastagság, átlátszóság, anyag, hivatkozás, kifejezés, quickcalc, csúcs, méretezési stílus, tűrés, tizedesjegyek
from: 10d6a829
---

## Mit fog megtudni

Hogyan nyissa meg a Tulajdonságok panelt, hogyan módosítson egy vagy száz objektumot egy lépésben, hogyan adjon meg pontos koordinátákat (Z-vel), hogyan használjon kifejezéseket és mértékegységeket bármely számmezőben, és mit mutat az egyes objektumtípusok.

## Megnyitás

A panel a jobb oldalon található. Az előtérbe hozáshoz:

- Nyomja meg a {{key:Mod+1}} billentyűt, vagy írja be a {{cmd:PROPERTIES}} (vagy `PR`, `CH`, `MO`) parancsot.
- Kattintson duplán egy objektumra (a szöveg és a többszörös vezetővonal a saját szövegszerkesztőjét nyitja meg).

A panel más panelekhez hasonlóan mozgatható: húzza a fogantyúját a bal, jobb vagy alsó oldalhoz a rögzítéshez, vagy dobja a rajz fölé, hogy lebegő legyen (lásd [Panelek elrendezése és második monitor használata](common:arrange-panels)).

### Összecsukás

A panel jobb felső sarkában lévő rögzítőgomb az **automatikus elrejtést** kapcsolja be: a panel a jobb szélen egy csíkká csukódik, és a rajz több helyet kap. Mutasson a csíkra (vagy nyomja meg a {{key:Mod+1}} billentyűt), és az a rajz fölé nyílik; ha eltávolítja a mutatót, ismét összecsukódik. A gombra kattintva újra rögzítse, hogy nyitva maradjon. A {{cmd:PROPERTIESCLOSE}} is összecsukja.

## Szakaszok

A tulajdonságok összecsukható csoportokban vannak: **Általános**, **Geometria**, **Szöveg**, **Vonalak és nyilak**, **Illesztés**, **Elsődleges mértékegységek**, **Alternatív mértékegységek**, **Tűrések**, **Minta**, **Egyéb**, és blokkoknál **Attribútumok** és **Könyvtári elem**. Kattintson a szakasz nevére az összecsukáshoz vagy kinyitáshoz; a CadCraft megjegyzi, melyeket csukta össze.

Húzza a nevek és az értékek közötti vékony vonalat, hogy a nevek szélesebbek vagy keskenyebbek legyenek. Kettős kattintásra visszaáll. Billentyűzettel fókuszálja, és használja a nyílbillentyűket.

## Érték módosítása

1. Kattintson egy vonalra. A fejléc „Vonal”-t mutat.
2. Kattintson a {{ui:Hossz}} mezőbe. Szerkesztés közben a mező a teljes értéket mutatja, nem a kerekítettet.
3. Írja be a `2500` értéket, és nyomja meg az {{key:Enter}} billentyűt. A vonal 2500 hosszú lesz, megtartva a kezdőpontját és szögét.

Az {{key:Enter}} vagy egy másik helyre kattintás alkalmazza az értéket; az {{key:Esc}} visszaállítja a régit. Minden módosítás egy visszavonási lépés.

### Kifejezések és mértékegységek

Minden számmezőbe több is beírható, mint egy egyszerű szám:

| Beírt érték | Eredmény |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (hüvelykben, láb és hüvelyk mértékegységű rajzban) |
| `900mm`, `3.5m`, `2ft` | A rajz egységeire átváltva |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (szögmezőknél) |
| `0.5r`, `100g` | Radiánok és grádok, fokban |

Mértékegységes hossz csak akkor működik, ha a rajznak van mértékegysége: először állítsa be a {{ui:Mértékegységek}} mezőt az {{ui:Új objektumok}} alatt (semmi nincs kijelölve). A hibás bejegyzést a panel alatti megjegyzés jelzi, és semmi nem változik; soha nem mentődik 0-ként. Függvények: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; a szögek fokban.

## Sok objektum egyszerre módosítása

1. Jelöljön ki több objektumot, például 8 vonalat és 4 méretet.
2. A fejléc „12 objektum”-ot mond, a tetején lévő lista pedig a **Mind (12)**, **Vonal (8)** és **Méret (4)** lehetőségeket kínálja.
3. A **Mind** mutatja, mije van minden objektumnak (réteg, szín, vonaltípus…). Válassza a **Méret (4)**-et a méretbeállítások megtekintéséhez.
4. Módosítson egy értéket, például a {{ui:Tizedeshelyek}} mezőt `1`-re.

Mind a négy méret megváltozik, egy visszavonási lépésben. A **Változó** feliratú mező azt jelenti, hogy az objektumok eltérnek; egy érték beírása mindegyikre beállítja. A zárolt rétegeken lévő objektumok érintetlenek maradnak, és a megjegyzés megmondja, hány van.

## Kijelölés összesítése

Több objektum kijelölésekor a tetején lévő {{ui:Összesítések}} szakasz megmondja:

- **Objektumok**: fajtánként hány, például „8 vonal, 2 polivonal, 1 kör”.
- **Teljes hossz**: a vonalak, ívek és polivonalak összege (a spline-ok is beleszámítanak), és hány objektumra vonatkozik.
- **Teljes terület**: a zárt objektumok összege: körök, teljes ellipszisek, zárt polivonalak és sraffozások (a sraffozás lyukai levonódnak).

Ezek a rajz hosszmértékformátumában jelennek meg (láb és hüvelyk, ha azt használja; a területek akkor négyzethüvelykben és négyzetlábban). Az állapotsor ugyanazt a hosszt és területet mutatja, amikor objektumok vannak kijelölve; a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:A kijelölés hossza és területe}} › {{ui:Elrejtve}} ezt kikapcsolja. Egy objektumnál a {{ui:Geometria}} a saját hosszát és területét mutatja, mint korábban.

## Koordináták

Minden pont **X**, **Y** és **Z** értéket mutat: vonalak kezdő- és végpontja, középpontok, beszúrási pontok, szövegpozíciók, az aktuális polivonal-csúcs. A vonalak emellett **Delta X**, **Delta Y** és **Delta Z** értékeket mutatnak (csak olvasható). A polivonalaknak és sraffozásoknak van **Magassága** (egy Z az egész objektumra).

A pont neve melletti célkereszt-gomb lehetővé teszi, hogy a rajzon válassza ki: kattintson rá, majd az új pozícióra (a fogások működnek). Az értékek világkoordináták.

## Általános

| Mező | Mit jelent |
|---|---|
| {{ui:Réteg}}, {{ui:Szín}}, {{ui:Vonaltípus}}, {{ui:Vonaltípus-lépték}}, {{ui:Vonalvastagság}} | Mint a rétegek panelen; a {{ui:Rétegről}} a rétegét követi |
| {{ui:Átlátszóság}} | Rétegről, blokkról, vagy 0–90% |
| {{ui:Vastagság}} | Mennyire nyúlnak ki a vonalak, körök, ívek, polivonalak, pontok és szövegek Z-irányban |
| {{ui:Anyag}} | Rétegről, blokkról, Globális, vagy a rajz által hozott név |
| {{ui:Plottolási stílus}} | Csak olvasható: a rajzok szín szerint plottolnak, a lap [plottolási stílustáblázatán](topic:plot-pdf#plot-style-tables) keresztül |
| {{ui:Hivatkozás}} | Az objektumhoz tartozó webcím |

## Mit mutat az egyes típus

| Kijelölt | Módosítható |
|---|---|
| Vonal | Kezdő és végpont X, Y, Z; hossz; szög |
| Kör | Középpont; sugár; átmérő; kerület; terület (mindegyik a sugarat állítja) |
| Ív | Középpont; sugár; kezdő- és végszög; teljes szög; húr (az ív hosszát és területét is mutatja) |
| Ellipszis | Középpont; fő- és melléksugár; sugárarány; főtengely szöge; kezdő- és végszög |
| Polivonal | A csúcsböngésző (lent); globális szélesség; magasság; zárt; zárt esetén terület (a középpontja körül méretez) |
| Szöveg | Tartalom; stílus; igazítás; magasság; forgatás; szélesség-tényező; ferdítési szög; meghatározott szélesség; sortávolság; annotatív; pozíció |
| Blokkhivatkozás | Beszúrási pont; forgatás; méretarány X, Y, Z és egységes méretarány; attribútumértékek |
| Sraffozás | Minta; méretarány; szög; origó; asszociatív; sziget-felismerés; háttérszín; magasság |
| Méret | Lásd lent |
| Többszörös vezetővonal | Szöveg; magasság; szélesség; szöveg oldala; nyílfej mérete; leszállási távolság; nyílfej pontja |
| Nézetablak | Méretarány; középpont és méret a lapon; nézetközéppont a modellben; be; kijelző zárolva |

### Polivonal-csúcsok

A {{ui:Jelenlegi csúcs}} megmutatja, melyik csúcshoz tartoznak az alatta lévő mezők. Használja a nyilakat, vagy írjon be egy számot, hogy másik csúcsra lépjen; nincs korlát a csúcsok számára. Minden csúcsnak van X, Y, kezdő- és végszakasz-szélessége, és a szakasz kezdő csúcsától induló kidomborodása (bulge) (0 = egyenes).

## Méretek

A méret megmutatja a **Méretezési stílusát**, mit mér, a pontjait és minden beállítását:

- **Vonalak és nyilak:** nyílfej mindkét végen, nyílméret, jelölés mérete, a méretvonal és hosszabbítóvonalak színe és vonalvastagsága, bármely fél vagy hosszabbítóvonal elrejtése, hosszabbítóvonal-eltolás és -hosszabbítás.
- **Szöveg:** felülírás (üresen hagyja a mért értéket; a `<>` a saját szövegében ezt jelöli), stílus, szín, magasság, eltolás, függőleges és vízszintes pozíció, mindig vízszintes, forgatás, háttérkitöltés.
- **Illesztés:** összméretarány, alapvonal-távolság, mi mozog, ha kevés a hely, és szövegmozgás.
- **Elsődleges mértékegységek:** formátum, tizedesjegyek, kerekítés, előtag, utótag, mérési léptéke, tizedesjel, vezető és záró nullák elnyomása; szögeknél a szögformátum és a tizedesjegyek.
- **Alternatív mértékegységek:** be vagy ki, formátum, tizedesjegyek, szorzó (25.4 hüvelykből milliméterré alakítja), kerekítés, előtag és utótag.
- **Tűrések:** nincs, szimmetrikus, eltérés, határok vagy alap, felső és alsó értékekkel, tizedesjegyekkel, magassággal és pozícióval.

Bármelyiknek a módosítása egy megnyitott méretnél eldobja a másik program által készített rajzát, és a CadCraft újra rajzolja.

:::note
A vízszintes szövegpozíció (az első vagy második hosszabbítóvonal mellett) és a vonal alatti szöveg lineáris és igazított méreteken rajzolódik; más méreteken megmarad és mentődik, de még nem rajzolódik. Az Illesztés-beállításai megmaradnak és mentődnek, de még nem rajzolódnak: a CadCraft a saját szabálya szerint helyezi el a szöveget (a vonal fölé, és kívülre, ha nem fér el).
:::

## Nincs kijelölés

Ha nincs semmi kijelölve, a panel ezt mutatja:

- **Új objektumok:** a réteg, szín, vonaltípus, vonalvastagság és szövegmagasság, amit az új objektumok kapnak; a rajz mértékegysége és hosszmértékformátuma; az aktuális réteg vonaltípusa és vonalvastagsága; az új méretek méretei. Lapon a lap neve, papírja és tájolása van elöl.
- **Nézet:** a képernyőn látható rész középpontja, magassága és szélessége. Írjon be egy értéket a nézet odamozgatásához.
- **Egyéb:** az UCS-ikon be vagy ki, az UCS (mindig Világ: a CadCraftnak még nincsenek felhasználói koordináta-rendszerei) és az annotatív léptékek.

## A felső gombok

| Gomb | Teszi |
|---|---|
| Szűrő | {{cmd:QSELECT}}: kijelölés típus és tulajdonság szerint |
| Mutató | {{cmd:SELECT}}: objektumok kijelölése a parancssorban |
| Plusz vagy 1 | Hogy egy kattintás hozzáadjon a kijelöléshez (plusz) vagy lecserélje (1); ugyanaz a beállítás, mint a {{ui:Beállítások}} alatt, {{ui:CadCraft}} |
| Rögzítés | Automatikus elrejtés, fent |

## Gyakori hibák

- **Mezőbe írás nem tett semmit.** Nyomja meg az {{key:Enter}} billentyűt, vagy kattintson máshová az alkalmazáshoz. A piros mező és a megjegyzés azt jelenti, hogy a bejegyzést elutasították.
- **Mértékegységes hosszt elutasít.** A rajznak nincs mértékegysége. Állítsa be a {{ui:Mértékegységek}} mezőt úgy, hogy nincs semmi kijelölve.
- **Csak a Réteg és a Szín látszik.** Több objektumtípus van kijelölve, és a **Mind** van kiválasztva. Válasszon egy típust a tetején lévő listából.
- **Néhány objektum nem változott.** Zárolt rétegen vannak. Oldja fel a réteget a rétegek panelen.
- **Gépelt betűk egy mezőbe kerültek.** Amíg egy mezőnek van kurzora, a billentyűk oda írnak. Nyomja meg az {{key:Enter}} vagy {{key:Esc}} billentyűt, majd írja be a parancsot.
