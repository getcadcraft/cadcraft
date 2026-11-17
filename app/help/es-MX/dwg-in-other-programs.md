---
title: Abrir un DWG de CadCraft en otros programas
summary: Qué programas han abierto un DWG guardado por CadCraft, qué se verifica y qué hacer cuando uno da error.
keywords: dwg, abrir en otros programas, compatibilidad, se abre, auditoría, trueview, otros programas CAD, dxf, verificar, guardar como dwg
from: 0f8c15c4
---

## Lo que escribe CadCraft

{{ui:Save}} escribe un DWG real, en la versión con la que llegó el dibujo o en la que elija en {{ui:Save as}}: AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018. Nada se convierte sin que usted lo sepa: el historial enumera lo que cambió en el proceso (por ejemplo, un color verdadero escrito como el color estándar más cercano en un DWG 2000).

## Dónde se ha abierto

Cada DWG que escribe CadCraft se abre, en todas las versiones, con tres programas que no son CadCraft: ODA File Converter (que verifica el archivo y no repara nada en él), LibreDWG y libdxfrw. Su lectura se compara con la de CadCraft: objetos, capas, bloques y atributos, cotas, sombreados, hojas y sus ventanas gráficas.

Abrir los archivos DWG de CadCraft en AutoCAD y en el DWG TrueView gratuito se está verificando en Windows, tipo de objeto por tipo de objeto (AUDIT, capas, hojas, cotas, sombreados, atributos, bloques dinámicos, referencias recortadas, imágenes). Los resultados se listarán aquí cuando estén listos.

## Cuando otro programa da error

1. Guarde de nuevo como DXF ({{ui:Save as}} › {{ui:DXF 2000}}) y ábralo: la mayoría de los programas leen DXF.
2. Guarde el DWG en una versión anterior (2013 o 2010).
3. Avísenos en Discord qué programa y versión es, y qué dijo; el archivo ayuda más.
