---
title: Alaprajz méretezése
summary: Adjon hozzá vízszintes-függőleges, párhuzamos, szög-, sugár- és átmérőméreteket, fűzze őket egymáshoz a Folytatás és az Alapvonal paranccsal, és írja felül a szöveget.
keywords: méretezés, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, dco, dba, lánc, sor, feliratozás, méretezési eszköz, hol, keresés, eszköztár, mérés, mm, cm, m, km, egységek
from: 9ee65123
---

## Amit készíteni fog

Egy méretezett szoba: teljes szélesség és magasság, méretsor az egyik fal mentén, egy ferde fal, egy ívelt sarok és egy szög.

Mielőtt elkezdi, olvassa el a [Méretek nagyságának beállítása](topic:dimension-settings) témakört, ha a rajza nagy: a méretszöveg alapértelmezetten 2,5 rajzegység magas, ami egy milliméterben mért rajzon aprónak számít. Az alábbi lépésekhez először írja be a `DIMSCALE` parancsot, nyomja meg az {{key:Enter}} billentyűt, írja be a `50`-et, és nyomja meg újra az {{key:Enter}} billentyűt.

## Hol vannak a méretezési eszközök

A CadCraft menüstílussal (ezzel indul a CadCraft) a méretezési eszközök a rajz fölötti eszköztáron vannak, a {{ui:Feliratozás}} csoportban: {{ui:Vízszintes-függőleges}}, {{ui:Párhuzamos}}, {{ui:Szög}}, {{ui:Sugár}} és {{ui:Átmérő}}. A csoport {{ui:Továbbiak}} menüjében van a {{ui:Folytatólagos méret}} és az {{ui:Alapvonalas méret}}. Tartsa a mutatót egy gomb fölé, hogy lássa, mit csinál.

- A {{ui:Klasszikus rajzoló}} vagy a {{ui:Szalag}} menüstílusnál nyissa meg a {{ui:Feliratozás}} lapot: az eszközök a {{ui:Méretek}} panelen vannak. A {{ui:Klasszikus rajzoló}} a {{ui:Kezdőlap}} lapon a {{ui:Feliratozás}} alatt is tartalmazza a {{ui:Vízszintes-függőleges}} elemet. Lásd: [Menük, billentyűk és egér](topic:menus-keys-and-mouse).
- Vagy írja be a parancsot a rajz alatti parancssorba, és nyomja meg az {{key:Enter}} billentyűt: `DLI` (vízszintes-függőleges), `DAL` (párhuzamos), `DAN` (szög), `DRA` (sugár), `DDI` (átmérő), `DCO` (folytatás), `DBA` (alapvonal).
- Keskeny képernyőn az eszköztár egy sor: húzza oldalra az ujjával, hogy elérje a {{ui:Feliratozás}} részt.

