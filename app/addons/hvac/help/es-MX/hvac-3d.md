---
title: HVAC: ductos en la pestaña 3D
summary: Cada tramo de ducto también es un sólido en la pestaña 3D de CadCraft, construido a partir del mismo tramo y actualizado conforme dibuja.
keywords: 3d, sólido, modelo, ductería, elevación, parte inferior del ducto, etiqueta, glb, coordinación
from: e5774345
---

## El mismo tramo en 3D

Cada tramo de ducto se construye como un sólido cerrado en la pestaña {{ui:3D}}, a su elevación (la parte inferior del ducto), con sus codos, transiciones y derivaciones. Se vuelve a dibujar en el mismo paso cada vez que cambia el tramo, así que deshacer revierte el 2D y el 3D juntos.

Los sólidos llevan la etiqueta `HVAC ductwork`: oculte o muestre todos desde las etiquetas de la pestaña 3D. Cada sistema tiene su propio color.

## Volver a construirlos

{{cmd:DUCT3D}} construye de nuevo el sólido de cada tramo y elimina los sólidos cuyo tramo ya no existe. Úselo después de abrir un dibujo que se editó sin el complemento HVAC (sus tramos se movieron, pero sus sólidos no), o después de volver a activar los sólidos.

Desactive los sólidos en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:HVAC}} › {{ui:Sólidos en la pestaña 3D}} para dibujos muy grandes; los sólidos que ya existen permanecen hasta que los borre en la pestaña 3D.

## Sin el complemento

Un sólido es un grupo 3D común. Se guarda con el dibujo (DWG y DXF), se muestra en la pestaña 3D y se exporta a GLB, OBJ y STL junto con todo lo demás, con o sin HVAC activado.
