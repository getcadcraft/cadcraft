---
title: Unidades al importar: un archivo indica sus unidades, o se le pregunta antes
summary: Cuando un archivo que trae a un dibujo indica sus unidades, CadCraft lo convierte y lo dice. Cuando no lo indica, CadCraft pregunta antes de colocar nada y recuerda su respuesta para ese archivo.
keywords: unidades, importar, insertar, xref, adjuntar, XATTACH, INSERT, OBJ, DWG, DXF, nube de puntos, elemento de biblioteca, milímetros, metros, pulgadas, pies, escala, tamaño incorrecto, demasiado grande, demasiado pequeño, 1000 veces, preguntar, recordado, INSUNITS
from: 558f1293
---

## Lo que hará

Traer un archivo a un dibujo y asegurarse de que entra con el tamaño correcto.

## Pasos

1. Traiga el archivo como de costumbre: `INSERT` › Archivo, `XATTACH`, `POINTCLOUDATTACH`, o {{ui:Archivos}} en el panel Biblioteca.
2. Si el archivo indica sus unidades, no se pregunta nada. La línea de comandos indica qué unidades tiene el archivo, y la escala usada cuando difieren de las del dibujo.
3. Si no las indica, un diálogo pregunta **Unidades de** el archivo. Elija qué representa una unidad del archivo y haga clic en {{ui:Usar estas unidades}}. Nada se coloca antes de responder.
4. {{ui:Cancelar}} (o {{key:Esc}}) no trae nada.

## Qué archivos indican sus unidades

- **DWG y DXF**: las unidades de inserción del dibujo (`$INSUNITS`). Si un archivo no las tiene, se le pregunta.
- **Nubes de puntos**: LAS y LAZ con un sistema de coordenadas, E57, PTX y PLY indican las suyas. Los demás se preguntan.
- **OBJ**: nunca indica unidades. Se le pregunta.
- **glTF y GLB**: metros, por la regla del propio formato.
- **Imágenes**: no tienen tamaño propio. `IMAGEATTACH` pide la anchura, y ofrece la anchura que indicó antes para ese archivo.
- **Escaneos**: un escaneo que indica su densidad (puntos por pulgada) entra a su tamaño real en las unidades del dibujo; `SCANATTACH` aún pide la anchura.
- **El complemento Nubes de puntos**: pregunta al crear una nube cuyo archivo no indica unidad, y rotula los números de la nube en la unidad que lleva.

## Conviene saber

- Abrir un DWG o DXF como dibujo propio no pregunta nada: la línea de comandos indica qué unidades tiene el archivo, o que no tiene ninguna. {{ui:Propiedades}} define las unidades de un dibujo.
- Cuando este dibujo tampoco tiene unidades, un archivo no se puede convertir: se coloca número por número y la línea de comandos lo indica.
- La respuesta se recuerda para ese archivo en este equipo, en todas las aplicaciones de CadCraft. La próxima vez que entre no se le pregunta, y la línea de comandos indica que se usaron las unidades recordadas.
- Para que vuelva a preguntar: la paleta de comandos ({{key:Mod+K}}) › **Volver a preguntar por las unidades de los archivos importados**.
