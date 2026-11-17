---
title: Mértékegységek, papírméretek és léptékek
summary: Mit jelentenek a rajzegységek a CadCraftban, a rajzlapok és plotok papírméretei, minden szabványos lépték, és hogyan kapcsolódnak a szöveg- és méretezési méretek a plot léptékéhez.
keywords: mértékegységek, milliméter, hüvelyk, láb, láb és hüvelyk, építészeti, mérnöki, törtes, lunits, hosszformátum, papírméret, a3, a1, arch d, ansi, tabloid, letter, lépték, 1:100, 1/4 hüvelyk, építészeti lépték, mérnöki lépték, insunits
from: 8346236a
---

## Rajzegységek

Valós méretben rajzol, rajzegységekben. Hogy egy egység mit jelent, azt a rajz **Mértékegységek** beállítása adja meg:

1. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve, a {{ui:Modell}} lapon.
2. A {{ui:Jelenlegi beállítások}} alatt válassza a {{ui:Mértékegységek}} beállítást: {{ui:Mértékegység nélkül}}, {{ui:Milliméter}}, {{ui:Centiméter}}, {{ui:Méter}}, {{ui:Hüvelyk}} vagy {{ui:Láb}}.

A méretek hosszukat a rajzegységtől függetlenül milliméterben, centiméterben, méterben vagy kilométerben is kiírhatják: lásd [Méretek mm, cm, m vagy km egységben](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

A mértékegységek módosítása nem méreteződik át semmit. Azt változtatja meg, hogyan értelmeződnek a léptékek a rajzlapokon és a plotokon, valamint, hogy mely léptékek ajánlottak. A DWG-ből vagy DXF-ből megnyitott rajz megtartja a fájlban tárolt mértékegységeket; a bal oldali panel {{ui:Rajz}} szakasza mutatja azokat.

A {{ui:Mértékegység nélkül}} rajz a papír egységében kezelődik: ISO papíron milliméterben, US papíron hüvelykben.

## Láb és hüvelyk, valamint törtek

Hogy a hosszak **hogyan íródnak és hogyan gépelhetők**, az külön beállítás: a hosszformátum. Geometriát nem változtat, csak azt, hogyan néznek ki a számok, és mit lehet beírni.

1. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve, a {{ui:Modell}} lapon.
2. A {{ui:Jelenlegi beállítások}} alatt válassza a {{ui:Hosszformátum}} beállítást: {{ui:Tizedes}} (`150.5`), {{ui:Építészeti}} (`12'-6 1/2"`), {{ui:Mérnöki}} (`12'-6.5"`), {{ui:Törtes}} (`150 1/2`) vagy {{ui:Tudományos}} (`1.505E+02`).
3. Válassza ki a {{ui:Pontosság}} értéket: tizedes jegyek, vagy a legkisebb tört (az 1/16 az építészetinél a szokásos).

Vagy írja be a {{cmd:UNITS}} (`UN`) parancsot, és válaszoljon a két kérdésére.

A {{ui:Építészeti}} vagy {{ui:Mérnöki}} formátum esetén egy rajzegység egy hüvelyk, ahogy az AutoCADben: állítsa a {{ui:Mértékegységek}} értékét is {{ui:Hüvelyk}} értékre. Ezután hosszakat lábban és hüvelykben gépelhet be mindenhol, ahol hosszt kérnek, valamint a {{ui:Tulajdonságok}} mezőiben:

| Beírja | Ez jelent |
|---|---|
| `12'6"` vagy `12'-6"` | 12 láb 6 hüvelyk (150) |
| `12'6-1/2"` | 12 láb 6½ hüvelyk. Törtrész előtt kötőjelet használjon: a parancssorban a {{key:Space}} az {{key:Enter}} billentyűvel egyenértékű. |
| `12'` | 12 láb |
| `6"` vagy `6` | 6 hüvelyk: a sima szám hüvelyk |
| `1/2`, `6-1/2` | a törtek bármely formátumban működnek |

A pontok ugyanazokat a hosszakat veszik fel: `@12'6",0` vagy `@10'<90`. A szögek fokban maradnak.

A formátum megjelenik az előzményekben ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: a területek négyzethüvelykben és négyzetlábban), a {{ui:Tulajdonságok}} panelen, az állapotsor koordinátáiban, valamint az **új méretekben**. A rajzlapok papírmértékegységeiket (milliméter vagy hüvelyk) tizedes formában tartják meg.

:::note
A hosszformátum a DWG- és DXF-fájlokba mentődik, és minden méret megtartja a sajátját: a mentett rajz úgy nyílik meg újra, ahogy hagyta.
:::

## Papírméretek

A rajzlapok és a modellplotok ezeket a méreteket használják, mindkét tájolásban:

