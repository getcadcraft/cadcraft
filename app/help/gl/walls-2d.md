---
title: Debuxar muros, portas e xanelas intelixentes en 2D
summary: Debuxar muros como unha polilínea, unilos limpamente e colocar portas e xanelas que se moven co muro. Todo en 2D, sen modelo 3D.
keywords: muro, muros, WALL, WA, porta, DOOR, DR, xanela, WINDOW, WN, DELOPENING, muro intelixente, planta, abatemento, bisagra, abertura
from: 45845d49
---

Os muros aquí son obxectos de debuxo 2D. Non crean ningún modelo 3D, así que unha planta é tan lixeira coma un debuxo de liñas. Para un modelo de edificio, use BimCraft.

## Debuxar muros

Escriba `WALL` (`WA`), ou escolla {{ui:Muro}} no menú {{ui:Máis}} do grupo {{ui:Debuxar}}, e prema puntos como faría para unha polilínea. Prema {{key:Enter}} para rematar, ou escriba `C` para pechar a sala.

- `T` fixa o espesor.
- `J` indica a que seguen os seus clics: o centro do muro, ou a súa cara esquerda ou dereita.
- `F` fixa o recheo: ningún, sólido ou trama.

As esquinas inglétanse por si mesmas. Un muro que remata dentro do espesor doutro muro únese nunha T limpa, e os muros que se cruzan abren paso entre eles. As uniones gárdanse cos muros. Para rectángulos, polígonos, arcos, divisións, bloqueos e o resto, vexa «Formas, cortes, desfasamentos e bloqueos de muros en 2D».

## Engadir portas e xanelas

Escriba `DOOR` (`DR`) ou `WINDOW` (`WN`) e prema sobre un muro. Unha porta abre cara ao lado do muro onde prema. `W` fixa o ancho, `Y` o tipo e `H` o lado da bisagra. Siga premendo para colocar máis, e prema {{key:Enter}} para rematar. As portas poden ser simples, dobres, correderas ou unha entrada aberta. As xanelas poden ser fixas, de batente ou correderas.

## Cambiar

Seleccione un muro para ver as súas pinzas:

- As pinzas dos extremos estiran o muro. Os muros unidos a el séguenlo.
- A pinza central move o muro.
- Unha pinza nunha abertura desliza a abertura ao longo do muro.
- As frechas inverten a bisagra e o sentido de apertura dunha porta.

Propiedades mostra o espesor, o recheo e cada abertura: tipo, ancho, posición, bisagra, sentido de apertura, se se ve aberta ou pechada, e {{ui:Retirar}}. `DELOPENING` elimina a abertura máis próxima de onde prema.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` e `ERASE` funcionan como de costume. As portas e xanelas van co seu muro, os muros unidos conservan as súas uniones, e un Desfacer desfai todo.

## Noutros programas

Cada muro gárdase como un bloque normal, así que outros programas CAD o mostran ben e poden movelo, pero non o poden editar como muro. `EXPLODE` convirte un muro en liñas e arcos simples, e deixa de ser un muro.
