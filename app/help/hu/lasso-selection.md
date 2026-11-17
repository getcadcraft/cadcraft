---
title: Lasszókijelölés
summary: Nyomja le, és húzzon szabadkézi körvonalat objektumok köré a kijelöléshez, ablakként, keresztező ablakként vagy kerítésként; húzás közben a Space billentyűvel válthat.
keywords: lasszó, lassomode, húzás, szabadkézi, kijelölés, kiválasztás, ablak, keresztező, kerítés, space, sokszög, érintés, toll, téglalap
from: 9ec6154d
---

## Amit megtanul

Hogyan jelöljön ki objektumokat azok köré rajzolva, és hogyan kapja vissza a téglalapot, ha arra van szüksége.

## Lasszó rajzolása

1. Rajzoljon néhány vonalat és kört egymás közelében.
2. Parancs futása nélkül nyomja le az egérgombot egy üres helyen, és húzzon néhány objektum köré, először **jobbra** mozdulva.
3. Engedje el.

Csak azok az objektumok lesznek kijelölve, amelyek teljesen a körvonalon belül vannak. A körvonal húzás közben folytonos vonalként látszik: ez egy ablak-lasszó.

## Ablak, keresztező és kerítés

Hogy mely objektumok kerülnek kijelölésre, az húzása első mozdulatától és a {{key:Space}} billentyűtől függ:

| Húzás | Lasszó | Kijelöli |
|---|---|---|
| Először jobbra | Ablak (folytonos körvonal) | Csak a **teljesen belül** lévő objektumokat |
| Először balra | Keresztező (szaggatott, zöld) | A körvonalon belül **és** a körvonalat érintő objektumokat |
| Húzás közben nyomja meg a {{key:Space}} billentyűt | Ablak, majd keresztező, majd kerítés | Kerítés (szaggatott, nem zárt útvonal): csak azokat az objektumokat, amelyeket az útvonal átmetsz |

1. Nyomja le egy üres helyen, és húzzon néhány objektum köré, először **balra** mozdulva. A körvonalat érintő objektumok is kijelölésre kerülnek.
2. Nyomja meg az {{key:Esc}} billentyűt.
3. Nyomja le és húzza újra; a gombot lenyomva tartva nyomja meg egyszer a {{key:Space}} billentyűt. A körvonal keresztezővé válik; a {{key:Space}} újabb megnyomására kerítés lesz belőle.

Az {{key:Shift}} billentyű az elengedéskor kiveszi az objektumokat a kijelölésből (a Beállításokban a „Objektumok kattintása: Hozzáadás” beállítással).

## Parancson belül

A lasszó ott működik, ahol a CadCraft azt kéri, hogy „Jelölje ki az objektumokat”: húzza meg, majd az Enter billentyűvel fejezze be. A {{cmd:STRETCH}} a keresztező lasszót ablakként kezeli, így a rajz L alakú részét egy lépésben nyújthatja meg.

A {{cmd:TRIM}} és az {{cmd:EXTEND}} másként használja a húzást: ott minden olyan darabot levág (vagy meghosszabbít), amelyet az útvonal átmetsz. Lásd: [Vágás és nyújtás](topic:trim-and-extend).

## A téglalap

Egy kattintás üres helyen, egy mozgatás és egy második kattintás mindig téglalap-ablakot (balról jobbra) vagy keresztezőt (jobbról balra) rajzol.

Ahhoz, hogy a húzás ismét téglalapot rajzoljon, nyissa meg a {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Húzás kijelöléshez}} menüpontot, és válassza a {{ui:Téglalap}} lehetőséget, vagy írja be a {{cmd:LASSOMODE}} parancsot, majd a `0`-t. A lasszóhoz írja be a {{cmd:LASSOMODE}} parancsot, majd a `1`-et. A választás ebben a böngészőben marad meg.

:::touch
Ugyanígy húzzon ujjal vagy tollal. A koppintás továbbra is egy objektumot választ ki.
:::

## Gyakori hibák

- **Nincs kijelölve semmi.** A lasszó ablak volt, és nem volt benne teljesen semmi. Kezdje a húzást balra, vagy nyomja meg a {{key:Space}} billentyűt húzás közben.
- **A húzás egy fogópontot mozgatott.** A kijelölt objektum fogópontjára nyomva a fogópont mozdul el. A lasszót üres helyről kezdje.
- **A Space befejezte a parancsot.** A {{key:Space}} csak addig vált lasszóra, amíg a gomb le van nyomva; egyébként az Enter billentyűként működik.
