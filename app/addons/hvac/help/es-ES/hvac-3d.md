---
title: Climatización: conductos en la pestaña 3D
summary: Cada tramo de conducto es también un sólido en la pestaña 3D de CadCraft, construido a partir del mismo tramo y actualizado a medida que dibuja.
keywords: 3d, sólido, modelo, conductos, cota, cara inferior del conducto, etiqueta, glb, coordinación
from: e5774345
---

## El mismo tramo en 3D

Cada tramo de conducto se construye como un único sólido cerrado en la pestaña {{ui:3D}}, a su cota (la cara inferior del conducto), con sus codos, transiciones y derivaciones. Se vuelve a dibujar en el mismo paso siempre que cambia el tramo, de modo que deshacer devuelve el 2D y el 3D a la vez.

Los sólidos llevan la etiqueta `HVAC ductwork`: ocúltelos o muéstrelos todos desde las etiquetas de la pestaña 3D. Cada sistema tiene su propio color.

## Volver a construirlos

{{cmd:DUCT3D}} vuelve a construir el sólido de cada tramo y elimina los sólidos cuyo tramo ya no existe. Úselo después de abrir un dibujo editado sin el complemento de {{ui:Climatización}} (sus tramos se movieron, pero sus sólidos no), o después de volver a activar los sólidos.

Desactive los sólidos en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Climatización}} › {{ui:Sólidos en la pestaña 3D}} para dibujos muy grandes; los sólidos ya existentes se mantienen hasta que los borre en la pestaña 3D.

## Sin el complemento

Un sólido es un grupo 3D corriente. Se guarda con el dibujo (DWG y DXF), se muestra en la pestaña 3D y se exporta a GLB, OBJ y STL junto con todo lo demás, con o sin la climatización activada.