A hosszúságok milliméterben, centiméterben, méterben vagy kilométerben való megjelenítéséhez lásd: [Méretek mm, cm, m vagy km egységben](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Rajzoljon valamit, amit méretezhet

1. Írja be a `PL` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Írja be a `0,0`-t, és nyomja meg az {{key:Enter}} billentyűt.
3. Írja be a `@6000,0`-t, és nyomja meg az {{key:Enter}} billentyűt.
4. Írja be a `@1500<60`-at, és nyomja meg az {{key:Enter}} billentyűt.
5. Írja be a `@0,2700`-at, és nyomja meg az {{key:Enter}} billentyűt.
6. Írja be a `@-6750,0`-t, és nyomja meg az {{key:Enter}} billentyűt.
7. Írja be a `C`-t, és nyomja meg az {{key:Enter}} billentyűt. A körvonal bezárul.
8. Írja be a `C`-t, és nyomja meg az {{key:Enter}} billentyűt a kör kezdéséhez.
9. A középponthoz kattintson a szobán belül, a falaktól távol.
10. Írja be a `600`-at, és nyomja meg az {{key:Enter}} billentyűt. Ez egy oszlop.
11. Kattintson a {{ui:Kiterjedés}} gombra.

## Vízszintes-függőleges: vízszintes vagy függőleges

1. Írja be a `DLI` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. A `Specify first extension line origin` kérdésnél fogja meg a bal alsó sarkot (végpont), és kattintson.
3. A `Specify second extension line origin` kérdésnél fogja meg a jobb alsó sarkot, és kattintson.
4. Mozgassa a kereszthajat a szoba alá. A méret követi, vízszintesen.
5. Kattintson a méretvonal elhelyezéséhez.

Az előzmények szerint: `Dimension text = 6000`.

Az határozza meg az irányt, hová helyezi a vonalat: alá vagy fölé vízszintes méretet ad, balra vagy jobbra függőlegeset. Az irány kényszerítéséhez írja be az `H` (vízszintes), `V` (függőleges) vagy `R` (elforgatott, majd egy szög) betűt, mielőtt elhelyezi.

:::tip
Az első kérdésnél az {{key:Enter}} billentyűt nyomja meg pont kiválasztása helyett, majd kattintson egy vonalra, ívre, körre vagy polivonal-szakaszra. A CadCraft mindkét végét maga veszi fel.
:::

## Folytatás: méretsor

A {{cmd:DIMCONTINUE}} ({{ui:Feliratozás}} › {{ui:Továbbiak}} › {{ui:Folytatólagos méret}}, vagy `DCO`) az utoljára készített vízszintes-függőleges vagy párhuzamos méretről folytatja, minden új méret ott kezdődik, ahol az előző véget ért.

1. Írja be a `DLI` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Írja be a `0,0`-t, és nyomja meg az {{key:Enter}} billentyűt az első kezdőponthoz.
3. Írja be a `2000,0`-t, és nyomja meg az {{key:Enter}} billentyűt a második kezdőponthoz.
4. Kattintson a szoba alá, hogy elhelyezze.
5. Írja be a `DCO`-t, és nyomja meg az {{key:Enter}} billentyűt.
6. Írja be a `4500,0`-t, és nyomja meg az {{key:Enter}} billentyűt. Egy második méret követi az elsőt, ugyanazon a vonalon.
7. Fogja meg a jobb alsó sarkot, és kattintson. Egy harmadik méret zárja a sort.
8. A parancs befejezéséhez nyomja meg az {{key:Enter}} billentyűt.

:::note
Itt a pontokat szándékosan abszolút koordinátákkal írja be. Egy `@` pont az utoljára megadott ponttól számol, az utolsó pont pedig az előző méretvonal elhelyezésének helye, nem a méret vége. Méretsorban az abszolút pontok, a fogások vagy egy puszta távolság az {{ui:Ortho}} bekapcsolásával biztonságosabbak.
:::

A `U` beírásával és az {{key:Enter}} megnyomásával visszavonhatja a sor utolsó méretét anélkül, hogy kilépne a parancsból.

## Alapvonal: egy vonalból egymás fölé rakott méretek

A {{cmd:DIMBASELINE}} ({{ui:Feliratozás}} › {{ui:Továbbiak}} › {{ui:Alapvonalas méret}}, vagy `DBA`) minden új méretet az utolsó méret első kezdőpontjától mér, és mindegyiket egy lépéssel távolabb rakja.

1. Írja be a `DLI` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Fogja meg a bal alsó sarkot, és kattintson.
3. Fogja meg a bal felső sarkot, és kattintson.
4. Mozgassa a kereszthajat a szoba bal oldalára, és kattintson. Egy függőleges méret jelenik meg.
5. Írja be a `DBA`-t, és nyomja meg az {{key:Enter}} billentyűt.
6. Fogja meg a 60 fokos fal felső végét (végpont), és kattintson. Egy második függőleges méret jelenik meg, eggyel távolabb, mint az első.
7. Az befejezéshez nyomja meg az {{key:Enter}} billentyűt.

## Igazított: ferde vonal valódi hossza

1. Írja be a `DAL` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Nyomja meg az {{key:Enter}} billentyűt egy objektum kijelöléséhez.
3. Kattintson a 60 fokos falra.
4. Mozgasson kifelé, és kattintson az elhelyezéshez.

A szöveg 1500-at mutat: a fal mentén mért valódi hossz.

## Sugár és átmérő

1. Írja be a `DRA` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson az oszlop körére.
3. Mozgassa a kereszthajat. A vezetővonal a középponttól a kereszthaj felé mutat.
4. Kattintson a szöveg elhelyezéséhez.

A szöveg `R600`-at mutat. A {{cmd:DIMDIAMETER}} (`DDI`) ugyanezt végzi a ⌀ jellel és az átmérővel.

## Szög

Itt a falak egyetlen polivonalat alkotnak, ezért a sarkot a csúcsáról mérje. (Két különálló vonal között a vonalakra kattinthat.)

1. Írja be a `DAN` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. A `Select arc, circle or line, or Enter for a vertex` kérdésnél nyomja meg az {{key:Enter}} billentyűt.
3. A `Specify angle vertex` kérdésnél fogja meg a jobb alsó sarkot, és kattintson.
4. A `Specify first angle endpoint` kérdésnél fogja meg a bal alsó sarkot, és kattintson.
5. A `Specify second angle endpoint` kérdésnél fogja meg a 60 fokos fal felső végét, és kattintson.
6. Mozgassa a kereszthajat a szobán belül, a sarok közelébe, és kattintson.

A szöveg `120°`-ot mutat: a sarok belső szögét. Ha a sarok másik oldalán helyezi el, a méret az ott lévő szöget méri. Az első kérdésnél egy ívre kattintva az általa bezárt szöget méretezheti, vagy két vonalra kattintva a közöttük lévő szöget.

## A szöveg módosítása

Saját szöveg írásához írja be a `T`-t, és nyomja meg az {{key:Enter}} billentyűt, mielőtt elhelyezi a méretet, majd írja be a szöveget. A szövegben a `<>` a mért értéket jelöli: a `<> TYP.` ezt adja: `6000 TYP.`. Üres sornál az {{key:Enter}} megnyomásával megtartja a mért értéket.

Egy meglévő méret módosításához:

1. Kattintson rá.
2. A jobb oldali panelen írjon a {{ui:Szöveg}} mezőbe. Hagyja üresen a mért értékhez.
3. Nyomja meg az {{key:Enter}} billentyűt.

## A méretek követik a geometriát

A méret megjegyzi a pontjait. Húzza az egyik fogópontját, vagy mozgassa, forgassa vagy léptékezze a mért objektumokkal együtt, és újra mér. Ha a geometriát a méret mozgatása nélkül nyújtja, a méret nem követi: megtartja saját pontjait.

## Gyakori hibák

- **A szöveg és a nyilak aprók vagy óriásiak.** Állítsa be az általános léptéket: lásd [Méretek nagyságának beállítása](topic:dimension-settings).
- **„Válasszon egy pontot a mérni kívánt szögön belül.”** Az szögméreteknél kattintott pont az egyik szárra esett. Mozgassa a szögön belülre.
- **A Folytatás a rossz méretről indult.** Mindig az utolsó, ebben a munkamenetben készített vízszintes-függőleges vagy párhuzamos méretről folytat. Előbb készítse el (vagy újra) azt a méretet, amelyről folytatni szeretne.
- **A méret függőlegesnek sikerült.** Oldalra helyezte el. Elhelyezés előtt írja be az `H`-t.
- **Láb és hüvelyk.** Állítsa be a rajz hosszformátumát először {{ui:Építészeti}} értékre, vagy a méret {{ui:Formátum}} mezőjét a {{ui:Tulajdonságok}} panelen: lásd [Láb és hüvelyk a méretekben](topic:dimension-settings#feet-and-inches-in-dimensions).
- **A számok nem a kívánt egységben vannak.** Válassza a {{ui:Mértékegység a szövegben}} elemet: lásd [Méretek mm, cm, m vagy km egységben](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
