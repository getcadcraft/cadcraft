---
title: Combinar las ediciones de dos personas en un mismo plano
summary: Dejá que git, Fossil o Mercurial combinen dos copias de un DWG o DXF objeto por objeto, usando la clave que CadCraft guarda en cada objeto.
keywords: combinar, merge, git, fossil, mercurial, control de versiones, diff, conflicto, tres vías, cadcraft merge, clave, gitattributes, DWG, DXF
from: 71482bf9
---

Dos personas editan el mismo plano. Si cambiaron objetos distintos, la combinación puede ser automática: no hay nada que rehacer a mano.

## Qué hace que funcione

CadCraft le da a cada objeto que dibujás una **clave** corta que nunca cambia y que nunca se le asigna a dos objetos. Se guarda con el objeto en el DWG o DXF (como datos extra que otros programas conservan). La combinación busca los objetos por esa clave, no por su posición en el archivo, porque cada programa renumera las posiciones al guardar. Desactivalo en {{ui:Settings}} › CadCraft › Archivos aptos para combinar si nunca combinás; los archivos pesan alrededor de un 10 por ciento menos.

Un plano guardado antes de que existieran las claves también se puede combinar: sus objetos reciben una clave según su lugar en el archivo, la misma para todos los que lo abran.

## Configurarlo

Git necesita dos líneas una sola vez por repositorio:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# una vez, en cada computadora
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sin git, ejecutalo a mano: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil y Mercurial reciben los mismos tres archivos en su propia configuración de herramienta de combinación.

## Las reglas

- Un objeto cambiado de un solo lado se toma. El mismo cambio en ambos lados se toma una sola vez.
- La misma propiedad cambiada de dos maneras es un **conflicto**: tu lado se queda y el informe lista ambos valores. Abrí el resultado, mirá ese objeto y corregilo a mano.
- Un objeto agregado de cualquier lado se conserva. Un objeto eliminado de un lado y sin tocar del otro se elimina. Eliminado de un lado y cambiado del otro: se elimina, y se informa.
- Las capas, los bloques, los estilos de texto y de cota, las hojas y las vistas nombradas se combinan de la misma forma. Las restricciones siguen a los objetos que nombran.
- El resultado se escribe en el mismo formato y versión de archivo que el tuyo.

No se combina: el orden en que se dibujan los objetos es el tuyo, y luego los objetos que agregó el otro lado. Los cambios en la misma definición de bloque en ambos lados son un conflicto, nunca se mezclan. Nada se sube; todo se ejecuta en tu computadora.
