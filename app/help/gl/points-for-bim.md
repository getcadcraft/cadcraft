---
title: Puntos para programas BIM
summary: Exporte os puntos, e os puntos de inserción dos bloques con descrición, a un ficheiro CSV ou TXT que importan os programas BIM e de levantamento.
keywords: exportpoints, exportar puntos, puntos, csv, txt, pnezd, penzd, xyz, puntos de levantamento, coordenadas, bim, replanteo, ficheiro de puntos, norte, este, cota
from: d80e2d53
---

## O que vai facer

Un ficheiro de puntos: unha liña por punto, co seu número, norte, este, cota e descrición, que os programas BIM (Revit e Archicad entre eles) e o software de levantamento poden importar para colocar puntos de levantamento, marcadores de obra ou equipos.

## Exportar os puntos

1. Seleccione os puntos e os bloques cuxos puntos de inserción quere, ou non seleccione nada para tomar todos os puntos.
2. Escriba {{cmd:EXPORTPOINTS}} (ou `EXPPTS`, ou {{ui:Bloques}} › {{ui:Máis}} › {{ui:Exportar puntos}}) e prema {{key:Enter}} (prema {{key:Enter}} de novo en `Seleccione puntos e bloques` cando non se seleccionase nada).
3. Cando escolla bloques con atributos, CadCraft lista as súas etiquetas: escriba a que ten como valor a descrición (por exemplo `ITEM`), ou calquera outra cousa para usar o nome de cada bloque.
4. Escolla as columnas: `PNEZD` (punto, norte, este, cota, descrición: a habitual), `PENZD` (este antes que norte) ou `XYZ` (só as coordenadas).
5. Escolla as unidades: `D` como debuxadas, ou `M` metros ou `F` pés (só cando as unidades do debuxo están estabelecidas: Propiedades › {{ui:Unidades}} sen nada seleccionado).
6. Cun SCP establecido, escolla `W` mundo ou `U` coordenadas do SCP (ver [SCP e vista xirada](topic:ucs-and-turned-view)).
7. Escolla `C` para un `.csv` separado por comas ou `T` para un `.txt` separado por tabulacións, e o número do primeiro punto.

O ficheiro descárgase como `<drawing>-points.csv` (ou `.txt`), e o historial indica cantos puntos contén.

## Que hai no ficheiro

- Un punto por liña, rematando cun salto de liña (CR LF), tres decimais.
- A cota dun punto é a súa Z (0 cando non ten). O punto dun bloque é o seu punto de inserción.
- Unha descrición que leva unha coma (ou un tabulador nun TXT) ou unha comilla vai entre comiñas dobres, coas súas comiñas duplicadas.
- O formato é o que lee e escribe CivilCraft, así que o ficheiro tamén se abre alí como puntos.

## Erros habituais

- Só se ofrece `D` para as unidades: o debuxo non ten unidades establecidas. Estabelézaas, ou convértaas no outro programa.
- Os puntos quedan lonxe de onde espera no outro programa: exporte coordenadas de mundo (`W`), ou o SCP que usa o punto de levantamento do outro programa (`U`).
