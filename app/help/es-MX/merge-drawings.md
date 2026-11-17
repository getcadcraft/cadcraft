---
title: Combinar las ediciones de dos personas en un mismo dibujo
summary: Permita que git, Fossil o Mercurial combinen dos copias de un archivo DWG o DXF objeto por objeto, usando la clave que CadCraft guarda en cada objeto.
keywords: combinar, git, fossil, mercurial, control de versiones, diferencias, conflicto, tres vías, combinar CadCraft, clave, gitattributes, DWG, DXF
from: 71482bf9
---

Dos personas editan el mismo dibujo. Si cambiaron objetos distintos, la combinación puede ser automática: no hay nada que rehacer a mano.

## Qué hace que funcione

CadCraft da a cada objeto que dibuja una **clave** corta que nunca cambia y que nunca se asigna a dos objetos. Se guarda con el objeto en el DWG o DXF (como datos extra que otros programas conservan). La combinación busca los objetos por esa clave, no por su posición en el archivo, porque cada programa renumera las posiciones al guardar. Desactívela en {{ui:Parámetros}} › CadCraft › Archivos aptos para combinar si nunca combina; los archivos pesan alrededor de 10 por ciento menos.

Un dibujo guardado antes de que existieran las claves todavía se combina: sus objetos reciben una clave según su lugar en el archivo, la misma para todos los que lo abran.

## Configurarlo

Git necesita dos líneas, una vez por repositorio:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# una sola vez, en cada computadora
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecútelo a mano: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil y Mercurial reciben los mismos tres archivos en su propia configuración de herramienta de combinación.

## Las reglas

- Un objeto cambiado de un solo lado se toma. El mismo cambio en ambos lados se toma una vez.
- La misma propiedad cambiada de dos formas es un **conflicto**: se conserva su lado y el informe enumera ambos valores. Abra el resultado, revise ese objeto y corríjalo a mano.
- Un objeto agregado en cualquier lado se conserva. Un objeto eliminado de un lado y sin cambios en el otro se elimina. Eliminado de un lado y cambiado en el otro: se elimina y se informa.
- Capas, bloques, estilos de texto y de cota, hojas y vistas guardadas se combinan de la misma forma. Las restricciones siguen a los objetos que nombran.
- El resultado se escribe en el mismo formato y versión de archivo que el suyo.

No se combina: el orden en que se dibujan los objetos es suyo, y después van los objetos que agregó el otro lado. Los cambios a la misma definición de bloque en ambos lados son un conflicto, nunca se mezclan. Nada se sube; todo se ejecuta en su computadora.
