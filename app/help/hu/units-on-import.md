---
title: Mértékegységek importáláskor: a fájl megadja a mértékegységeit, vagy előbb rákérdezünk
summary: Ha a rajzba behozott fájl megadja a mértékegységeit, a CadCraft átváltja és közli ezt. Ha nem, a CadCraft mielőtt bármit elhelyezne, rákérdez, és megjegyzi a választását ahhoz a fájlhoz.
keywords: mértékegységek, importálás, beszúrás, xref, csatolás, XATTACH, INSERT, OBJ, DWG, DXF, pontfelhő, könyvtári elem, milliméter, méter, hüvelyk, láb, lépték, rossz méret, túl nagy, túl kicsi, 1000-szeres, kérdés, megjegyzett, INSUNITS
from: 558f1293
---

## Mit fog csinálni

Hozzon be egy fájlt egy rajzba, és legyen biztos benne, hogy a megfelelő méretben érkezik.

## Lépések

1. Hozza be a fájlt szokás szerint: `INSERT` › Fájl, `XATTACH`, `POINTCLOUDATTACH`, vagy a {{ui:Fájlok}} a Könyvtár panelen.
2. Ha a fájl megadja a mértékegységeit, nem kérdeznek semmit. A parancssor kiírja, milyen mértékegységeket ad meg a fájl, és azt a léptéket, amelyet akkor használ, ha azok eltérnek a rajzétól.
3. Ha nem, egy párbeszédpanel kérdezi a fájl **mértékegységét**. Válassza ki, mit jelent egy egység a fájlban, és kattintson az {{ui:Ezek a mértékegységek használata}} gombra. Nincs semmi elhelyezve, amíg nem válaszol.
4. A {{ui:Mégse}} (vagy az {{key:Esc}}) nem hoz be semmit.

## Mely fájlok adják meg a mértékegységüket

- **DWG és DXF**: a rajz beillesztési mértékegységei (`$INSUNITS`). Ha nincsenek, rákérdeznek.
- **Pontfelhők**: a koordináta-rendszerrel rendelkező LAS és LAZ, valamint az E57, PTX és PLY megadja a sajátját. A többiről rákérdeznek.
- **OBJ**: soha nem adja meg a mértékegységeit. Rákérdeznek.
- **glTF és GLB**: méterben, a formátum saját szabálya szerint.
- **Képek**: nincs saját méretük. Az `IMAGEATTACH` kéri a szélességet, és felkínálja azt a szélességet, amelyet korábban arra a fájlra megadott.
- **Szkennek**: az a szkenner, amely megadja a sűrűségét (pont hüvelykenként), a rajz mértékegységében valódi méretében érkezik; az `SCANATTACH` továbbra is kéri a szélességet.
- **A Pontfelhők bővítmény**: akkor kérdez, amikor olyan felhőt épít, amelynek fájlja nem ad meg mértékegységet, és a felhő számait a hordozott mértékegységgel jelöli.

## Jó tudni

- Egy DWG vagy DXF megnyitása saját rajzként nem kérdez semmit: a parancssor megmondja, milyen mértékegységeket ad meg a fájl, vagy hogy egyet sem. A Tulajdonságok állítja be a rajz mértékegységeit.
- Ha ennek a rajznak sincs mértékegysége, a fájl nem konvertálható: szám szerint kerül elhelyezésre, és a parancssor ezt jelzi.
- A válasz arra a fájlra emlékezik ezen a számítógépen, minden CadCraft-alkalmazásban. Legközelebb, amikor ez a fájl érkezik, nem kérdeznek, és a parancssor jelzi, hogy a megjegyzett mértékegységeket használták.
- Ha újra rákérdezést szeretne: a parancskatalógus ({{key:Mod+K}}) › **Újra rákérdezés az importált fájlok mértékegységeire**.
