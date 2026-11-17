---
title: Capes de mapa sota el dibuix
summary: Mostreu mapes de carrers, imatges aèries o una imatge amb un fitxer de món sota l'espai model, col·locats pel sistema de coordenades del dibuix.
keywords: mapa, capes de mapa, maplayers, ml, geomap, mapa base, aeri, satèl·lit, rajoles, xyz, wms, wmts, servei de mapes, fitxer de món, sistema de coordenades, epsg, state plane, utm, georeferència, plànol de situació, geolocalització, ubicació geogràfica, geodades, desat, dwg, dxf
from: f103045f
---

## Què crearu

Un plànol de situació dibuixat sobre una imatge aèria o un mapa de carrers, cadascun al lloc correcte.

## Digueu a CadCraft on és el dibuix

1. Definiu les unitats del dibuix a {{ui:Propietats}} › {{ui:Unitats}} (per exemple peus o metres).
2. Escriviu {{cmd:MAPLAYERS}} (o `ML`) i premeu {{key:Enter}}.
3. Sota {{ui:On és el dibuix}}, escriviu un nom o un codi EPSG a {{ui:Cerca un sistema}} (per exemple `2277` o `Texas Central`) i trieu-lo a {{ui:Sistema}}.
4. Si el dibuix està dibuixat amb les coordenades pròpies d'aquell sistema, deixeu la col·locació a 0. Si no, doneu un punt del dibuix ({{ui:X del dibuix}}, {{ui:Y del dibuix}}), on és aquest punt a la quadrícula del mapa ({{ui:X (est)}}, {{ui:Y (nord)}}), i quant està girat el dibuix respecte de l'est ({{ui:Girat (°)}}).
5. Feu clic a {{ui:Utilitza aquest sistema}}.

## Afegiu una capa

1. Activeu {{ui:Capes de mapa des d'internet}} a la part superior del diàleg. Fins aleshores no es demana res a cap servidor; quan és activat, els servidors que afegiu veuen l'àrea a la pantalla i la vostra adreça d'internet, mai el vostre dibuix.
2. A {{ui:Afegeix una capa}}, trieu d'on prové:
   - **Rajoles (XYZ)**: una adreça de rajoles amb `{z}`, `{x}` i `{y}`, un nom i el crèdit que demana el seu proveïdor.
   - **WMS**, **WMTS** o **ArcGIS**: l'adreça del servei, després {{ui:Obtén les capes}} i trieu-ne una.
   - **Una imatge**: un PNG o JPEG amb el seu fitxer de món (i el seu `.prj` quan n'hi ha un).
3. La capa es mostra sota el dibuix. El seu crèdit es mostra a la part inferior dreta del dibuix.

Cada capa de la llista es pot amagar, fer més o menys transparent, pujar o baixar, o suprimir.

Cada canvi de sistema o de capes és un pas de {{cmd:UNDO}}.

## Desat amb el dibuix

El sistema de coordenades i la llista de capes es desen al dibuix quan el deseu com a DWG o DXF, i tornen a aparèixer quan l'obriu de nou, a qualsevol ordinador. Les imatges de fitxers no es desen: torneu-les a afegir després d'obrir. L'interruptor {{ui:Capes de mapa des d'internet}} no es desa al dibuix: pertany a aquest navegador, de manera que un dibuix que us envia algú no demana res a cap servidor fins que l'activeu vosaltres mateixos.

Què veuen altres programes:

| Desat com a | Ubicació del dibuix | Les capes de mapa |
|---|---|---|
| DWG 2010, 2013 o 2018, DXF 2000 | Escrita de la manera estàndard com els programes llegeixen la ubicació geogràfica d'un dibuix: el codi EPSG del sistema, un punt del dibuix i on és a la quadrícula del mapa, les unitats i el nord. | Només CadCraft |
| DWG 2000, 2004 o 2007, DXF R12 | Només CadCraft (CadCraft ho indica en desar) | Només CadCraft |

- **Comprovat:** l'ODA File Converter llegeix la ubicació sense errors, i una biblioteca DXF (ezdxf) llegeix exactament el codi EPSG i la col·locació.
- **Encara no comprovat:** si altres programes de dibuix reconeixen el sistema pel seu codi EPSG. Un programa que manté la seva pròpia llista de sistemes amb altres noms pot mostrar el dibuix sense cap ubicació.
- Altres programes mostren un bloc anomenat `CADCRAFT_GEO` a la llista de blocs. És la còpia pròpia de CadCraft del sistema i de les capes; mai no es col·loca al dibuix. Deixeu-lo allà.

## Dibuixos d'altres programes

Quan un dibuix d'un altre programa té una ubicació geogràfica, CadCraft la llegeix:

- Si indica un codi EPSG, {{ui:On és el dibuix}} mostra aquell sistema i les capes de mapa es col·loquen segons ell.
- Si CadCraft no coneix el sistema (el nom propi de l'altre programa, una quadrícula local o un factor d'escala), la ubicació no s'usa, però es conserva i es torna a desar tal com era, perquè l'altre programa la continuï trobant. Trieu un sistema a {{ui:On és el dibuix}} per substituir-la.

:::note
Les capes de mapa només es dibuixen a la pantalla: no es tracen. Useu només serveis de mapes les condicions dels quals ho permetin, i manteniu visible el seu crèdit.
:::
