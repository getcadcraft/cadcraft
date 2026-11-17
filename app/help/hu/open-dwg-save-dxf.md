---
title: DWG megnyitása, szerkesztése és másolat mentése
summary: Egy kapott rajz megnyitása, ellenőrzése, módosítása, majd másolat visszaküldése DWG vagy DXF formátumban.
keywords: dwg, dxf, megnyitás, importálás, exportálás, mentés, r12, oda-vissza, konzulens, xref, rajz ellenőrzése, saveas, mentés másként, dwg mentés, formátum
from: 49de4bf6
---

## Mit fog csinálni

Egy konzulenstől kapott DWG megnyitása, annak ellenőrzése, hogy a CadCraft mit tudott és mit nem tudott megjeleníteni, megjegyzés hozzáadása, egy rajzlap plottolása PDF-be, valamint másolat mentése DWG vagy DXF formátumban, hogy visszaküldhető legyen.

## A fájl megnyitása

1. Nyomja meg a {{key:Mod+O}} billentyűkombinációt, vagy kattintson a {{ui:Megnyitás}} gombra.
2. Válassza ki a `.dwg` fájlt.

Az állapotsor „Olvasás …” szöveget mutat, amíg a rajz beolvasódik. Ha kész, a rajz kitölti a képernyőt, az előzmények pedig például ezt írják: „Megnyitva: plan.dwg: 18,240 objektum, 64 rétegen”, a betöltés idejével együtt.

:::offline
Offline állapotban van. Ha a {{ui:Mentés offline használatra}} gomb „Offline kész” feliratot mutat, a DWG-fájlok rendesen megnyílnak. Ha nem, és ebben a lapon még nem nyitottak meg DWG-fájlt, a DWG megnyitása sikertelen lehet, mert a CadCraft DWG-olvasója az első DWG-vel töltődik be: nyisson meg helyette DXF-fájlt, vagy mentse offline használatra a CadCraftot, amikor újra online lesz. Lásd: [Munka offline](common:offline).
:::

## Ellenőrizze, mi érkezett be

1. Nézze meg a bal panel {{ui:Rajz}} szakaszát: formátum és verzió, mértékegységek, objektumok és rétegek száma, valamint rajzlapok.
2. Ha van, olvassa el az alatta lévő „Erről a fájlról” dobozt.

A doboz a következőket sorolja fel:

- **Még nem jeleníthető meg:** azok az objektumok, amelyeket a CadCraft még nem tud rajzolni, fajtánként és darabszámmal. Ezek kimaradnak, nem tippelik meg őket.
- **Elrendezések (rajzlapok) érkeztek be:** nyissa meg őket a rajz alatti lapfülekkel.
- **Méretek, amelyeket csak a rajzolt formában lehetett beolvasni.**

3. Kattintson végig a rajz alatti lapfüleken, hogy minden rajzlapot lássa.
4. Ellenőrizze a {{ui:Mértékegységek}} beállítást a {{ui:Jelenlegi beállítások}} alatt (semmi nincs kijelölve, {{ui:Modell}} lap). Ha {{ui:Mértékegység nélkül}} áll, de tudja, hogy a rajz milliméterben készült, állítsa be, hogy a rajzlap és a plottolási léptékek helyesek legyenek.

:::tip
Ha a rajz egy részét várja, de nem látja, ellenőrizze a {{ui:Rétegek}} panelt: a réteg lehet kikapcsolva vagy befagyasztva a fájlban. Kattintson a nevére, hogy aktuálissá tegye; ezzel bekapcsolódik.
:::

## Módosítás elvégzése

1. Hozzon létre egy réteget a megjegyzéseinek: kattintson az {{ui:Új réteg}} gombra, írja be a `NOTES` szót, és nyomja meg az {{key:Enter}} billentyűt.
2. Írja be a `DT` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
3. Kattintson arra a helyre, ahová a megjegyzés kerül.
4. Írjon be a rajzhoz illő szövegmagasságot (lásd: [Szöveg és feliratok hozzáadása](topic:text)), és nyomja meg az {{key:Enter}} billentyűt.
5. Nyomja meg az {{key:Enter}} billentyűt, hogy az elforgatás 0 maradjon.
6. Írja be a megjegyzését, és nyomja meg az {{key:Enter}} billentyűt.
7. A befejezéshez nyomja meg újra az {{key:Enter}} billentyűt.

Az importált méretek szerkesztése rendben van: amint módosít egyet, a CadCraft a saját stílusában rajzolja újra.

## Rajzlap plottolása átnézésre

1. Kattintson a rajzlap fülére.
2. Nyomja meg a {{key:Mod+P}} billentyűkombinációt.
3. Kattintson a {{ui:PDF letöltése}} gombra.

Lásd: [Plottolás PDF-be](topic:plot-pdf).

## Másolat mentése

1. Nyomja meg a {{key:Mod+S}} billentyűkombinációt, vagy kattintson a {{ui:Mentés}} gombra.

DWG-t nyitott meg, ezért a böngésző a `<name>.dwg` fájlt tölti le abban a verzióban, amelyben a DWG érkezett. Az előzmények például ezt írják: „Másolat mentve: Plan.dwg (DWG (AutoCAD 2018))”, alatta pedig felsorolják, ami útközben változott.

