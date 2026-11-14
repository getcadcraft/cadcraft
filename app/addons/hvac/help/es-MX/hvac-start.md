---
title: HVAC: primeros pasos
summary: Qué hace el complemento HVAC en CadCraft, cómo activarlo y cómo se guarda la ductería en un archivo DWG o DXF común.
keywords: hvac, complemento, ductería, ducto, mecánico, lámina metálica, caudal, cfm, fricción igual, cuadro
from: a9ad5492
---

## Qué es

HVAC es un complemento de CadCraft que viene incluido y es gratuito. Dibuja ductería: usted hace clic en el eje central de un tramo de ducto, y el complemento dibuja ambos lados del ducto con sus codos, transiciones y accesorios de derivación, lo dimensiona según el caudal, lo construye como sólido en la pestaña {{ui:3D}} y lo incluye en un cuadro de ductos con su área de lámina metálica.

Está desactivado hasta que lo active: {{ui:Configuración}} › {{ui:General}} › {{ui:Complementos}} › {{ui:HVAC}}. Sus herramientas están en la sección {{ui:HVAC}} del panel derecho, como comandos (abajo), y, cuando lo pida en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:HVAC}}, como un grupo al final de la barra de herramientas.

Los tamaños siguen las unidades del dibujo: un dibujo en pulgadas o pies obtiene tamaños en pulgadas, caudal en cfm y fricción en pulgadas de columna de agua por 100 pies; cualquier otro dibujo obtiene milímetros, litros por segundo y pascales por metro.

## Su primer tramo de ducto

1. Escriba {{cmd:DUCT}}. Escriba {{ui:Z}} y un tamaño, por ejemplo `24x12` (ancho × alto), o {{ui:A}} y el caudal, y el complemento elige el tamaño.
2. Haga clic en los puntos del tramo. Cada esquina recibe un codo por sí misma. Pulse Enter para terminar.
3. Para derivar, comience el siguiente tramo dentro del primero: el clic se mueve al eje central de este y la derivación recibe allí una te o una toma.
4. Escriba {{cmd:DUCTSCHED}} y haga clic donde va el cuadro.

Vea [Dibujo de tramos de ducto](topic:hvac-ducts) para todo lo que puede hacer un tramo.

## Archivos que se abren en cualquier lugar

Un tramo de ducto se guarda como referencia a bloque con su dibujo incluido, y sus datos se conservan con él bajo el nombre de aplicación `CC_HVAC`. Así, la ductería guardada como DWG o DXF se abre en cualquier programa CAD como el ducto dibujado, y se abre en CadCraft sin el complemento sin perder nada. Sus sólidos son grupos 3D comunes en la pestaña {{ui:3D}}. Con HVAC activado, los tramos vuelven a ser tramos de ducto.
