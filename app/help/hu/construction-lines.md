---
title: Szerkesztővonalak és sugarak
summary: Rajzoljon olyan vonalakat, amelyek véget nem érve futnak (XLINE), vagy egy pontból egy irányba (RAY), hogy a dolgokat egy vonalba igazítsa, majd vágja le őket hagyományos vonalakká.
keywords: xline, ray, szerkesztővonal, szerkesztővonalak, végtelen vonal, segédvonal, hivatkozóvonal, felezés, eltolt vonal, elrendezési vonalak, xl, sugár
from: b6c398bc
---

## Amit megtanul

Hogyan rajzoljon szerkesztővonalakat a rajzolás közben, hogy a dolgokat egy vonalba igazítsa: két ponton át, vízszintesen vagy függőlegesen, szögben, két irány felezőjében vagy egy vonaltól megadott távolságban. És hogyan vágja le őket hagyományos vonalakká, miután betöltötték szerepüket.

## Két fajta

- A **szerkesztővonal** ({{cmd:XLINE}}) mindkét irányban véget nem érve fut.
- A **sugár** ({{cmd:RAY}}) egy pontból indul, és egy irányban véget nem érve fut.

Mindkettő a nagyítástól függetlenül a teljes rajzterületen átrajzolódik, osztott képernyőn és a lapon lévő nézetablakokban is. A {{ui:Kiterjedés}} kihagyja őket, így a rajz nagyítása továbbra is a megrajzolt elemeket fogja közre.

## Szerkesztővonalak rajzolása

1. Kattintson a {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Szerkesztővonal}} elemre, vagy írja be az `XL` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson egy pontra. Minden további kattintás egy szerkesztővonalat ad hozzá, amely átmegy az első ponton és azon a ponton, ahova kattintott.
3. A befejezéshez nyomja meg az {{key:Enter}} billentyűt.

Az első pont helyett megadhat egy opciót:

| Opció | Mit csinál |
|---|---|
| `H` (Hor) | Vízszintes vonalak, minden kattintott ponton át egy. |
| `V` (Ver) | Függőleges vonalak minden ponton át. |
| `A` (Ang) | Vonalak az Ön által beírt szögben (fokban, az X tengelytől az óramutató járásával ellentétesen), minden ponton át. Az `R` (Reference) a szöget egy kiválasztott vonaltól méri. |
| `B` (Bisect) | Kattintson a sarokra, majd egy pontra az egyik oldalon: a másik oldalon kattintott minden pont a két irány közé eső félúton lévő vonalat ad hozzá. |
| `O` (Offset) | Adjon meg egy távolságot, válasszon ki egy vonalat, majd kattintson az oldalra: egy ettől a távolságra lévő, párhuzamos szerkesztővonal. A `T` (Through) ehelyett egy kattintott ponton át viszi. A távolság a következő alkalomra megmarad. |

## Sugarak rajzolása

1. Kattintson a {{ui:Rajzolás}} › {{ui:Továbbiak}} › {{ui:Sugár}} elemre, vagy írja be a `RAY` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson arra a helyre, ahol a sugarak kezdődnek.
3. Minden sugárhoz kattintson egy pontot, amelyen át áthalad. A befejezéshez nyomja meg az {{key:Enter}} billentyűt.

## Rögzítés hozzájuk és vágásuk

A szerkesztővonalak és sugarak a legközelebbi, a merőleges és a metszéspont fogásait veszik fel. Nincs végük és közepük, így a végpont és a felezőpont nem talál rajtuk semmit.

Ugyanúgy vágják és vágják őket, mint a többi vonalat a {{cmd:TRIM}} és a {{cmd:BREAK}} parancsnál:

- Ha a szerkesztővonal egyik végét levágja, a vágásnál kezdődő sugárrá válik.
- Ha a sugár távoli részét levágja, hagyományos vonal lesz.
- Ha a szerkesztővonalat egy pontnál törje meg, két sugarat kap.

A {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} és {{cmd:STRETCH}} parancsok rájuk is működnek. Az ablakos kijelölés soha nem választja ki őket, mert semelyik ablak nem tudja befogadni egy végtelen vonal egészét; a keresztező ablak vagy egy kattintás igen.

:::note
Minden verziójú DWG és a DXF 2000 szerkesztővonalként tárolja őket. A DXF R12 nem ismeri ezt, ott a rajzon átmenő vonalakká válnak, és a mentés erről szól. A nyomtatás vagy a PDF csak azon a területen rajzolja ki őket, amelyet nyomtat.
:::
