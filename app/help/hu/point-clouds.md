---
title: Kivitelezett vonalak felrajzolása pontfelhőn
summary: Csatoljon lézerszkennelést (LAS, LAZ, E57, PLY, PCD, PTX, PTS vagy XYZ) a rajz alá, vágjon át rajta alaprajzi szeletet, és rajzoljon falakat, ajtókat és oszlopokat a pontjaira illesztve.
keywords: pontfelhő, pointcloudattach, pcattach, pointcloud, pc, lézerszkennelés, szkennelés, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, kivitelezett állapot, kivitelezett, felmérés, szelet, alaprajzi metszet, csomópont, fogás, felrajzolás, meglévő állapot
from: b0e0aae5
---

## Mit fog létrehozni

Egy kivitelezett alaprajz: egy beszkennelt épület falai vonalakkal és polivonalakkal, pontosan a szkennelés pontjaira illesztve.

## A felhő csatolása

1. Ha a rajznak nincs mértékegysége, először állítsa be (a {{ui:Mértékegységek}} mező a {{ui:Tulajdonságok}} panelen, vagy {{cmd:UNITS}}): a CadCraft a felhőt a saját mértékegységeiből a rajz mértékegységeire konvertálja.
2. Írja be: {{cmd:POINTCLOUDATTACH}} (vagy `PCATTACH`), majd nyomja meg az {{key:Enter}} billentyűt. Válasszon egy `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` vagy `.xyz` fájlt (a pontfelhő-formátumokról szóló témakör leírja, mit hoz magával az egyes formátum, és mit kell exportálni a szkenner saját szoftveréből). A fájlt megnyithatja a {{ui:Megnyitás}} gombbal is, rádobhatja az oldalra, vagy elküldheti a BIM-megjelenítő {{ui:Felrajzolás a CadCraftban}} parancsából.
3. `A felhő bal alsó sarka`: nyomja meg az {{key:Enter}} billentyűt, hogy a fájl saját koordinátái maradjanak (a projekthez illesztett szkennelés a rajzhoz igazodik), vagy kattintson arra a pontra, ahová a bal alsó sarka kerül.
4. A parancssor megmutatja, hány pont látszik. A nézet ráközelít a felhőre; a felhő a vonalas rajz alatt van, minden pontja felülnézetből látszik.

## Alaprajzi szelet vágása és felrajzolás

1. Írja be: {{cmd:POINTCLOUD}} (vagy `PC`), majd a `S` betűt a {{ui:Szelet}} lehetőséghez. Csak a felhő legalacsonyabb pontja fölötti, 1,2 m vastag sáv látszik: a falak, az ajtónyílások és az oszlopok alaprajzként olvashatók.
2. A `H` a vágás magasságát, a `T` a vastagságát állítja be (rajzegységben). Az {{key:Enter}} billentyű befejezi a parancsot.
3. Kapcsolja be az objektumfogást ({{key:F3}}), a fogások közül pedig a {{ui:Csomópont}} fogást. Rajzoljon a {{cmd:LINE}} vagy a {{cmd:PLINE}} paranccsal: a kurzor a szelet pontjaihoz illeszkedik, a címkéje „Pontfelhő”. A rajz saját végpontjai, felezőpontjai és középpontjai elsőbbséget élveznek a felhővel szemben, így a polivonal zárása az első pontjára illeszkedik.
4. A vágási magasság módosításával másik szintet is felrajzolhat, majd a szelet kikapcsolásával (ismét `S`) a teljes felhőt láthatja.

## További beállítások

A {{cmd:POINTCLOUD}} parancsban: a `C` a pontokat a fájl színei, a magasság, az intenzitás, a LiDAR-osztály vagy egyetlen szín szerint színezi; az `SI` a pontméretet állítja be; a `V` elrejti vagy megjeleníti a felhőt; a `Z` ráközelít; a `D` leválasztja a felhőt.

A 3D lap is megjeleníti a felhőt, a legalacsonyabb pontját a talajon, ugyanazzal a szelettel.

:::note
A felhő nem része a rajznak: nem mentődik a DWG vagy DXF fájlba, a visszavonás nem változtatja meg. A rajz későbbi megnyitásakor csatolja újra. A fájlok ezen a számítógépen olvasódnak be, semmi nem töltődik fel. A nagyon nagy szkenneléseket egyenletesen 2 millió pontra ritkítjuk. Az E57 fájlok jelenleg legfeljebb 6 millió pontig és 512 MB-ig nyílnak meg: a nagyobb szkenneléseket LAS vagy LAZ formátumban exportálja.
:::

## Plottolás

A {{cmd:PLOT}} a felhőt a rajzzal együtt nyomtatja, a vonalas rajz alatt: a modelltér plottolásakor ({{ui:Mindent}} esetén a felhő területe is benne van), és minden rajzlap minden nézetablakában, valamint a PDF, a PNG, az SVG és a nyomtatóra küldött példány esetén. Azt nyomtatja, ami a képernyőn látszik: a szeletet, ha a szelet be van kapcsolva, az Ön által választott színeket, és elrejtve marad, ha el volt rejtve. Papíron a pontok kis négyzetekké válnak, minden négyzetben a legmagasabb pont érvényesül, a plottolás pedig legfeljebb mintegy 400 000 pontot tartalmaz (a nagyon sűrű felhő nagyobb négyzetekkel nyomtatódik). A felhő csak abban a rajzban plottolódik, amelyhez csatolták; a papírtérben magában soha nem nyomtatódik, csak nézetablakon keresztül.

## Több szkennelés

A különböző helyekről készült szkenneleket egyetlen keretbe lehet illeszteni, ICP-vel finomítani, és egyetlen LAS vagy E57 fájlként exportálni: lásd [Több szkennelés egyesítése egy keretbe](topic:register-scans).
