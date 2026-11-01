---
title: Tanulás egy mintarajzból
summary: Nyissa meg a CadCraft mintaházát vagy a minta kivitelezés utáni felmérést, és járja végig a rajzlapjait, a rajzfejet, a méreteket és a rétegeket.
keywords: minta, minták, példarajz, tanulás, oktatóanyag, végigvezetés, rajzfej, rajzlapok, kivitelezés utáni felmérés, építészeti készlet, minta megnyitása
from: aa1f960a
---

## Amit megtanul

Hogyan épül fel egy kész rajzkészlet: modelltér, rajzlapok léptékhelyes nézetablakokkal, rajzfej attribútumokkal, méretek lábban és hüvelykben, valamint milliméterben, rétegek. A minták a CadCraft sajátjai, és bármire szabadon felhasználhatók (CC0).

## Minta megnyitása

1. A bal oldali panelen a {{ui:Rajz}} alatt kattintson a {{ui:Minta megnyitása}} gombra (vagy írja be: {{cmd:SAMPLES}}; a szalagos stílusokban a {{ui:Fájl}} menüben található).
2. Kattintson a {{ui:Megnyitás}} gombra a **Mintaház** mellett. Saját lapon nyílik meg, így a munkája nyitva marad.

## Körülnézés a modellben

1. Kattintson a {{ui:Kiterjedés}} gombra (vagy írja be: `ZOOM`, majd `E`): látható az alaprajz, az elölnézet, egy metszet és egy falrészlet.
2. A {{ui:Rétegek}} között kattintson az `A-ANNO-DIMS` melletti szemre a méretek elrejtéséhez, és még egyszer a megjelenítéséhez.
3. Kattintson egy ajtóra: a Tulajdonságok egy `DOOR-32` blokkhivatkozást mutat. Az ajtók és ablakok blokkok, elforgatva és tükrözve elhelyezve.

## A rajzlapok

1. Kattintson a rajz alatt az {{ui:A-101 FLOOR PLAN}} lapra: egy ARCH D rajzlap egy 1/4" = 1'-0" léptékű nézetablakkal.
2. A modellen a nézetablakon át való dolgozáshoz kattintson duplán a nézetablakon belül; a visszatéréshez kattintson duplán rajta kívül.
3. Az {{ui:A-501 DETAILS}} a falrészletet mutatja 1 1/2" = 1'-0" léptékben: ugyanaz a modell, más lépték.

## A rajzfej

1. Bármelyik rajzlapon kattintson duplán a rajzfejre: az {{ui:Attribútumok szerkesztése}} felsorolja a PROJECT, TITLE, SCALE, DATE, DRAWN és SHEET mezőket.
2. Írja a DRAWN mezőbe a monogramját, és kattintson az {{ui:OK}} gombra.
3. Ha magát a rajzfejet szeretné módosítani minden rajzlapon, jelölje ki, és válassza a {{ui:Blokkok}} › {{ui:Továbbiak}} › {{ui:Szerkesztés helyben}} parancsot. Lásd: [Attribútumok](topic:attributes).

## A kivitelezés utáni felmérés

Nyissa meg ugyanígy a **Minta kivitelezés utáni felmérést**. A `SCAN-SLICE` rétegen lévő szürke pontok a letapogatás egy szeletét adják; az `AB-WALL` rétegen lévő falakat rájuk követték. A keleti fal 35 mm-rel eltér a derékszögtől: a méretek ezt kétszer is kimondják, milliméterben (`AB-DIMS-MM`) és lábban-hüvelykben (`AB-DIMS-FTIN`, ugyanazok a hosszak méretarány-átszámítással). A `REV-1` rétegen lévő piros felhők jelölik, amit a felmérés talált.

## Következő

- [A méretszöveg méretének módosítása](topic:change-dimension-text-size)
- [Plottolás PDF-be](topic:plot-pdf): plottolja az {{ui:A-101 FLOOR PLAN}} lapot.
