---
title: Pontfelhő-formátumok: mi csatolható, és mit kell exportálni
summary: Mely lézeres beolvasási fájlok csatolhatók a rajz alá, melyek a szkennergyártók saját formátumai, és mit exportáljon a szkenner szoftveréből, hogy a beolvasás itt csatolható legyen.
keywords: pontfelhő, pointcloudattach, pcattach, lézeres beolvasás, beolvasás, formátumok, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportálás, nem nyitható meg, nem olvasható
from: 20a5f4ee
---

## Mi csatolható itt

Ezeket a {{cmd:POINTCLOUDATTACH}} paranccsal, a {{ui:Megnyitás}} gombbal vagy az oldalra dobva csatolhatja (lásd a valós állapot vonalainak pontfelhőn való rajzolásáról szóló témakört):

| Formátum | Kiterjesztés | Mit olvas be |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pontok, színek, intenzitás, LiDAR-osztályok, a koordináta-rendszer és annak mértékegységei. LAZ legfeljebb 1 GB. |
| E57 | `.e57` | A fájl minden beolvasása, mindegyik a helyzete szerint elhelyezve; színek, vagy ha nincsenek színek, intenzitás; méter. A fájlban lévő képek kimaradnak (ezt jelzi). Egyelőre legfeljebb 6 millió pont és 512 MB: a nagyobb beolvasásokat LAS vagy LAZ formában exportálja. |
| PLY | `.ply` | Szöveges és bináris (mindkét bájtsorrenddel): a csúcsok x, y, z koordinátái, színei és intenzitása. A lapok kimaradnak (ezt jelzi). |
| PCD | `.pcd` | Szöveges és bináris: x, y, z, összecsomagolt vagy külön színek, intenzitás. A tömörített PCD fájlokat még nem olvassa: mentse binárisan vagy szövegesen. |
| PTX | `.ptx` | Egy vagy több beolvasás, mindegyik a saját transzformációjával elhelyezve; a szkenner által nem mért pontok kimaradnak. Méter. |
| PTS, XYZ | `.pts`, `.xyz` | Szöveges: x, y, z, az intenzitással és színekkel, ha az oszlopok megvannak. |

## Fájlok, amelyeket csak a szkenner szoftvere olvas

Egyes beolvasási fájlok a szkennergyártó saját formátumai, nyilvános leírás és nyílt olvasó nélkül. A CadCraft nem tudja beolvasni őket: csatolásukkor kiírja, mi a fájl, és mit kell tennie a parancssorban. Exportálja a beolvasást a gyártó szoftveréből E57 vagy LAS (vagy PTX, PTS) formátumban, majd csatolja az exportált fájlt.

| Fájl | Kiterjesztés | Exportálja innen |
|---|---|---|
| ReCap projekt | `.rcp` | ReCap: nyissa meg a projektet, és exportálja. A projekt csak a beolvasásaira mutat, így a `.rcp` önmagában történő másolása nem ad pontokat. |
| ReCap beolvasás | `.rcs` | ReCap: nyissa meg azt a projektet, amelyhez a beolvasás tartozik, és exportálja. |
| FARO beolvasás | `.fls` | FARO SCENE. |
| Leica beolvasás | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble beolvasás | `.tzf` | Trimble RealWorks vagy Trimble Business Center. |
| Z+F beolvasás | `.zfs` | Z+F LaserControl. |

:::tip
Ha az exportálás formátumot kér, a LAS vagy LAZ őrzi meg mindazt, amit a CadCraft használ (színek, intenzitás, osztályok, a koordináta-rendszer és annak mértékegységei), a legkisebb fájlban.
:::

## Miért nem olvassuk ezeket a fájlokat

Ezek a formátumok nincsenek közzétéve, és egyetlen módon olvashatók: a gyártó saját szoftverkönyvtárával, annak saját feltételei szerint. A CadCraft csak olyan formátumokat olvas, amelyeket a saját kódjával tud beolvasni az Ön gépén, így a beolvasást csatoláskor sehova nem kell elküldeni.
