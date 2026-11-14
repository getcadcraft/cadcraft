---
title: Climatización: conductos en TakeoffCraft
summary: Envíe la tabla de conductos a TakeoffCraft como partidas: un PDF del plano con la medición dentro, o los conjuntos como paquete para su biblioteca de precios.
keywords: takeoffcraft, medición, estimación, cantidades, partidas, paquete, biblioteca de precios, chapa, pdf
from: 7289df5d
---

## Un PDF con la medición dentro

{{cmd:EXPORT}} › {{ui:Conductos para TakeoffCraft (PDF con la medición incluida)}} traza el plano en una sola hoja (ARCH D o ISO A1, a la escala estándar más grande que quepa) y coloca una medición de TakeoffCraft dentro del PDF. Abra el PDF en TakeoffCraft y le ofrecerá la medición:

- una **partida lineal** por forma, tamaño y material de conducto, con una marca a lo largo de cada tramo recto;
- una **partida por unidades** por accesorio y tamaño, con una marca donde se sitúa cada uno;
- la **chapa** de cada partida: el perímetro × L del conducto, o el área × N del accesorio.

TakeoffCraft mide las marcas a la escala de la hoja, así que sus longitudes son las de la tabla, y en la hoja puede ver qué es cada una. La escala se fija y se comprueba con el tramo de conducto más largo. Las partidas no llevan precios: el precio lo establece usted.

## Los conjuntos como paquete

{{cmd:EXPORT}} › {{ui:Conjuntos de conductos para TakeoffCraft (paquete)}} escribe las mismas partidas sin cantidades como paquete de TakeoffCraft (un archivo `.json`). En TakeoffCraft abra {{ui:Biblioteca}} › {{ui:Paquetes de oficios}} › {{ui:Abrir un archivo de paquete}} para añadirlas a su biblioteca de precios. Cada partida indica la cantidad que tenía en el dibujo.
