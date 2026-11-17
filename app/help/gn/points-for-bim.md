---
title: Punto-kuéra BIM programa-kuéra-pe
summary: Exportar punto-kuéra, ha bloque-kuéra inserción punto descripción ndive, CSV térã TXT archivo-pe BIM ha relevamiento programa-kuéra oikeva.
keywords: exportpoints, exportar puntos, puntos, csv, txt, pnezd, penzd, xyz, puntos de relevamiento, coordenadas, bim, replanteo, archivo de puntos, norte, este, elevación
from: d80e2d53
---

## Mba'e rejapóta

Punto archivo: peteĩ línea peteĩ punto ndive, número, norte, este, elevación ha descripción; BIM programa-kuéra (Revit ha Archicad ndive) ha relevamiento programa-kuéra oikeva ojeporavo relevamiento punto, sitio marca térã equipo omoĩ.

## Exportar punto-kuéra

1. Eiporavo punto-kuéra ha bloque referencia-kuéra inserción punto-kuéra, térã ndaipóri eiporavo opavave punto ojeporúva.
2. Eskribi {{cmd:EXPORTPOINTS}} (térã `EXPPTS`, térã {{ui:Blocks}} › {{ui:More}} › {{ui:Export points}}) ha eprese {{key:Enter}}
   (eprese {{key:Enter}} jey `Seleccione puntos y bloques` ndaipóri eiporavo rire).
3. Bloque atributo-ndive eiporavo rire, CadCraft omombe'u etiqueta-kuéra: eskribi peteĩ valor descripción ha'e (ehemplo `ITEM`), térã ambue mba'e bloque réra ojeporúvape.
4. Eiporavo columna-kuéra: `PNEZD` (punto, norte, este, elevación, descripción: ojeporúvahápe), `PENZD` (este norte mboyve) térã `XYZ` (koordenada añoite).
5. Eiporavo unidades: `D` dibujo-pe, `M` metro térã `F` pie (dibujo unidades oñemoĩ rire: Properties ›
   {{ui:Units}} eiporavo mba'e ndojeporavóiramo).
6. UCS oñemoĩramo, eiporavo `W` mundo térã `U` UCS koordenada (eha [UCS and a turned view](topic:ucs-and-turned-view)).
7. Eiporavo `C` coma-separado `.csv` térã `T` tab-separado `.txt`, ha punto número primero.

Archivo ojedescarga `<drawing>-points.csv` (térã `.txt`) ha historia omombe'u punto hetaiterei.

## Mba'e archivo-pe oĩ

- Peteĩ punto peteĩ línea-pe, línea ojapo rire (CR LF), mbohapy decimal.
- Punto elevación ha'e Z (ndaguerekóiramo 0). Bloque punto ha'e inserción punto.
- Descripción coma (térã tab TXT-pe) térã comilla oguerekóva comilla doble-pe oike, comilla ojeduplica.
- Formato CivilCraft ojeleéva ha ojeguardáva, upévare archivo ambue lugar-pe punto-kuéra-pe avei ojeliglo.

## Ñemboguejy ojeikóva

- Unidades-pe `D` añoite ojeikuaa: dibujo ndoguerekói unidades. Oñemoĩ, térã ambue programa-pe ojapo.
- Ambue programa-pe punto ndoikóva nde ojehecháva: exporta mundo koordenada (`W`), térã ambue programa relevamiento punto UCS (`U`).