| Papír | Méret | Mértékegység a rajzlapon |
|---|---|---|
| ISO A4 | 297 × 210 mm | milliméter |
| ISO A3 | 420 × 297 mm | milliméter |
| ISO A2 | 594 × 420 mm | milliméter |
| ISO A1 | 841 × 594 mm | milliméter |
| ISO A0 | 1189 × 841 mm | milliméter |
| Letter | 11 × 8.5 in | hüvelyk |
| Legal | 14 × 8.5 in | hüvelyk |
| Tabloid / ANSI B | 17 × 11 in | hüvelyk |
| ANSI C | 22 × 17 in | hüvelyk |
| ANSI D | 34 × 22 in | hüvelyk |
| ARCH C | 24 × 18 in | hüvelyk |
| ARCH D | 36 × 24 in | hüvelyk |
| ARCH E | 48 × 36 in | hüvelyk |

Az új rajzlapok metrikus és mértékegység nélküli rajzokon ISO A3, hüvelyk- vagy lábegységű rajzokon Tabloid méretűek lesznek. A modellplotok ugyanígy ISO A4 vagy Letter méretűek kezdésként, majd megjegyzik az utolsó választását. A megnyitott fájlok rajzlapjai megtartják saját méretüket, amely „Egyéni”-ként jelenik meg, ha nem szerepel ezek között.

## Léptékek

Az `1:n` lépték azt jelenti, hogy egy egység a papíron az azonos egységből n-et mutat a modellben, így az 1:100 az épület 1 m-ét 10 mm papíron mutatja. A CadCraft ezt a rajzegységekből és a papír egységéből számolja ki.

**Metrikus léptékek**, minden rajzhoz ajánlva: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Építészeti léptékek**, ha a mértékegység hüvelyk vagy láb: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Mérnöki léptékek**, ha a mértékegység hüvelyk vagy láb: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Saját léptékek.** Írja be a `SCALELISTEDIT` (vagy `SCALELIST`) parancsot, ha saját léptéket szeretne hozzáadni, például 1:75-öt vagy egy telepléptéket: 2 papír : 300 rajz. A `Add` nevet kér, majd a papírmértékegységet és a rajzmértékegységet (a `1:75`-höz hasonló név a saját számait ajánlja; az {{key:Enter}} billentyűvel elfogadhatók). Az `Edit`, `Delete`, `List` és `Reset` ugyanazon a listán dolgozik; a `Reset` visszaállítja a szabványos listát. A saját léptékei a szabványosak után jelennek meg a Tulajdonságok nézetablak-léptéklistájában és a {{ui:Plottolás PDF-be}} párbeszédpanelen; a hozzá tartozó nézetablak a nevével látszik; a rajzban (DWG és DXF 2000) pedig a rajz léptéklistájaként mentődnek. Más programból megnyitott rajz hozza a saját listáját; a szabványos léptékkel egyezőket nem mutatja kétszer.

Ha a nézetablakot a {{ui:A teljes modell megjelenítése}} vagy az {{ui:Ablak kijelölése a modellen…}} parancsokkal irányítja, a CadCraft a legnagyobb elférő szabványos léptéket választja. Az {{ui:A teljes modell illesztése}} helyette pontos léptéket állít be, amely egyszerű arányként jelenik meg.

## Méretek papíron és a modellben

A szöveg- és méretezési méretek annak a térnek az egységeiben vannak, amelyben rajzol.

| Papíron kell | Rajzlapon rajzolva | Modellben rajzolva 1:50-nél (mm-es rajz) | Modellben rajzolva 1/4" = 1'-0"-nél (hüvelykes rajz) |
|---|---|---|---|
| 2.5 mm szöveg | 2.5 | 125 | — |
| 3/32" szöveg | 0.09375 | — | 4.5 |

Méretek esetén a méreteket papírméretként tartsa, és az általános léptéket ({{cmd:DIMSCALE}}) állítsa a plot léptékére: 50 az 1:50-hez, 48 az 1/4" = 1'-0"-hez. Lásd [Méretezési méretek beállítása](topic:dimension-settings).

## Léptékezés annotálással

Rajzolja meg a modellt valós méretben, és hagyja, hogy a CadCraft elvégezze fent leírt számításokat.

1. Jelölje ki azt a szöveget vagy méretet, amelynek papíron meg kell tartania a méretét. A Tulajdonságok között pipálja be az {{ui:Annotatív}} jelölőnégyzetet. A {{ui:Méret papíron}} például így olvasható: `2.5 mm at 1:50`.
2. Írja be az {{cmd:ANNOSCALE}} parancsot, és azt a léptéket, amelyen a rajz nyomtatva lesz, például `1:100`.

Minden annotatív szöveg és méret úgy méreteződik át, hogy az új léptéken ugyanakkora méretben nyomtatódjon: a 2,5 mm-es szöveg milliméteres rajzban 1:50-nél 125 magas, 1:100-nál 250. Egy bekezdés szélessége vele együtt változik; a méret szövege, nyilai és közei együtt változnak (az általános léptékük). Ez egy visszavonási lépés, és a nem annotatív objektumok soha nem változnak.

