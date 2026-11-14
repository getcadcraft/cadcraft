---
title: Tuberías: el cuadro de tuberías y accesorios
summary: Tubería por material y tamaño con su longitud y peso del acero, cada accesorio y válvula, y las elevaciones de cada tramo: en el dibujo, como CSV o en TakeoffCraft.
keywords: cuadro, cuadro de tuberías, accesorios, válvulas, longitud, peso, csv, takeoffcraft, cuantificación, paquete, cantidades
from: c852343a
---

## Una tabla en el dibujo

Escriba {{cmd:PIPESCHED}}; la línea de comandos da los totales y las pendientes de drenaje demasiado planas; pulse donde irá la tabla. Lista la tubería por material, clase y tamaño con su longitud (y peso, para el acero), luego cada accesorio y válvula por tipo y tamaño con cuántos hay, y un total. Se mantiene actualizada conforme cambian los tramos, dentro del mismo paso de deshacer.

La longitud de la tubería se mide de centro a centro a través de los accesorios, a lo largo de la pendiente. El peso del acero es el peso de extremo liso de ASME B36.10M: 10.69 × (D − t) × t libras por pie (0.0246615 × (D − t) × t kilogramos por metro), así que 20 ft de 2 in cédula 40 pesan 73.1 lb.

## Un archivo CSV

{{cmd:EXPORT}} › {{ui:Cuadro de tuberías (CSV)}} escribe la tubería (material, tamaño, longitud, peso), los accesorios y válvulas (cantidad), y cada tramo (etiqueta, sistema, material, longitud, su elevación en ambos extremos y su pendiente).

## En TakeoffCraft

- {{cmd:EXPORT}} › {{ui:Tuberías para TakeoffCraft (PDF con la cuantificación incluida)}} traza la planta en una hoja a una escala estándar y pone la cuantificación dentro del PDF. Ábralo en TakeoffCraft: una partida lineal por tamaño de tubería, con una marca a lo largo de cada tramo del eje (los tramos con pendiente se miden a lo largo de su pendiente); una partida por pieza por cada accesorio y válvula, con una marca donde está; cada una con su número CSI MasterFormat según el sistema. El conjunto de tubería de acero incluye su peso. Sin tarifas: esas las define usted.
- {{cmd:EXPORT}} › {{ui:Conjuntos de tuberías para TakeoffCraft (paquete)}} escribe los mismos elementos sin cantidades como un paquete para {{ui:Biblioteca}} › {{ui:Paquetes de oficio}} › {{ui:Abrir un archivo de paquete}}.
