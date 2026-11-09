---
title: Tuberías: la tabla de tuberías y accesorios
summary: Tuberías por material y diámetro con su longitud y su peso en acero, cada accesorio y válvula, y las cotas de cada tramo, en el dibujo, en CSV o en TakeoffCraft.
keywords: tabla, tabla de tuberías, accesorios, válvulas, longitud, peso, csv, takeoffcraft, medición, paquete, cantidades
from: c852343a
---

## Una tabla en el dibujo

Escriba {{cmd:PIPESCHED}}; la línea de comandos muestra los totales y los desagües demasiado planos; haga clic donde va la tabla. Lista las tuberías por material, clase y diámetro con su longitud (y peso, en acero), después cada accesorio y válvula por tipo y diámetro con cuántos hay, y un total. Se mantiene actualizada a medida que cambian los tramos, en el mismo paso de deshacer.

La longitud de la tubería se mide de centro a centro a través de los accesorios, a lo largo de la pendiente. El peso del acero es el peso de extremos lisos de ASME B36.10M: 10.69 × (D − t) × t libras por ft (0.0246615 × (D − t) × t kilogramos por metro), así que 20 ft de 2 in Schedule 40 pesan 73.1 lb.

## Un archivo CSV

{{cmd:EXPORT}} › {{ui:Tabla de tuberías (CSV)}} escribe la tubería (material, diámetro, longitud, peso), los accesorios y válvulas (cantidad), y cada tramo (etiqueta, sistema, material, longitud, su cota en ambos extremos y su pendiente).

## En TakeoffCraft

- {{cmd:EXPORT}} › {{ui:Tuberías para TakeoffCraft (PDF con la medición incluida)}} dibuja la planta en una hoja a una escala estándar y pone la medición dentro del PDF. Ábralo en TakeoffCraft: una partida lineal por diámetro de tubería, con una marca a lo largo de cada tramo del eje (los tramos con pendiente se miden a lo largo de su pendiente); una partida de cantidad por accesorio y por válvula, con una marca donde está; cada una con su número CSI MasterFormat según el sistema; el conjunto de la tubería de acero lleva su peso. Sin tarifas: esas las pone usted.
- {{cmd:EXPORT}} › {{ui:Conjuntos de tuberías para TakeoffCraft (paquete)}} escribe las mismas partidas sin cantidades como paquete para {{ui:Biblioteca}} › {{ui:Paquetes de oficios}} › {{ui:Abrir un archivo de paquete}}.
