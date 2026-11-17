---
title: Térképrétegek a rajz alatt
summary: Utcatérképek, légifelvételek vagy világfájllal ellátott kép megjelenítése a modelltér alatt, a rajz koordináta-rendszere szerint elhelyezve.
keywords: térkép, térképrétegek, maplayers, ml, geomap, alaptérkép, légifelvétel, műholdkép, csempék, xyz, wms, wmts, térképszolgáltatás, világfájl, koordináta-rendszer, epsg, state plane, utm, georeferálás, helyszínrajz, földrajzi helymeghatározás, földrajzi hely, geoadat, mentve, dwg, dxf
from: f103045f
---

## Amit elkészít

Helyszínrajz légifelvétel vagy utcatérkép fölé rajzolva, mindegyik a helyén.

## Mondja meg a CadCraftnak, hol van a rajz

1. Állítsa be a rajz mértékegységeit a {{ui:Tulajdonságok}} › {{ui:Mértékegységek}} menüpontban (például láb vagy méter).
2. Írja be a {{cmd:MAPLAYERS}} parancsot (vagy az `ML`-t), és nyomja meg az {{key:Enter}} billentyűt.
3. A {{ui:Hol van a rajz}} alatt írjon be egy nevet vagy EPSG-kódot a {{ui:Rendszer keresése}} mezőbe (például `2277` vagy `Texas Central`), majd válassza ki a {{ui:Rendszer}} listából.
4. Ha a rajz az adott rendszer saját koordinátáival készült, hagyja az elhelyezést 0-n. Ha nem, adjon meg egy rajzpontot ({{ui:Rajz X}}, {{ui:Rajz Y}}), azt, hogy ez a pont hol van a térképrácson ({{ui:Keleti koordináta}}, {{ui:Északi koordináta}}), és azt, hogy a rajz mennyire van elforgatva keletről ({{ui:Elforgatás (°)}}).
5. Kattintson az {{ui:Ennek a rendszernek a használata}} gombra.

## Réteg hozzáadása

1. Kapcsolja be a párbeszédpanel tetején a {{ui:Térképrétegek az internetről}} lehetőséget. Addig semmilyen szerver nem kap kérést; bekapcsolva a hozzáadott szerverek a képernyőn látható területet és az internetcímét látják, a rajzot soha.
2. A {{ui:Réteg hozzáadása}} alatt válassza ki, honnan származzon:
   - **Csempék (XYZ)**: csempecím `{z}`, `{x}` és `{y}` jelöléssel, egy név és a szolgáltató által kért forrásmegjelölés.
   - **WMS**, **WMTS** vagy **ArcGIS**: a szolgáltatás címe, majd a {{ui:Rétegek lekérése}} és egy réteg kiválasztása.
   - **Kép**: PNG vagy JPEG a világfájljával (és a `.prj` fájljával, ha van).
3. A réteg a rajz alatt jelenik meg. A forrásmegjelölése a rajz jobb alsó sarkában látszik.

A listában minden réteg elrejthető, tehető átlátszóbbá vagy kevésbé átlátszóvá, feljebb vagy lejjebb mozgatható, vagy eltávolítható.

A rendszer vagy a rétegek minden változtatása egy {{cmd:UNDO}} lépés.

## Mentve a rajzzal

A koordináta-rendszer és a rétegek listája a rajzban tárolódik, amikor DWG vagy DXF formátumban menti, és megnyitáskor visszatér, bármely gépen. A fájlokból származó képek nincsenek mentve: megnyitás után adja hozzá őket újra. A {{ui:Térképrétegek az internetről}} kapcsoló nincs a rajzban mentve: ez a böngészőhöz tartozik, így egy másik személytől kapott rajz addig nem kér semmit egyetlen szervertől sem, amíg a felhasználó maga be nem kapcsolja.

Mit látnak más programok:

| Mentve mint | A rajz helye | A térképrétegek |
|---|---|---|
| DWG 2010, 2013 vagy 2018, DXF 2000 | A szokásos módon írva, ahogy a programok a rajz földrajzi helyét olvassák: a rendszer EPSG-kódja, egy rajzpont és az, hogy hol van a térképrácson, a mértékegységek és az észak. | Csak CadCraft |
| DWG 2000, 2004 vagy 2007, DXF R12 | Csak CadCraft (a CadCraft mentéskor ezt jelzi) | Csak CadCraft |

- **Ellenőrizve:** az ODA File Converter hiba nélkül olvassa a helyet, a DXF-könyvtár (ezdxf) pedig pontosan olvassa az EPSG-kódot és az elhelyezést.
- **Még nincs ellenőrizve:** hogy más tervezőprogramok felismerik-e a rendszert az EPSG-kódja alapján. Az a program, amely a rendszereket más néven tartja nyilván, előfordulhat, hogy helyzet nélkül jeleníti meg a rajzot.
- Más programok egy `CADCRAFT_GEO` nevű blokkot mutatnak a blokklistában. Ez a CadCraft saját másolata a rendszerről és a rétegekről; soha nincs elhelyezve a rajzban. Hagyja ott.

## Más programok rajzai

Ha egy másik programból származó rajznak van földrajzi helye, a CadCraft beolvassa:

- Ha EPSG-kódot nevez meg, a {{ui:Hol van a rajz}} mező azt a rendszert mutatja, és a térképrétegek annak szerint kerülnek elhelyezésre.
- Ha a CadCraft nem ismeri a rendszert (a másik program saját nevét, helyi rácsot vagy léptéktényezőt), a helyet nem használja, de megőrzi, és az eredeti formában menti vissza, hogy a másik program továbbra is megtalálja. A {{ui:Hol van a rajz}} mezőben válasszon rendszert, hogy lecserélje.

:::note
A térképrétegek csak a képernyőn jelennek meg: nem nyomtatódnak ki. Csak olyan térképszolgáltatást használjon, amelynek feltételei ezt megengedik, és tartsa láthatóan a forrásmegjelölését.
:::