A beállítás a DWG- és DXF-fájlokba mentődik: a más programok az annotatív jelzőt olvassák, a CadCraft pedig megtartja azt a léptéket is, amelyre az egyes objektumok méretezve vannak.

Ha az irodája a Default Policies bővítményben állítja be a papírmagasságokat (Beállítások › Általános › Default Policies › Annotációk mérete papíron), a {{cmd:ANNOSCALE}} azt a magasságot is beállítja, amellyel az új szöveg indul: az iroda ezen a léptéken érvényes megjegyzés-magasságát. Lásd [Default Policies](topic:default-policies).

### Egy objektum több léptékben

Egy rajzlap gyakran mutatja ugyanazt az alaprajzot 1:100-ban, és egy részét 1:50-ben. Adjon a megjegyzéseknek és méreteknek mindkét léptéket, és minden nézetablak a papírméretükben mutatja őket:

1. Jelölje ki az annotatív szöveget és méreteket, és írja be: `OBJECTSCALE`.
2. Válassza az `Add` lehetőséget, és írja be a léptéket, például `1:50`. (A `Current scale` hozzáadja a rajz annotációs léptékét; a `List` megmutatja, mit tart meg minden objektum; a `Delete` eltávolít egyet.)

Az a nézetablak, amelynek léptéke szerepel az objektum listájában, az adott léptéknek megfelelő méretben mutatja: a 2,5 mm-es szöveg 1:100-as nézetablakon 250 magasan, 1:50-esen 125 magasan rajzolódik, a képernyőn és a plotban egyaránt. Az objektum a helyén marad; csak a mérete különbözik. Olyan léptékű nézetablakban, amely nem szerepel a listában, az objektum a saját méretében látszik, amíg be nem írja az `ANNOALLVISIBLE` parancsot, és az `OFF` lehetőséget nem választja: akkor ott kimarad. Az {{cmd:ANNOSCALE}} átméretezi azokat az objektumokat, amelyek listáján szerepel az új lépték, a többit hagyja változatlanul.

A listák a DWG- és DXF-fájlokba a CadCraft saját adataként mentődnek. Egy másik program minden objektumot annotatívnak lát, abban a léptékben, amelyre méretezve van. Az ANNOALLVISIBLE kapcsoló nem mentődik a fájlba.

## Vonalvastagságok és vonaltípusok

Egy rétegnek vagy egy objektumnak lehet **vonalvastagsága** (0,05–2,11 mm) és **vonaltípusa** (szaggatott, rejtett, középvonal, fantom, pont…). A jobb oldali panelen állítsa be: ha semmi sincs kijelölve, a {{ui:Jelenlegi beállítások}} alatti {{ui:Vonaltípus}} és {{ui:Vonalvastagság}} határozza meg az új objektumok értékét ({{ui:Rétegről}}, ha a rétegük értékét szeretné követni), a {{ui:Réteg …}} alatti kettő pedig az aktuális réteg saját értéke. Kijelölt objektumoknál ugyanez a két sor és a {{ui:Vonaltípus-lépték}} ezeket az objektumokat módosítja. A parancsok: {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) és {{cmd:LTSCALE}} (`LTS`).

A vonaltípusok a képernyőn és a plotokon is láthatók. A szaggatások rajzegységekben vannak megadva: a metrikus rajz az ISO-méreteket használja (DASHED: 12,7 mm-es vonalszakaszok), a hüvelykes rajz a hüvelyk-méreteket (0,5"). Ha a szaggatás túl kicsinek vagy túl nagynak tűnik, módosítsa a rajz {{ui:Vonaltípus-lépték}} (LTSCALE) értékét: minden szakaszt és közt megszoroz vele; egy objektum saját léptéke újra megszorozza. Az a mintázat, amely egyáltalán nem látszik, egyszerű vonalként rajzolódik.

A vonalvastagságok plotolásban nyomtatódnak, papíron mm-ben, bármilyen léptéken. Az {{ui:Alapérték}} vonalvastagságú vonalak a {{ui:Plottolás PDF-be}} párbeszédpanelen választott tollszélességet használják (0,13–0,70 mm; kezdetben 0,25 mm); a 0 vonalvastagság a legvékonyabb vonalként nyomtatódik. A képernyőn minden vonal egy pixel széles, amíg az állapotsor {{ui:LWT}} gombját meg nem nyomja (vagy be nem írja a {{cmd:LWDISPLAY}} parancsot): ekkor a 0,25 mm-nél nagyobb vonalvastagság szélesebben rajzolódik (0,5 mm = 2 pixel) a modellben, rajzlapon pedig a papíron az igazi szélességében. A választás ebben a böngészőben marad meg.
