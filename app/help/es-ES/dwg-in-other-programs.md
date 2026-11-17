---
title: Abrir un DWG de CadCraft en otros programas
summary: En qué programas se han abierto los DWG guardados por CadCraft, qué se comprueba y qué hacer cuando uno de ellos da un error.
keywords: dwg, abrir en otros programas, compatibilidad, ¿se abre?, auditoría, trueview, otros programas CAD, dxf, comprobar, guardar como dwg
from: 0f8c15c4
---

## Qué escribe CadCraft

{{ui:Guardar}} escribe un DWG real, en la versión con la que llegó el dibujo o en la que elija en {{ui:Guardar como}}: AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018. No se convierte nada a sus espaldas: el historial enumera cualquier cosa que haya cambiado por el camino (por ejemplo, un color real escrito como el color estándar más cercano en un DWG 2000).

## Dónde se ha abierto

Todo DWG que escribe CadCraft se abre, en todas las versiones, con tres programas que no son CadCraft: ODA File Converter (que comprueba el archivo y no repara nada en él), LibreDWG y libdxfrw. Su lectura se compara con la de CadCraft: objetos, capas, bloques y atributos, cotas, tramas, hojas y sus vistas.

La apertura de los archivos DWG de CadCraft en AutoCAD y en el DWG TrueView gratuito se está comprobando en Windows, tipo de objeto por tipo de objeto (AUDIT, capas, hojas, cotas, tramas, atributos, bloques dinámicos, referencias recortadas, imágenes). Los resultados se enumerarán aquí cuando estén disponibles.

## Cuando otro programa da un error

1. Vuelva a guardar como DXF ({{ui:Guardar como}} › {{ui:DXF 2000}}) y ábralo: la mayoría de los programas leen DXF.
2. Guarde el DWG en una versión anterior (2013 o 2010).
3. Háganoslo saber en Discord: indique qué programa y qué versión, y qué mensaje mostró; el archivo es lo que más ayuda.
