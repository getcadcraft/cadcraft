---
title: Méretek nagyságának, tizedesjegyeinek és léptékének beállítása
summary: Állítsa be az új méretek szövegmagasságát, nyílméretét, tizedesjegyeit és általános léptékét, módosítsa a meglévőket, és ismerje meg, hogyan működnek a méretezési stílusok a CadCraftban.
keywords: méretezési stílus, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, általános lépték, tizedesjegyek, nyílméret, feliratozási lépték, mértékegység a szövegben, mm, cm, m, km, milliméter, méter, dimlfac, dimpost
from: 8ec82a07
---

## Amit megtanul

Milyen nagyok a méretszövegek és nyilak, hogyan állítsa be őket az 1:50 vagy 1:100 léptékben kinyomtatott rajzhoz, és hogyan módosítsa a már elkészített méreteket.

## Hogyan működnek a méretek

Minden méret saját méretkészlettel rendelkezik: szövegmagasság, nyílméret, tizedesjegyek, a szöveg körüli rés, az, hogy a méretsegédvonalak mennyivel nyúlnak túl a méretvonalon, és hogy mennyivel kezdődnek az objektumtól. Az alapértelmezések a gyakori ISO stílushoz állnak közel:

| Beállítás | Alapérték | Parancs |
|---|---|---|
| Szövegmagasság | 2,5 | {{cmd:DIMTXT}} |
| Nyílméret | 2,5 | {{cmd:DIMASZ}} |
| Tizedesjegyek | 2 (a záró nullák elhagyva) | {{cmd:DIMDEC}} |
| Rés a szöveg körül | 0,625 | {{cmd:DIMGAP}} |
| Túlnyúlás a méretvonalon | 1,25 | {{cmd:DIMEXE}} |
| Eltolás az objektumtól | 0,625 | {{cmd:DIMEXO}} |
| Általános lépték | 1 | {{cmd:DIMSCALE}} |

Minden méretet megszoroz az **általános léptékkel**. Állítsa be a méreteket úgy, ahogy papíron szeretné őket (2,5 mm szöveg), az általános léptéket pedig állítsa a nyomtatási léptékre (50 az 1:50-hez). A szöveg ekkor 2,5 × 50 = 125 rajzegység magas, ami 2,5 mm-en nyomtatódik.

:::note
Az elnevezett méretezési stílusokat a {{cmd:DIMSTYLE}} parancs kezeli: lásd lent. Minden méret megőrzi azokat a beállításokat is, amelyekkel létrehozták, így a Tulajdonságok panelben továbbra is módosíthat egyet önállóan.
:::

## Méretek beállítása új méretekhez

Az alábbi két mód csak az ezután készített méreteket érinti.

### Az Aktuális beállítások panelen

1. Nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve. A {{ui:Modell}} lapon a jobb oldali panel {{ui:Jelenlegi beállítások}} címet mutat.
2. Görgessen lefelé a panelen az {{ui:Új méretek}} részig, a réteg, szín, egységek és a {{ui:0 réteg}} sorai mögé (kis képernyőn a panel alja alatt kezdődik). Kattintson az {{ui:Általános lépték}} mezőbe, írja be a `50`-et, és nyomja meg az {{key:Enter}} billentyűt.
3. Ugyanígy állítsa be a {{ui:Szövegmagasság}}, {{ui:Nyílméret}} és {{ui:Tizedesjegyek}} értékeket, ha másokat szeretne.

Az állapotsor minden változtatást megerősít, például: „Az új méretek általános léptéke: 50”.

### A parancssorban

1. Írja be a `DIMSCALE` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. A `Enter new value for DIMSCALE <1>` kérdésnél írja be a `50`-et, és nyomja meg az {{key:Enter}} billentyűt.

Az előzmények ezt erősítik meg: „DIMSCALE = 50. Az új méretek ezt használják; a meglévőkhöz jelölje ki őket.” A {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} és {{cmd:DIMEXO}} ugyanígy működik. A kérdésnél nyomja meg az {{key:Enter}} billentyűt, ha a jelenlegi értéket szeretné megtartani.

### Láb és hüvelyk a méretekben

