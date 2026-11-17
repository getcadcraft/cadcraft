---
title: Punts per a programes BIM
summary: Exporta punts, i els punts d'inserció de blocs amb una descripció, a un fitxer CSV o TXT que importen els programes BIM i de topografia.
keywords: exportpoints, exporta punts, punts, csv, txt, pnezd, penzd, xyz, punts topogràfics, coordenades, bim, replanteig, fitxer de punts, nord, est, cota
from: d80e2d53
---

## Què crearàs

Un fitxer de punts: una línia per punt, amb el seu número, el nord, l'est, la cota i la descripció, que els programes BIM (Revit i Archicad entre d'altres) i el programari de topografia poden importar per situar punts topogràfics, marcadors d'obra o equips.

## Exporta els punts

1. Selecciona els punts i els blocs les posicions d'inserció dels quals vols, o no selecciones res per agafar tots els punts.
2. Escriu {{cmd:EXPORTPOINTS}} (o `EXPPTS`, o {{ui:Blocks}} › {{ui:More}} › {{ui:Export points}}) i prem {{key:Enter}} (torna a prémer {{key:Enter}} a `Seleccioneu punts i blocs` quan no hi hagi res seleccionat).
3. Quan has triat blocs amb atributs, CadCraft en llista les etiquetes: escriu la que té com a valor la descripció (per exemple `ITEM`), o qualsevol altra cosa per usar el nom de cada bloc.
4. Tria les columnes: `PNEZD` (punt, nord, est, cota, descripció: l'habitual), `PENZD` (est abans que nord) o `XYZ` (només les coordenades).
5. Tria les unitats: `D` tal com estan dibuixades, o `M` metres o `F` peus (només quan les unitats del dibuix estan definides: Propietats › {{ui:Units}} amb res seleccionat).
6. Amb un SCP definit, tria `W` món o `U` coordenades SCP (vegeu [SCP i una vista girada](topic:ucs-and-turned-view)).
7. Tria `C` per a un `.csv` separat per comes o `T` per a un `.txt` separat per tabulacions, i el primer número de punt.

El fitxer es baixa com `<drawing>-points.csv` (o `.txt`), i l'historial diu quants punts conté.

## Què hi ha al fitxer

- Un punt per línia, acabat amb un salt de línia (CR LF), amb tres decimals.
- La cota d'un punt és la seva Z (0 si no en té). El punt d'un bloc és el seu punt d'inserció.
- Una descripció que conté una coma (o un tabulador en un TXT) o cometes es posa entre cometes dobles, i les cometes dobles de dins es dupliquen.
- El format és el que llegeix i escriu CivilCraft, així que el fitxer també s'obre allà com a punts.

## Errors habituals

- Només s'ofereix `D` per a les unitats: el dibuix no té les unitats definides. Defineix-les, o converteix-les a l'altre programa.
- Els punts són lluny d'on esperes a l'altre programa: exporta les coordenades del món (`W`), o el SCP que usa el punt topogràfic de l'altre programa (`U`).
