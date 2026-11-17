---
title: A rajz rendszerezése osztályokkal
summary: Az osztályok egy második módon rendezik az objektumokat, rétegeken átívelve (Lighting-Fixtures-Spot): megjeleníti és elrejti őket, adhat nekik színt, vonaltípust, vonalvastagságot, kitöltést és szövegstílust, amelyet az objektumok „osztály szerint” átvehetnek, és beállíthatja, melyik osztályba kerüljenek az új objektumok.
keywords: osztály, osztályok, CLASSES, CLS, CLASS, osztály szerint, ByClass, aktív osztály, létrehozáskor használ, Nincs, tervezési réteg, rétegskála, magasság, Vectorworks
from: 672de9cb
---

A rétegek azt mutatják meg, *hol* van egy objektum a rajzon; az osztályok azt, hogy *mi* az. A `Level 1` rétegen lévő fal lehet a `Walls-Exterior` osztályban, a `Ceiling` rétegen lévő spotlámpa pedig a `Lighting-Fixtures-Spot` osztályban. Egyszerre elrejtheti az összes lámpát minden rétegen, vagy vastagabbra nyomtathatja az összes külső falat anélkül, hogy bármit áthelyezne rétegek között.

Minden objektum a **Nincs** osztályban kezdi. Saját osztályok nélküli rajz pontosan úgy működik, mint korábban.

## Az Osztályok panel megnyitása

Írja be a `CLASSES` (vagy `CLS`) parancsot, majd nyomja meg az {{key:Enter}} billentyűt, vagy válassza a {{ui:Osztályok…}} lehetőséget a {{ui:Nézet}} csoport {{ui:Továbbiak}} menüjében. A panel a rajz fölött nyílik meg, és a rajzolás közben is nyitva marad.

- **Új osztály:** írja be a nevét a doboz tetején, és nyomja meg az {{key:Enter}} billentyűt. A `-` szintet hoz létre: a `Lighting-Fixtures-Spot` a `Lighting-Fixtures` alá kerül, az pedig a `Lighting` alá; a hiányzó szinteket automatikusan hozzáadjuk.
- **Megjelenítés vagy elrejtés:** az osztály melletti szem. Az osztály elrejtése elrejti az alatta lévő összes osztályt, a képernyőn és a papíron is.
- **Aktív osztály:** a kerek gomb. Az újonnan rajzolt objektumok az aktív osztályba kerülnek.
- **Osztály kiválasztása:** kattintson a nevére. A lista alatti gombok és beállítások erre hatnak.

A sor végén lévő szám azt mutatja, hány objektum van az osztályban (a modellben, a rajzlapokon és a blokkdefiníciókon belül egyaránt).

## Objektumok osztályba helyezése

Jelölje ki az objektumokat, válasszon osztályt a panelen, majd válassza az {{ui:Osztály beállítása}} lehetőséget. Előbb jelölje be az {{ui:Osztályról}} opciót, hogy az objektumok színüket, vonaltípusukat, vonalvastagságukat, kitöltésüket és szövegstílusukat az osztályból vegyék át. A következőket is megteheti:

- kijelölt objektumokkal írja be a `CLASS` parancsot, majd adjon meg egy osztálynevet (az új név új osztályt hoz létre);
- kijelölés nélkül írja be a `CLASS` parancsot az aktív osztály beállításához; a `?` kilistázza az osztályokat a darabszámukkal;
- használja a Tulajdonságok panel {{ui:Osztály}} szakaszát: az osztályt, valamint a {{ui:… osztály szerint}} kapcsolókat a színhez, a vonaltípushoz és a vonalvastagsághoz (sraffozásnál a kitöltéshez, szövegnél a szövegstílushoz);
- válasszon osztály szerint a `QSELECT` paranccsal: válassza a {{ui:Osztály}} tulajdonságot.

A {{ui:Az objektumainak kijelölése}} kijelöli a kiválasztott osztály összes objektumát a megnyitott rajzlapon (vagy a modellben).

## Hogyan rajzolódik ki egy objektum: objektum, osztály, réteg

Egy objektum színe, vonaltípusa, vonalvastagsága, kitöltése és szövegstílusa lehet **osztály szerint**, ahogy réteg szerint is lehet. A CadCraft ebben a sorrendben nézi:

1. Az objektum saját értéke, hacsak ez nem osztály szerinti.
2. Az osztály értéke, ha az objektum osztály szerint veszi át, és az osztálynak van értéke.
3. A réteg értéke.

Az az osztály, amelynek színe (vagy vonaltípusa …) **Nincs beállítva**, az objektumot a rétegéhez adja tovább. Válasszon osztályt, és a gombok alatt állítsa be a {{ui:Szín}}, a {{ui:Vonaltípus}}, a {{ui:Vonalvastagság}}, a {{ui:Kitöltés (sraffozások)}} és a {{ui:Szövegstílus}} értékét. Jelölje be a {{ui:Létrehozáskor használ}} opciót, hogy az ebben az osztályban rajzolt új objektumok mindet osztály szerint vegyék át.

A panel minden módosítása egy visszavonási lépés.

## Átnevezés és törlés

Az {{ui:Átnevezés}} helyben szerkeszti a nevet: az {{key:Enter}} megtartja, az {{key:Esc}} kilép. Az alatta lévő osztályok követik (a `Lighting-Spot` `Light-Spot` lesz, ha a `Lighting` `Light` lesz), és ugyanígy követik az objektumaik és a nézetablak-felülírásaik is.

A {{ui:Törlés}} eltávolítja az osztályt és az alatta lévő összes osztályt. Az objektumaik a **Nincs** osztályba kerülnek. Egy {{ui:Visszavonás}} mindent visszaállít. A **Nincs** osztály nem nevezhető át és nem törölhető.

## Tervezési rétegek

A {{ui:Tervezési rétegek}} alatt minden réteghez tartozhat léptékarány (`1:50`) és magasság. A tervezési réteg közönséges réteg: a modelltér és a rajzlapok a régi módon működnek, a léptékarány és a magasság pedig a rajzzal együtt marad meg azoknak az eszközöknek, amelyek majd használják.

## DWG- és DXF-fájlokban

Az osztályok minden olyan DWG-verzióban megmaradnak, amelyet a CadCraft ment, és a DXF-ben is (R12 és 2000). Minden objektum osztálya a saját bővített adata (`CADCRAFT_CLASS` alkalmazás), így az AutoCAD és más programok az objektummal együtt megőrzik. Az osztálylistát, a színeket és a láthatóságot egy használatlan, `CADCRAFT_CLASSES` nevű blokk tartalmazza; ha egy másik program ezt a blokkot kitisztítja, a CadCraft akkor is megtalálja minden objektum osztályát, és az osztályok alapértelmezett beállításokkal jönnek vissza.

Más programok nem ismerik az osztályokat: minden objektumot a saját vagy a rétegének értékével rajzolnak ki.

Lásd még: [Osztályfelülírások nézetablakban](topic:viewport-overrides) és [A rajz rendszerezése rétegekkel](topic:layers).
