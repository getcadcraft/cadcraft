---
title: Unidades al importar: un archivo indica sus unidades, o se le pregunta primero
summary: Cuando un archivo que trae a un dibujo indica sus unidades, CadCraft lo convierte y lo dice. Cuando no lo indica, CadCraft pregunta antes de colocar nada y recuerda su respuesta para ese archivo.
keywords: unidades, importar, insertar, xref, adjuntar, XATTACH, INSERT, OBJ, DWG, DXF, nube de puntos, elemento de biblioteca, milímetros, metros, pulgadas, pies, escala, tamaño incorrecto, muy grande, muy pequeño, 1000 veces, preguntar, recordado, INSUNITS
from: 558f1293
---

## Lo que va a hacer

Traer un archivo a un dibujo y asegurarse de que entre con el tamaño correcto.

## Pasos

1. Traiga el archivo como de costumbre: `INSERT` › Archivo, `XATTACH`, `POINTCLOUDATTACH`, o {{ui:Archivos}} en el panel Biblioteca.
2. Si el archivo indica sus unidades, no se pregunta nada. La línea de comandos dice qué unidades indica el archivo, y la escala usada cuando difieren de las del dibujo.
3. Si no lo indica, un diálogo pregunta **Unidades de** el archivo. Elija cuánto vale una unidad en el archivo y haga clic en {{ui:Usar estas unidades}}. No se coloca nada antes de su respuesta.
4. {{ui:Cancelar}} (o {{key:Esc}}) no trae nada.

## Qué archivos indican sus unidades

- **DWG y DXF**: las unidades de inserción del dibujo (`$INSUNITS`). A un archivo sin ellas se le pregunta.
- **Nubes de puntos**: LAS y LAZ con sistema de coordenadas, E57, PTX y PLY indican las suyas. A los demás se les pregunta.
- **OBJ**: nunca indica unidades. Se le pregunta.
- **glTF y GLB**: metros, por la regla propia del formato.
- **Imágenes**: no tienen tamaño propio. `IMAGEATTACH` pide el ancho, y ofrece el ancho que usted dio antes a ese archivo.
- **Escaneos**: un escaneo que indica su densidad (puntos por pulgada) entra a su tamaño real en las unidades del dibujo; `SCANATTACH` sigue pidiendo el ancho.
- **El complemento Nubes de puntos**: pregunta al construir una nube cuyo archivo no indica unidad, y rotula los números de la nube con la unidad que lleva.

## Información útil

- Abrir un DWG o DXF como su propio dibujo no pregunta nada: la línea de comandos dice qué unidades indica el archivo, o que no indica ninguna. Propiedades fija las unidades de un dibujo.
- Cuando este dibujo tampoco tiene unidades, un archivo no se puede convertir: se coloca número por número y la línea de comandos lo indica.
- La respuesta se recuerda para ese archivo en esta computadora, en todas las aplicaciones de CadCraft. La próxima vez que entre, no se le pregunta, y la línea de comandos indica que se usaron las unidades recordadas.
- Para que le vuelvan a preguntar: la paleta de comandos ({{key:Mod+K}}) › **Volver a preguntar las unidades de los archivos importados**.