2. Olvassa el ezeket a sorokat, mielőtt elküldi a fájlt. A [Mit őriz meg és mit változtat a DWG](topic:files#what-a-dwg-keeps-and-changes) minden sort elmagyaráz.

Az eredeti DWG-fájl soha nem változik. Minden mentés új letöltés.

## Mentés DWG vagy DXF formátumban

A formátum kiválasztásához:

1. Nyomja meg a {{key:Mod+Shift+S}} billentyűkombinációt, vagy kattintson a {{ui:Mentés másként}} gombra.

Megnyílik a {{ui:Másolat mentése másként}} párbeszédpanel négy lehetőséggel, mindegyik a nevével, amelyet adni fog: {{ui:DWG}}, a {{ui:Verzió}} listával, {{ui:DXF R12}}, {{ui:DXF 2000}} és {{ui:DXF 2000 (binary)}}. A rajz jelenlegi formátuma és verziója már ki van választva.

2. Kattintson a kívánt formátumra. DWG esetén válassza ki azt a verziót, amelyet a másik iroda használ, vagy egy régebbit: AutoCAD 2018, 2013, 2010, 2007, 2004 vagy 2000.
3. Kattintson a {{ui:Mentés}} gombra.

A másolat letöltődik. Mostantól a {{key:Mod+S}} ebben a formátumban menti ezt a rajzot, és az új rajzok is ezzel kezdődnek ebben a böngészőben. A {{ui:Mégse}} vagy az {{key:Esc}} nem ment semmit, és az előzmények ezt írják: „Nincs mentve.”

Melyiket válassza:

- **DWG** őrzi a legtöbbet: rajzlapokat a nézetablakaikkal, valódi méreteket, sraffozási mintákat, réteg- és blokknevet úgy, ahogy beírta, és a többsoros szöveget többsoros szövegként. Az AutoCAD 2000 verziót a legtöbb program megnyitja; a 2004 és újabb verziók a valódi színeket is megőrzik.
- **DXF 2000** szöveges fájl, amely szinte mindent megőriz, amit a DWG: minden rajzlapot elrendezésként a nézetablakaival, valódi méreteket, sraffozási mintákat, valódi színeket, vonalvastagságokat, vonaltípusokat, és a neveket úgy, ahogy beírta. Megnyílik az AutoCAD 2000-ben és újabbakban, valamint a legtöbb CAD-programban. A többszörös vezetővonalak a vonalaikká, nyilaikká és szövegükké alakulnak. A 2000-es vagy újabb verzióban megnyitott DXF DXF 2000-ként mentődik.
- **DXF 2000 (binary)** ugyanazt a tartalmat tárolja, mint a DXF 2000, a formátum bináris alakjában: kisebb fájl, amely minden számot pontosan megőriz. Más programok bináris DXF-fájljai szövegesekként nyílnak meg, a bináris DXF-ből megnyitott rajz pedig binárisként mentődik vissza.
- **DXF R12** szinte bármely CAD-programban megnyílik. Megőrzi az első rajzlapot a nézetablakaival, és a CadCraft többi rajzlapját is. Egyszerűsíti az újabb dolgokat, például a többsoros szöveget és a sraffozásokat.

## Mit lát a másik iroda

DWG-ben:

- Vonalak, ívek, körök, ellipszisek, polivonalak, szöveg, többsoros szöveg, attribútumaikkal együtt a blokkok, tömör kitöltések, sraffozási minták és rétegek úgy, ahogy látja őket.
- Valódi méretek: a másik program újra méri őket, ha nyújtják.
- Minden rajzlap a papírjával és a nézetablakaival.
- Többszörös vezetővonalak többszörös vezetővonalakként. Az AutoCAD 2000 verzióban a valódi színek a legközelebbi szabványos színné válnak.

DXF R12-ben:

- Vonalak, ívek, körök, polivonalak, szöveg, blokkhivatkozások és méretek úgy, ahogy látja őket. A méretek valódi méretek maradnak.
- Rétegnevek nagybetűvel, a szóközök `_` jellel helyettesítve.
- Az első rajzlap a rajz papírterületeként, a nézetablakaival. A további rajzlapok `CCLAYOUT_1` nevű blokkokként érkeznek, és így tovább; ha minden rajzlapot elrendezésként igényelnek, készítsenek mindegyikről PDF-et is.
- A többsoros szöveg külön sorokként, az ellipszisek polivonalakként, a sraffozások körvonalakként.

Mindkét esetben a másolatban **nincs benne** mindaz, ami megnyitáskor a „Még nem jeleníthető meg” listán szerepelt, hacsak az előzmények nem jelzik, hogy megmaradt: a DWG OLE-objektumai és a modelltérbeli 3D-s testei DWG-ként mentéskor visszaíródnak. Tájékoztassa őket, és küldjön PDF-et is.

## Gyakori hibák

- **„A CadCraft DWG- és DXF-rajzokat nyit meg.”** A fájlnak más a kiterjesztése. Ellenőrizze, hogy `.dwg` vagy `.dxf` kiterjesztésű-e.
- **„Ezt a rajzot nem lehetett beolvasni.”** A DWG sérült, vagy olyan verzióban van, amelyet az olvasó nem kezel. Kérjen DXF-fájlt, vagy a DWG régebbi verzióban mentett változatát.
- **„Ez a bináris DXF egy objektum közepén véget ér.”** A fájl csonka vagy sérült. Írja be a RECOVER parancsot, hogy megnyissa, ami olvasható, vagy kérje újra a fájlt.
- **A mentett fájl neve `name (1).dwg` vagy `name (1).dxf`.** A böngésző ezt teszi, ha ugyanazzal a névvel már van fájl a mappában.
- **A másiknál régebbi program van, amely nem nyitja meg a DWG-t.** Mentse DWG formátumban a {{ui:Verzió}} {{ui:AutoCAD 2000}} beállítással, vagy {{ui:DXF R12}} formátumban: szinte bármely CAD-program megnyitja.
- **A rajz egyes részei hiányoznak.** A külső hivatkozású rajzok (xref) csak akkor töltődnek be, amíg ki nem választja a fájljaikat ({{cmd:XREF}}, `R`), a képek pedig a fájlnevükkel ellátott keretként látszanak.