Az új méretek a rajz hosszformátumát használják: ezt a {{ui:Hosszformátum}} mezőben állíthatja be a {{ui:Jelenlegi beállítások}} panelen vagy a {{cmd:UNITS}} parancsnál (lásd [Láb és hüvelyk](topic:units-papers-scales#feet-and-inches-and-fractions)), a következő méret pedig ezt írja: `12'-6 1/2"`. A {{cmd:DIMLUNIT}} csak a méretek formátumát állítja (2 tizedes, 3 mérnöki, 4 építészeti, 5 törtes). Egy már elkészített mérethez jelölje ki, és a {{ui:Tulajdonságok}} panelen válassza a {{ui:Formátum}} elemet; törtes formátumnál a {{ui:Tört}} mező a kettő hatványát veszi fel (4 = 1/16).

## Méretek mm, cm, m vagy km egységben

A méret rajzegységekben mér. Az adott hosszt kiírhatja milliméterben, centiméterben, méterben vagy kilométerben is, a szám után az egységgel: egy 1250 mm-es fal így jelenik meg: `1250 mm`, `125 cm`, `1.25 m` vagy `0.00125 km`.

1. Először állítsa be a rajz {{ui:Egységek}} mezőit a {{ui:Jelenlegi beállítások}} panelen (lásd [Egységek, papírméretek és léptékek](topic:units-papers-scales#drawing-units)), hogy a CadCraft tudja, mit jelent egy rajzegység. Egység nélküli rajzot milliméterként olvas, és a {{cmd:DIMTEXTUNIT}} ezt megmondja.
2. Új méreteknél: nyomja meg az {{key:Esc}} billentyűt, hogy semmi ne legyen kijelölve, majd az {{ui:Új méretek}} alatt válassza az {{ui:Mértékegység a szövegben}} elemet: {{ui:Rajzegységek}}, `mm`, `cm`, `m` vagy `km`.
3. Már elkészített méreteknél: jelölje ki őket, majd a {{ui:Tulajdonságok}} › {{ui:Elsődleges mértékegységek}} alatt válassza az {{ui:Mértékegység a szövegben}} elemet.

Vagy írja be a {{cmd:DIMTEXTUNIT}} (`DTU`) parancsot, és válaszoljon `D`, `MM`, `CM`, `M` vagy `KM` értékkel: ha méretek vannak kijelölve, azokat módosítja (egy visszavonási lépés), ha semmi nincs kijelölve, az új méreteket állítja be.

A {{ui:Tizedesjegyek}} ({{cmd:DIMDEC}}) továbbra is a tizedesjegyek számát állítja: méterrel és 3 tizeddel az 1234 mm így jelenik meg: `1.234 m`. A szöveg tizedes számként íródik. Lapon a méretek a lap papírmértékegységében (milliméter vagy hüvelyk) mérnek.

A mentett DWG vagy DXF a választást a méret mérési léptékeként (DIMLFAC) és utótagként (DIMPOST, ` m`) őrzi meg, így más programok ugyanazt a szöveget mutatják. Ha később megváltoztatja a rajz {{ui:Egységek}} értékét, a mm, cm, m vagy km egységben írt méretek újraszámolódnak, így továbbra is a helyes hosszt mutatják. A {{ui:Kézzel beállítva (lépték vagy utótag)}} azt jelenti, hogy a méret {{ui:Mérési lépték}} vagy utótagját más módon állították be; válasszon egy egységet, hogy azokat lecserélje.

## Már elkészített méretek módosítása

1. Kattintson egy méretre. A jobb oldali panel fejléce {{ui:Méret}}.
2. A beállítások szakaszokban vannak; görgessen lefelé a későbbiekhez:
   - {{ui:Általános}}: {{ui:Méretezési stílus}}
   - {{ui:Geometria}}: {{ui:Fajta}} és {{ui:Mért érték}} (csak olvasható)
   - {{ui:Szöveg}}: {{ui:Szöveg felülbírálása}} és {{ui:Szövegmagasság}}
   - {{ui:Vonalak és nyilak}}: {{ui:Nyílméret}}
   - {{ui:Illesztés}}: {{ui:Általános lépték}}
   - {{ui:Elsődleges mértékegységek}}: {{ui:Tizedesjegyek}}
3. Írjon be új értéket, és nyomja meg az {{key:Enter}} billentyűt.

A méret azonnal újrarajzolódik. Szögméreteknél a {{ui:Tizedesek (°)}} a szög tizedesjegyeit állítja.

:::note
Több kijelölt méretnél a panel a közös sorokat mutatja, és ahol az érték eltér, ott {{ui:Eltérő}} áll. Egy beírt érték egy lépésben módosítja az összes kijelölt méretet, így egy {{key:Mod+Z}} mindet visszaállítja.
:::

## Megnyitott rajzok méretei

Egy megnyitott DWG vagy DXF méretét pontosan úgy mutatja, ahogy a másik program rajzolta. A panelen ez áll: „Úgy jelenik meg, ahogy a készítő program rajzolta. Ha módosítja, a CadCraft a saját stílusában rajzolja újra.” Amint bármely értéket megváltoztat, fogópontot mozgat vagy magát a méretet mozgatja, a CadCraft a saját nyilaival és betűtípusával rajzolja újra, a fájlból beolvasott méretek alapján.

Egyes méretek csak úgy olvashatók, ahogy rajzolták őket, nem szerkeszthető méretként; ekkor a panel „Innen rajzolva” sort és egy blokknevet mutat, a „Fájl adatai” doboz pedig megszámolja őket.

## Gyakori hibák

- **A DIMSCALE módosítása nem változtatott semmit a képernyőn.** A beállítás az új méretekre vonatkozik. Jelölje ki a meglévőket, és a panelen módosítsa az {{ui:Általános lépték}} értékét.
- **A tizedesek kevesebb számjegyet mutatnak a beállítottnál.** A záró nullák elhagyódnak: 2 tizeddel `1250` és `1250.5` látszik, nem `1250.00`.
- **A szöveg papíron megfelelő magasságú nézetablakban, de rosszul nyomtatott modellből.** Az általános léptéknek egyeznie kell a nyomtatási léptékkel. Ha az „Illesztés a papírhoz” módon nyomtat, furcsa lépték lesz; válasszon szabványos léptéket a nyomtatási párbeszédpanelen.
- **Mm vagy m a szövegben.** Válassza a {{ui:Mértékegység a szövegben}} elemet (lásd [Méretek mm, cm, m vagy km egységben](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Bármely más szót a szám után egy felülbírálásba kell írni: `<> TYP.`.

## Elnevezett méretezési stílusok

Írja be a `DIMSTYLE` (`D`) parancsot a {{ui:Méretezési stílus kezelője}} megnyitásához. Ez listázza a rajz stílusait, hogy hány méret használja mindegyiket, és melyik az aktuális. A **Standard** mindig ott van.

- {{ui:Aktuálissá tétel}}: az új méretek azt a stílust használják, és viselik annak nevét.
- {{ui:Új…}}: egy új stílus, amely az Ön által kiválasztott stílus másolataként indul.
- {{ui:Módosítás…}}: ugyanazok a mezők, mint a {{ui:Tulajdonságok}} méretrészében (vonalak és nyilak, szöveg, illesztés, egységek, alternatív egységek, tűrések). Az {{ui:OK}} megnyomásakor a stílus megváltozik, **és minden őt használó méret vele együtt változik**, beállításonként. Az egyetlen méreten módosított beállítás megmarad, hacsak a stílus nem változtatta meg azt a beállítást.
- {{ui:Átnevezés…}} és {{ui:Törlés}}: a Standard nem nevezhető át és nem törölhető, az aktuális stílus és a méretek által használt stílus sem.
- {{ui:Összehasonlítás…}}: két stílus közötti különbségek.
- {{ui:Alkalmazás a kijelöltre}}: először jelöljön ki méreteket; megkapják a stílus beállításait és nevét.

A `-DIMSTYLE` ugyanezt végzi a parancssorban: `Restore`, `Save` (az aktuális beállítások, beleértve a {{cmd:DIMTXT}} és a többi parancs által beírtakat, egy névvel), `Delete`, `Apply`, `Compare`, `reName`, `List`.

A stílusok DWG vagy DXF fájlba mentődnek (a méretezési stílustáblában), és a megnyitott fájlokból olvasódnak. Az *aktuális* stílus nem mentődik: a rajz a Standard aktuális stílussal nyílik meg. A Standard megtartja saját beállításait, amíg másik stílus az aktuális.

## Méretszöveg és segédvonalak módosítása

A {{cmd:DIMEDIT}} (`DED`) a kijelölt méreteken dolgozik: a **Kezdőlap** visszateszi a szöveget oda, ahová a stílus teszi, az **Új** más szöveget ír (a `<>` a mért értéket jelöli), a **Forgatás** elforgatja a szöveget, az **Ferde** a lineáris és párhuzamos méretek segédvonalait egy megadott szögre dönti (az {{key:Enter}} nem ad szöget). A {{cmd:DIMTEDIT}} a szöveget a méretvonal **Bal**, **Jobb** vagy **Közép** részére viszi, vagy elforgatja (**Szög**), vagy **Kezdőlap** helyzetbe küldi. A szöveg mindig a méretvonalon van: nem húzható szabad helyre.
