---
title: Splinek és polivonalak: SPLINE, SPLINEDIT, PEDIT
summary: Rajzoljon sima görbét pontokon át vagy vezérlő-sokszögből, szerkessze az illesztését és vezérlőpontjait, valamint szerkessze a polivonalakat (összekötés, zárás, szélesség, illesztés, spline, ívmentesítés), vagy alakítson át splinet polivonallá.
keywords: spline, splinedit, spl, spe, pedit, pe, illesztőpontok, vezérlőpontok, súlyok, nurbs, polivonal szerkesztése, összekötés, illesztett görbe, ívmentesítés, polivonallá alakítás, pontosság, érintő, görbe, illesztési tűrés
from: d31f72d8
---

## Amit elkészít

Egy görbe öt ponton át, majd ugyanez a görbe háromféleképpen szerkesztve, valamint egy három vonalból álló polivonal.

## Spline rajzolása pontokon át

1. Gépelje be az `SPL` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson vagy gépeljen be azokat a pontokat, amelyeken a görbének át kell haladnia: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Az utolsó után nyomja meg az {{key:Enter}} billentyűt.
3. {{ui:Kezdőérintő}}: kattintson egy pontra, amely felé a görbének ki kell indulnia, vagy nyomja meg az {{key:Enter}} billentyűt, hogy a program döntsön. Ugyanezt tegye a végérintővel.

A görbe minden ponton átmegy. A lezáráshoz az {{key:Enter}} helyett gépelje be a `C` betűt (a görbe visszatér az első ponthoz). Rajzolás közben a {{key:U}} (Visszavonás) visszavonja az utolsó pontot.

### Rajzolás vezérlő-sokszögből

Az első kérdésnél gépelje be az `M` betűt, majd a `C` betűt (Vezérlőcsúcsok), és az 1-től 5-ig terjedő fokszámot (a szokásos a 3). Most a kiválasztott pontok egy sokszög csúcsai lesznek, amely a görbét maga felé húzza; a görbe az elsőnél kezdődik és az utolsónál végződik. Zárt görbe körbefut, a csatlakozásnál nincs sarok.

### Polivonal átalakítása splinévé

Az első kérdésnél gépelje be az `O` betűt (Objektum), és válasszon ki polivonalakat vagy vonalakat. Azok a csúcsaikon átmenő splinékké alakulnak; az eredetiek megszűnnek.

## Spline szerkesztése

Válassza ki, majd gépelje be az `SPE` parancsot (vagy gépelje be az `SPE` parancsot, és kattintson rá). A fogópontok mutatják az illesztőpontokat (vagy annak a splinenek a vezérlőpontjait, amelynek nincs illesztőpontja): húzzon egyet a görbe átalakításához. A parancssorban:

- **Illesztési adatok** (a pontokon át rajzolt spline): a **Hozzáadás (A)** illesztőpontot ad hozzá (kattintson a helyére), a **Törlés (D)** töröl egyet (kattintson a közelébe), a **Mozgatás (M)** áthelyez egyet (kattintson a közelébe, majd az új helyére), az **Érintők (T)** a végérintőket állítja be, az **Eltávolítás (P)** pedig eltávolítja az illesztőpontokat, így a spline ezentúl a vezérlőpontjaival szerkeszthető.
- **Csúcs szerkesztése**: a **Hozzáadás (A)** vezérlőpontot ad a görbe megváltoztatása nélkül, a **Mozgatás (M)** egyet áthelyez, a **Súly (W)** egy pontnak **súlyt** ad (1 felett a görbét közelebb húzza hozzá, 1 alatt engedi el).
- **Nyitás (O)** vagy **Zárás (C)**, és **Megfordítás (R)** (a görbe fordított irányban fut).
- **Átalakítás polivonallá (P)**: a spline polivonallá válik; a pontosság azt adja meg, hogy minden szakasz hány szakaszt kapjon (a szokásos a 10).
- **Visszavonás (U)** visszavonja az utolsó változtatást; **Kilépés (X)** befejezi.

A {{ui:Tulajdonságok}} megmutatja a spline fokszámát, hogy hány illesztő- és vezérlőpontja van, a hosszát, és lehetővé teszi a nyitását vagy zárását.

## Polivonal szerkesztése

Válasszon ki egy polivonalat, és gépelje be a `PE` parancsot. A kiválasztott vonal, ív vagy spline először felajánlja, hogy polivonallá alakítsa (a splinénél a pontosságot kéri).

- **Zárás (C)** / **Nyitás (O)** összeköti vagy szétválasztja a végeket.
- **Összekötés (J)** hozzáad vonalakat, íveket és polivonalakat, amelyek végei a polivonal végéhez érnek. Az `Illesztési távolság` azt adja meg, hogy a végek milyen távol lehetnek egymástól, és még összekapcsolódhatnak (0 esetén pontosan találkozniuk kell).
- **Szélesség (W)** a teljes polivonalnak egy szélességet ad (0 eltávolítja).
- **Illesztés (F)** a polivonalat a csúcsain átmenő sima görbével helyettesíti; a **Spline (S)** a rájuk illeszkedő köbös B-splinnel (ez az első és az utolsó csúcsnál kezdődik és végződik, a többi közelében marad). Mindkettő rövid szakaszokból álló polivonallá válik, az eredeti sarkok megmaradnak, így az **Ívmentesítés (D)** visszaállítja azokat.
- **Vonaltípus-generálás** megadja, hogy a szaggatott vonaltípus a teljes polivonalon folytatódik-e, vagy minden csúcsnál újrakezdődik.
- **Megfordítás (R)** megváltoztatja a csúcsok sorrendjét. **Többszörös (M)** (`M` az első kérdésnél) több polivonalat szerkeszt ugyanazokkal a beállításokkal.

A polivonal csúcsainak szerkesztése a {{ui:Tulajdonságok}} panelen vagy fogópontokkal nem működik: a PEDIT-nek nincs csúcsszerkesztője.

## Fájlokban

A DWG és DXF 2000 a splinet splineként tartja meg: fokszám, vezérlőpontok, csomópontok, súlyok, illesztőpontok és érintők. A megnyitott és meg nem változtatott spline pontosan úgy íródik vissza, ahogy érkezett. A DXF R12 nem ismer splinet: a görbe mentén polivonalként mentődik, az előzmények pedig megmondják, hányból.

Az eltolás, a vágás, a nyújtás, a lekerekítés, a törés és az egyesítés nem működik splineken. Alkalmazza a splinére az {{cmd:EXPLODE}} vagy a {{cmd:PEDIT}} parancsot, hogy olyan polivonalat kapjon, amelyet ezek a parancsok kezelni tudnak.

## Gyakori hibák

- **A görbe túllendül közeli pontok között.** A pontokon átmenő görbe ott hajlik, ahol a pontok. Használjon kevesebb pontot, vagy vezérlő-sokszöget.
- **„Ez nem spline.”** A SPLINEDIT csak splineokat fogad el; a {{cmd:PEDIT}} polivonalakat szerkeszt.
- **A zárt illesztett spline más programban kissé másképp néz ki.** A CadCraft egyetlen sima csatlakozással zárja az első pontnál; egy másik program periodikus görbével zárhatja. A zárt vezérlőpontos spline mindkettőben ugyanaz.
