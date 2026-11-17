---
title: Unidades al importar: un archivo declara sus unidades, o se le pregunta primero
summary: Cuando un archivo que trae a un plano declara sus unidades, CadCraft lo convierte y lo indica. Cuando no lo hace, CadCraft pregunta antes de colocar nada y recuerda su respuesta para ese archivo.
keywords: unidades, importar, insertar, xref, adjuntar, XATTACH, INSERT, OBJ, DWG, DXF, nube de puntos, elemento de biblioteca, milímetros, metros, pulgadas, pies, escala, tamaño incorrecto, muy grande, muy chico, 1000 veces, preguntar, recordado, INSUNITS
from: 558f1293
---

## Lo que va a hacer

Traer un archivo a un plano y asegurarse de que entre con el tamaño correcto.

## Pasos

1. Traiga el archivo como de costumbre: `INSERT` › File, `XATTACH`, `POINTCLOUDATTACH`, o {{ui:Files}} en el panel Library.
2. Si el archivo declara sus unidades, no se pregunta nada. La línea de comando indica qué unidades declara el archivo, y la escala usada cuando son distintas de las del plano.
3. Si no las declara, un diálogo pregunta **Units of** el archivo. Elija cuánto vale una unidad del archivo y haga clic en {{ui:Use these units}}. No se coloca nada antes de su respuesta.
4. {{ui:Cancel}} (o {{key:Esc}}) no trae nada.

## Qué archivos declaran sus unidades

- **DWG y DXF**: las unidades de inserción del plano (`$INSUNITS`). Un archivo sin ellas se consulta.
- **Nubes de puntos**: LAS y LAZ con sistema de coordenadas, E57, PTX y PLY declaran las suyas. Los demás se consultan.
- **OBJ**: nunca declara unidades. Se le pregunta.
- **glTF y GLB**: metros, según la regla del propio formato.
- **Imágenes**: no tienen tamaño propio. `IMAGEATTACH` pide el ancho, y ofrece el ancho que usted dio antes a ese archivo.
- **Escaneos**: un escaneo que declara su densidad (puntos por pulgada) entra con su tamaño real en las unidades del plano; `SCANATTACH` igual pide el ancho.
- **El complemento Point clouds**: pregunta cuando construye una nube cuyo archivo no declara unidad, y rotula los números de la nube con la unidad que lleva.

## Good to know

- Abrir un DWG o DXF como plano propio no pregunta nada: la línea de comando indica qué unidades declara el archivo, o que no declara ninguna. Properties fija las unidades de un plano.
- Cuando este plano tampoco tiene unidades, un archivo no se puede convertir: se coloca número por número y la línea de comando lo indica.
- La respuesta se recuerda para ese archivo en esta computadora, en todas las aplicaciones de CadCraft. La próxima vez que entre, no se pregunta, y la línea de comando indica que se usaron las unidades recordadas.
- Para que se pregunte otra vez: la paleta de comandos ({{key:Mod+K}}) › **Ask again for the units of imported files**.
