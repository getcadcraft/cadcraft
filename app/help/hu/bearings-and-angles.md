---
title: Irányszögek és szögek fok, perc, másodperc formában
summary: Írjon irányt geodéziai irányszögként, például N45°23'30"E alakban, vagy fok-perc-másodperc formában bármely szög kérdésénél, és az AUNITS paranccsal válassza ki, hogyan jelenítse meg a rajz a szögeket.
keywords: irányszög, irányszögek, geodéta, negyedirányú szög, N45E, fok perc másodperc, DMS, szög, irány, telek, telkek, kitűzés, sokszögvonal, AUNITS, ANGUNITS, szögformátum, polár, közvetlen távolság, DIST
from: af805567
---

Bárhol, ahol a CadCraft **szöget vagy irányt** kér, beírhat **negyedirányú szöget** vagy szöget **fokban, percben és másodpercben**, valamint egyszerű fokszámot is.

## Irányszögek

Az irányszög északot vagy délt nevez meg, utána egy legfeljebb 90°-os szöget, majd keletet vagy nyugatot:

| Beírja | Irány |
|---|---|
| `N45°23'30"E` vagy `N45d23'30"E` | 45°23'30" észak felől kelet felé |
| `S10-30-00W` vagy `S 10 30 W` | 10°30' dél felől nyugat felé (kötőjel vagy szóköz a részek között) |
| `N45.5E` | 45,5° észak felől kelet felé |
| `N`, `E`, `S`, `W` | pontosan észak, kelet, dél, nyugat |

A betűk bármilyen kis- vagy nagybetűvel állhatnak. Spanyolul az `O` is nyugatot jelent (oeste). A `d` és a `°` ugyanazt jelenti; a `'` a perc, a `"` a másodperc.

A 20 m hosszú telekhatárt az N45°23'E irányban úgy rajzolja meg, hogy elindítja a {{cmd:LINE}} parancsot, megadja az első pontot, majd beírja: `@20<N45d23'E`. Ugyanez működik a {{cmd:ROTATE}} szögkérdésénél, minden más szöget kérő kérdésnél, valamint a {{ui:Dinamikus bevitel}} szögmezőjében.

## Fok, perc, másodperc

`45°23'30"`, `45d23'30"`, `45d30'` vagy `45d` az X tengelytől az óramutató járásával ellentétes irányban mért szög. A `°` vagy a `d` szükséges: a `45-23-30` számtani műveletként értelmeződik (45 − 23 − 30). A perceknek és másodperceknek 60 alatt kell lenniük. A sima szám, akár számtani kifejezéssel (`360/7`), továbbra is működik.

## Hogyan jelennek meg a szögek

Írja be az {{cmd:AUNITS}} parancsot (vagy válassza a {{ui:Szögformátum}} lehetőséget a {{ui:Tulajdonságok}} › {{ui:Jelenlegi beállítások}} alatt), és válassza ki:

- **Tizedes fok** (alapértelmezés): `44.6083°`.
- **Fok, perc, másodperc**: `44°36'30"`.
- **Geodéta-irányszög**: `N45°23'30"E`.

A pontosság az {{cmd:AUNITS}}-hoz beírt számot követi: a 0 csak fokot mutat, a 2 perceket, a 4 másodperceket, az 5–8 pedig másodperc-tizedeseket is. A formátum megjelenik a {{cmd:DIST}} parancsban, az állapotsorban, a dinamikus bevitelben és a követési tippekben, valamint a {{ui:Tulajdonságok}} szögmezőiben (a szerkesztett mező bármelyik fenti alakot elfogadja). Ez egy visszavonási lépés, és DWG- és DXF-fájlokban is mentésre kerül (`$AUNITS`, `$AUPREC`); a LISP `AUNITS` és `AUPREC` néven olvassa és írja.
