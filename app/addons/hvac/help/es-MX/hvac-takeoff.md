---
title: HVAC: ductos en TakeoffCraft
summary: Envíe el cuadro de ductos a TakeoffCraft como partidas: un PDF del plano con la cuantificación incluida, o los conjuntos como paquete para su biblioteca de precios.
keywords: takeoffcraft, cuantificación, presupuesto, cantidades, partidas, paquete, biblioteca de precios, lámina metálica, pdf
from: 7289df5d
---

## Un PDF con la cuantificación incluida

{{cmd:EXPORT}} › {{ui:Ductos para TakeoffCraft (PDF con la cuantificación incluida)}} traza el plano en una sola hoja (ARCH D o ISO A1, a la escala estándar más grande que quepa) y coloca una cuantificación de TakeoffCraft dentro del PDF. Abra el PDF en TakeoffCraft y el programa le ofrecerá la cuantificación:

- una **partida lineal** por forma, tamaño y material de ducto, con una marca a lo largo de cada pieza recta;
- una **partida de conteo** por accesorio y tamaño, con una marca donde se ubica cada uno;
- el conjunto de cada partida tiene su **lámina metálica**: el perímetro del ducto × L, o el área del accesorio × N.

TakeoffCraft mide las marcas a la escala del plano, así que sus longitudes son las del cuadro, y en el plano puede ver qué es cada una. La escala se fija y se verifica con la pieza de ducto más larga. Las partidas no tienen precios unitarios: usted define el suyo.

## Los conjuntos como paquete

{{cmd:EXPORT}} › {{ui:Conjuntos de ductos para TakeoffCraft (paquete)}} escribe las mismas partidas sin cantidades como un paquete de TakeoffCraft (un archivo `.json`). En TakeoffCraft abra {{ui:Biblioteca}} › {{ui:Paquetes comerciales}} › {{ui:Abrir un archivo de paquete}} para agregarlos a su biblioteca de precios. Cada partida indica la cantidad que tenía en el dibujo.
