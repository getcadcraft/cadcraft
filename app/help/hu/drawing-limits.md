---
title: Rajzhatárok beállítása
summary: A LIMITS téglalapot állít be a rajzhoz, a rács kitölti, a ZOOM All megmutatja, és bekapcsolt határok esetén a határon kívüli pontokat elutasítja. DWG- és DXF-fájlokban mentődnek.
keywords: határok, rajzhatárok, LIMITS, LIMMIN, LIMMAX, LIMCHECK, rács, határon kívül, lapméret, rajzterület, ZOOM All, határvonal
from: 9e97b30d
---

A **rajzhatárok** egy téglalap, amely megmondja, mekkora a rajz szánt mérete: az a terület, amelyben rajzolni tervez, például egy 420 × 297-es lap. Új rajznak nincs ilyen, így a rács és a rajzterület korlátlan, mint korábban.

## Beállítás

Írja be a {{cmd:LIMITS}} parancsot, és válaszoljon:

- `Specify lower left corner or [ON/OFF] <0,0>`: egy pont, vagy az {{key:Enter}} a jelenlegi megtartásához.
- `Specify upper right corner <420,297>`: egy pont, vagy az {{key:Enter}} a jelenlegi megtartásához. Az elsőnél feljebb és jobbra kell lennie.

Vagy az első kérdésre írja be az `ON` vagy az `OFF` értéket, így a téglalap módosítása nélkül kapcsolhatja ki vagy be az ellenőrzést. A sarkok beállítása egy visszavonási lépés, az ON és az OFF is az.

## Mit tesznek

- **A rács kitölti a határokat**, és a szélüknél megáll. Ez a terület képe, ezért kapcsolja be a {{ui:Rács}} opciót, hogy lássa.
- A **ZOOM All** ({{cmd:ZOOM}}, majd {{ui:Mind}}) együtt mutatja a határokat és a rajzot; a {{ui:Kiterjedés}} továbbra is csak a rajzot mutatja.
- **Ha a határok ON állapotban vannak**, a határon kívül beírt vagy kattintott pontot a rendszer `**Outside limits` üzenettel elutasítja, és a parancssor megmarad. Ez azokra a parancsokra vonatkozik, amelyek objektumokat hoznak létre: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, a méretezési parancsok és még néhány. A csak mozgató, kijelölő vagy mérő parancsokra nem vonatkozik, és a beillesztésre, a fogópont-húzásra vagy a LISP-rutin által létrehozott objektumra sem: a határok rajzolási útmutatók, nem falak. Ha a határok OFF állapotban vannak, semmit nem utasít el.
- A már határon kívül lévő objektumok a helyükön maradnak.

## Fájlokban és LISP-ben

DWG- és DXF-fájlban `$LIMMIN`, `$LIMMAX` és `$LIMCHECK` néven mentődnek. Egy másik programból származó fájl, amelynek csak az adott program alapértelmezett határai vannak (0,0 és 12,9 vagy 420,297, az ellenőrzés kikapcsolva), határok nélkül nyílik meg, így a rácsa nem szorul egy kis téglalapba; a saját határokkal rendelkező vagy bekapcsolt ellenőrzésű fájl megtartja azokat. LISP-ben a `(getvar "LIMMIN")`, a `LIMMAX` és a `LIMCHECK` olvassák, a `setvar` pedig írja őket, egy visszavonási lépésként.

A határok a modelltérhez tartoznak. A lapnak (elrendezés) saját papírmérete van.
