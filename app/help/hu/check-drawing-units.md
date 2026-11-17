---
title: Ellenőrizze, milyen mértékegységben van a rajz
summary: Nézze meg, hogy a megnyitott rajz milliméterben, hüvelykben vagy más mértékegységben készült-e, ellenőrizze méréssel, és tudja meg, miért nevezhet meg egy másik program más mértékegységet ugyanahhoz a DXF-hez.
keywords: mértékegységek, milyen mértékegység, melyik mértékegység, mértékegység ellenőrzése, milliméter, mm, hüvelyk, metrikus, angolszász, DXF mértékegységek, STEP DXF-re, rossz mértékegység, hüvelyk vagy mm, INSUNITS, MEASUREMENT, rajz mértékegységei, PartCraft DXF
from: c0ee75bb
---

## Amit elvégez

Derítse ki, mit jelent egy egység a megnyitott rajzon, és győződjön meg arról, hogy a leolvasott számok a várt méretűek.

## Lépések

1. Nyissa meg a rajzot, majd nyomja meg az {{key:Esc}} billentyűt, hogy ne legyen semmi kijelölve, a {{ui:Modell}} lapon.
2. A jobb oldali panelen, a {{ui:Jelenlegi beállítások}} alatt olvassa le a {{ui:Mértékegységek}} értékét. Ez megmondja, mit jelent egy rajzegység: {{ui:Milliméter}}, {{ui:Hüvelyk}}, {{ui:Láb}} és így tovább. A PartCraftból mentett DXF-fájl értéke {{ui:Milliméter}}.
3. Ellenőrizze méréssel valami olyasmin, aminek ismeri a méretét. Írja be a {{cmd:DIST}} parancsot, és jelölje ki egy él vagy egy furat két végpontját. Ha egy ismert, 25 mm-es alkatrész `25`-öt mutat, a rajz milliméterben van; ha körülbelül `0.98`-at, akkor hüvelykben.

A {{ui:Mértékegység nélkül}} azt jelenti, hogy a fájl nem mondja meg a mértékegységet. Ilyenkor a CadCraft a papír mértékegységét használja (ISO papíron milliméter, US papíron hüvelyk), a számok pedig csak annyira helyesek, amennyire a fájlt író program volt.

## Ha a mértékegység téves

A {{ui:Mértékegységek}} módosítása **nem méretez át semmit**: a számok ugyanazok maradnak, csak az jelentésük változik. Ezért csak akkor állítsa be, ha az valóban azt mondja ki, mi a rajz. Ha a számok milliméterek, a {{ui:Mértékegységek}} pedig {{ui:Hüvelyk}}-et mutat, válassza a {{ui:Milliméter}} értéket. Ha a geometriát más mértékegységben szeretné, méretezze át a {{cmd:SCALE}} paranccsal (25,4 a hüvelykről milliméterre, 1/25,4 az ellenkező irányba), majd állítsa be a {{ui:Mértékegységek}} értéket.

A hosszúságok írásmódja (tizedes, láb és hüvelyk, törtek) külön beállítás, a {{ui:Hosszformátum}}: lásd [Mértékegységek, papírméretek és léptékek](topic:units-papers-scales).

## Miért mondhat egy másik program hüvelyket

A DXF a mértékegységét a fejlécében adja meg. A legrégebbi DXF-típus, az R12 nem tartalmazott mértékegység-változót, ezért a szigorúan R12-t olvasó program figyelmen kívül hagyja az ott írt értéket, és a saját alapértelmezését használja, ami gyakran a hüvelyk. A geometria a fájlban mindkét esetben ugyanaz; csak a címke különbözik. A PartCraft R12-es DXF-fájlokat ír, és a mértékegységet kétféleképpen adja meg (`$INSUNITS` 4 és `$MEASUREMENT` 1), hogy több program helyesen olvassa be. Ha egy program továbbra is hüvelykeket mutat, a fájl megnyitásakor állítsa a mértékegységét milliméterre.

Ha egy fájlt nem megnyit, hanem beemel a rajzba, a mértékegysége átváltódik: lásd [Mértékegységek beimportálásnál](topic:units-on-import).
