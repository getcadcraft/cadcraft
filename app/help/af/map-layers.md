---
title: Plaas kaartlae onder die tekening
summary: Wys straatkaarte, lugfoto's of 'n prent met 'n wêreldlêer onder die modelruimte, geplaas volgens die tekening se koördinaatstelsel.
keywords: kaart, kaartlae, maplayers, ml, geomap, basiskaart, lugfoto, satelliet, teëls, xyz, wms, wmts, kaartdiens, wêreldlêer, koördinaatstelsel, epsg, state plane, utm, georeferensie, terreinplan, geolokasie, geografiese ligging, geodata, gestoor, dwg, dxf
from: f103045f
---

## Wat jy gaan maak

'n Terreinplan wat oor 'n lugfoto of 'n straatkaart geteken is, elk op die regte plek.

## Sê vir CadCraft waar die tekening is

1. Stel die tekening se eenhede in {{ui:Eienskappe}} › {{ui:Eenhede}} (byvoorbeeld voet of meter).
2. Tik {{cmd:MAPLAYERS}} (of `ML`) en druk {{key:Enter}}.
3. Onder {{ui:Waar die tekening is}}, tik 'n naam of 'n EPSG-kode in {{ui:Vind 'n stelsel}} (byvoorbeeld `2277` of `Texas Central`) en kies dit in {{ui:Stelsel}}.
4. As die tekening in daardie stelsel se eie koördinate geteken is, los die plasing op 0. As nie, gee een tekenpunt ({{ui:Tekening X}}, {{ui:Tekening Y}}), waar daardie punt op die kaartrooster is ({{ui:Oos}}, {{ui:Noord}}), en hoe ver die tekening van die oos af gedraai is ({{ui:Gedraai (°)}}).
5. Klik {{ui:Gebruik hierdie stelsel}}.

## Voeg 'n laag by

1. Skakel {{ui:Kaartlae van die internet}} aan bo-aan die dialoog. Tot dan word niks van enige bediener gevra nie; wanneer dit aan is, sien die bedieners wat jy byvoeg die gebied op die skerm en jou internetadres, nooit jou tekening nie.
2. Kies in {{ui:Voeg 'n laag by}} waar dit vandaan kom:
   - **Teëls (XYZ)**: 'n teëladres met `{z}`, `{x}` en `{y}`, 'n naam en die erkenning wat sy verskaffer vra.
   - **WMS**, **WMTS** of **ArcGIS**: die diens se adres, dan {{ui:Kry lae}} en kies een.
   - **'n Prent**: 'n PNG of JPEG met sy wêreldlêer (en sy `.prj` as daar een is).
3. Die laag wys onder die tekening. Sy erkenning wys onder regs in die tekening.

Elke laag in die lys kan verborge word, meer of minder deursigtig gemaak word, op of af geskuif word, of verwyder word.

Elke verandering aan die stelsel of die lae is een stap van {{cmd:UNDO}}.

## Gestoor saam met die tekening

Die koördinaatstelsel en die lys van lae word in die tekening gestoor wanneer jy dit as DWG of DXF stoor, en kom terug wanneer jy dit weer oopmaak, op enige rekenaar. Prente uit lêers word nie gestoor nie: voeg hulle weer by na oopmaak. Die skakelaar {{ui:Kaartlae van die internet}} word nie in die tekening gestoor nie: dit behoort aan hierdie blaaier, so 'n tekening wat iemand vir jou stuur, vra geen bediener vir enigiets totdat jy dit self aanskakel nie.

Wat ander programme sien:

| Gestoor as | Die tekening se ligging | Die kaartlae |
|---|---|---|
| DWG 2010, 2013 of 2018, DXF 2000 | Geskryf op die standaardmanier waarop programme 'n tekening se geografiese ligging lees: die stelsel se EPSG-kode, een tekenpunt en waar dit op die kaartrooster is, die eenhede en noord. | Slegs CadCraft |
| DWG 2000, 2004 of 2007, DXF R12 | Slegs CadCraft (CadCraft sê so wanneer jy stoor) | Slegs CadCraft |

- **Getoets:** die ODA File Converter lees die ligging sonder foute, en 'n DXF-biblioteek (ezdxf) lees die EPSG-kode en die plasing presies.
- **Nog nie getoets nie:** of ander tekenprogramme die stelsel uit sy EPSG-kode herken. 'n Program wat sy eie lys stelsels onder ander name hou, wys die tekening dalk sonder ligging.
- Ander programme wys 'n blok met die naam `CADCRAFT_GEO` in die bloklys. Dit is CadCraft se eie kopie van die stelsel en die lae; dit word nooit in die tekening geplaas nie. Los dit daar.

## Tekeninge uit ander programme

As 'n tekening uit 'n ander program 'n geografiese ligging het, lees CadCraft dit:

- As dit 'n EPSG-kode noem, wys {{ui:Waar die tekening is}} daardie stelsel en word die kaartlae daardeur geplaas.
- As CadCraft die stelsel nie ken nie ('n ander program se eie naam daarvoor, 'n plaaslike rooster, of 'n skaalfaktor), word die ligging nie gebruik nie, maar dit word behou en teruggestoor soos dit was, sodat die ander program dit steeds vind. Kies 'n stelsel in {{ui:Waar die tekening is}} om dit te vervang.

:::note
Kaartlae word slegs op die skerm geteken: hulle word nie gedruk nie. Gebruik slegs kaartdienste wie se voorwaardes dit toelaat, en hou hul erkenning sigbaar.
:::
